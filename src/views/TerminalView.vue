<template>
  <Terminal welcomeMessage="Ah! A developer!..Or just a curious person 😇? try '--help' for help" prompt="moe $" class="dark-demo-terminal" />
</template>
<script lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import Terminal from 'primevue/terminal';
import TerminalService from "primevue/terminalservice";

export default {
    name:'terminal-view',
    components:{Terminal,TerminalService},
    setup() {
        onMounted(() => {
            TerminalService.on('command', commandHandler);
        })

        onBeforeUnmount(() => {
            TerminalService.off('command', commandHandler);
        })

        const commandHandler = (text:String) => {
            let response;
            let argsIndex = text.indexOf(' ');
            let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

            switch(command) {
                case "today":
                    response = 'Today is ' + new Date().toDateString();
                    break;

                case "hello moe":
                    response = 'Hola! ';
                    break;

                case "number":
                    response = Math.floor(Math.random() * 100);
                    break;
                                
                case "--help":
                    response = "useful commands: 'today','hello moe','number','--help'";
                    break;

                default:
                    response = "Unknown command: " + command;
            }
            
            TerminalService.emit('response', response);
        }

        return { commandHandler }
    }
}
</script>

<style lang="scss" scoped>
p {
    margin-top: 0;
}

::v-deep(.dark-demo-terminal) {
    background-color: #212121;
    color: #ffffff;

    .p-terminal-command {
        color: #80CBC4;
    }

    .p-terminal-prompt {
        color: #FFD54F;
    }

    .p-terminal-response {
        color: #9FA8DA;
    }
}
</style>



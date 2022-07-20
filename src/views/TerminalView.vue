<template>
  <Terminal welcomeMessage="moe@dayrakiarts OS|DEVICE ~terminal " prompt="moe $ " class="dark-demo-terminal" />
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
                case "--help":
                    response = "useful commands:'moe': get to know Moe \r\n 'hello': just say hi\n '.home': navigate to home\n '--help': get all available commands";
                    break;

                case "moe":
                    response = "Wait a minute. I'm still defining myself 😟.";
                    break;

                case "hello":
                    response = "Hola!\n I'm Moe. type 'moe' to know more about me 😊. ";
                    break;

                case "number":
                    response = Math.floor(Math.random() * 100);
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



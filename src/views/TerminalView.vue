<template>
  <Terminal
    welcomeMessage="~terminal (type '--help' for more information)"
    prompt="moe $ "
    class="dark-demo-terminal"
  />
</template>
<script>
import { onMounted, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";
import Terminal from "@/components/Terminal.vue";
import TerminalService from "primevue/terminalservice";

export default {
  name: "terminal-view",
  components: { Terminal, TerminalService },
  setup() {
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      TerminalService.on("command", commandHandler);
    });

    onBeforeUnmount(() => {
      TerminalService.off("command", commandHandler);
    });

    const commandHandler = (text) => {
      let response;
      let argsIndex = text.indexOf(" ");
      let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

      switch (command.toLowerCase()) {
        case "--help":
          response = `commands:
            <br />
            <div class="ml-4 w-1/5 inline-block">moe</div><div class="w-2/5 inline-block">get to know moe</div>
            <br /> 
            <div class="ml-4 w-1/5 inline-block">hello</div><div class="w-2/5 inline-block">just say hi</div>
            <br /> 
            <div class="ml-4 w-1/5 inline-block">.home</div><div class="w-2/5 inline-block">navigate to home</div>
            <br /> 
            <br /> 
            <div class="ml-4 w-1/5 inline-block">--help</div><div class="w-2/5 inline-block">get all available commands</div>`;
          break;

        case "moe":
          response = `My first name is actually Mohammed but I go by Moe, Mauris, and in video
    games I'm known as El3ctr0n.
    <br />
    I create
    <a target="_blank" href="https://dayrakiarts.com/">stuff for the web</a>
    including websites, web applications, and contribute to <a target="_blank" href="https://github.com/moedayraki/">open source</a> as
    much as I can.`;
          break;

        case "hello":
          response =
            "Hola!<br /> I'm Moe. type 'moe' to know more about me 😊 or follow me on <a target='_blank' href='https://twitter.com/MohammedDayraki'>Twitter</a>";
          break;

        case ".home":
          router.push("/");
          break;

        default:
          response = "unknown command: " + command;
      }

      TerminalService.emit("response", response);
    };

    return { commandHandler };
  },
};
</script>

<style>
p {
  margin-top: 0;
}
.dark-demo-terminal {
  height: 90vh;
  width: 90vw;
}
@media (prefers-color-scheme: dark) {
  .dark-demo-terminal {
    color: white;
  }
  .p-terminal-command {
    color: #5dce41;
  }

  .p-terminal-prompt {
    color: #ff5d5d;
    margin-right: 0.5rem;
  }

  .p-terminal-response {
    color: white;
  }
}

@media (prefers-color-scheme: light) {
  .dark-demo-terminal {
    color: black;
  }
  .p-terminal-command {
    color: #146f00;
  }

  .p-terminal-prompt {
    color: #ff0000;
    margin-right: 0.5rem;
  }

  .p-terminal-response {
    color: black;
  }
}
</style>

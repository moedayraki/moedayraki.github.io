<template>
  <Terminal
    welcomeMessage="~terminal (type '--help' for more information)"
    prompt="moe $ "
    class="moe-terminal"
  />
</template>
<script>
import { onMounted, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";
import Terminal from "@/components/Terminal.vue";
import TerminalService from "primevue/terminalservice";
import { useAppStore } from "@/stores/app";
import axios from "axios";

export default {
  name: "terminal-view",
  components: { Terminal, TerminalService },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const app = useAppStore();

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
      let param = text.substring(argsIndex + 1);

      switch (command.toLowerCase()) {
        case "--help":
          response = `commands:
            <br />
            ~terminal is moe's portfolio as a CLI.
            <br />
            <div class="ml-4 w-1/5 inline-block">moe</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">get to know more about moe</div>
            <br />
            <div class="ml-4 w-1/5 inline-block">hello</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">just say hi</div>
            <br />
            <div class="ml-4 w-1/5 inline-block">toggle-scheme</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">toggle between light/dark modes</div>
            <br />
            <div class="ml-4 w-1/5 inline-block">navigate</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">navigate through different pages</div>
            <br />
            <div class="ml-4 w-1/5 inline-block">blog</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">redirect to the moe blog</div>
            <br />
            <br />
            <div class="ml-4 w-1/5 inline-block">tech-me</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">throws a random tech-savvy phrase.</div>
            <br />
            <br />
            <div class="ml-4 w-1/5 inline-block">--help</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">get all available commands</div>
            <br />
            <div class="ml-4 w-1/5 inline-block">clear</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">clear the CLI</div>`;
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
          switch (param.toLowerCase()) {
            case "--languages":
              axios({
                url: "https://libretranslate.com/languages",
                method: "get",
                headers: {
                  accept: 'application/json"',
                },
              }).then(function (jsonResponse) {
                response = "available languages: ";
                jsonResponse.data.forEach((element) => {
                  response += `${element.name} `;
                  TerminalService.emit("response", response);
                });
              });
              break;

            default:
              response =
                "I'm sorry! ☹️ but I'm working on this feature.<br /> please type 'hello --languages' to get list of available languages or follow me on <a target='_blank' href='https://twitter.com/MohammedDayraki'>Twitter</a>";
          }
          break;

        case "tech-me":
          axios({
            url: "https://techy-api.vercel.app/api/text",
            method: "get",
          }).then(function (jsonResponse) {
            response = jsonResponse.data;
            TerminalService.emit("response", response);
          });
          break;

        case "navigate":
          switch (param.toLowerCase()) {
            case "--help":
              response = `available paths:
              <br />
              <div class="ml-4 w-1/5 inline-block">home</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">navigate to home</div>
              <br />
              <div class="ml-4 w-1/5 inline-block">projects</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">navigate to projects</div>
              <br />
              <div class="ml-4 w-1/5 inline-block">contact</div><div class="w-2/5 inline-block text-teal-700 dark:text-teal-200">navigate to contact</div>
              <br />
              `;
              break;

            case "home":
              router.push("/");
              break;

            case "projects":
              router.push("/projects");
              break;

            case "contact":
              router.push("/contact");
              break;

            default:
              response =
                "unknown path. type 'navigate --help' to get all the options";
              break;
          }
          break;

        case "toggle-scheme":
          app.toggleMediaPreference();
          break;

        case "blog":
          window.location.href = "https://www.blog.dayrakiarts.com";
          response = "redirecting...";
          break;

        case "jana":
          response = `Jana is something I can't live without.❤
          <br/>
          If you find this code, you're either know your way in programming or you're close enough to me! 😇
          <br/>
          I love Jana, I will always love Jana!
          `;
          break;

        case "clear":
          router.push("/terminal");
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
.moe-terminal {
  height: 90vh;
  width: 90vw;
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

:root.dark .moe-terminal {
  color: white;
}
:root.dark .p-terminal-command {
  color: #5dce41;
}

:root.dark .p-terminal-prompt {
  color: #ff5d5d;
  margin-right: 0.5rem;
}

:root.dark .p-terminal-response {
  color: white;
}
</style>

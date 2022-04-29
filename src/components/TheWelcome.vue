<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Get to Know Moe</template>

    My first name is actually Mohammed but I go by Moe, Mauris, and in video
    games I'm known as El3ctr0n. I create
    <a target="_blank" href="https://dayrakiarts.com/">stuff for the web</a>
    including websites, web applications, and contribute to <a target="_blank" href="https://github.com/moedayraki/">open source</a> as
    much as I can.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>My Go to Stack</template>

    My road to web development is not that common. I got my Masters from University of Windsor as an Electrical Computer Engineer
    with focus on Cyber Security and Wireless Communication. I've then landed a job as a web developer.
    
    <br />
    
    There, <a target="_blank" href="https://laravel.com/">laravel</a> was my door to web development. You can read more
    about my road to web development <a target="_blank" href="https://dayrakiarts.com/"here</a>.
    
    When it comes to web development, my go to stack is:
    <ul>
      <li><a target="_blank" href="https://laravel.com/">VS Code</a> as an IDE</li>
      <li>Backend written with the beatiful <a target="_blank" href="https://laravel.com/">Laravel</a></li>
      <li>What's better than <a target="_blank" href="https://laravel.com/">VueJS</a> when it comes to frontend</li>
      <li><a target="_blank" href="https://laravel.com/">TailwindCSS</a>, the CSS framework that I recommend</li>\
      <li>For databases, I use relational databases including <a target="_blank" href="https://laravel.com/">SqlSrv, mySQL, and SqlLite</a></li>
    </ul>

    <br />
    Technology I'm learning now include
    <ul>
      <li><a target="_blank" href="https://laravel.com/">TypeScript</a>, Javascript's kid with types.</li>
      <li><a target="_blank" href="https://laravel.com/">Docker</a> for better deployment experience.</li>
      <li><a target="_blank" href="https://laravel.com/">Cypress</a>for right development experience.</li>
    </ul>

    More details about packaes, technologies, and ideas I use are available in <a href="https://github.com/moedayraki/moe-useful-things" target="_blank">Moe Useful Things</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>How Would It Come Together?</template>

    (A brief story of my life)Get official tools and libraries for your project:
    <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>,
    <a target="_blank" href="https://router.vuejs.org/">Vue Router</a>,
    <a target="_blank" href="https://test-utils.vuejs.org/">Vue Test Utils</a>,
    and
    <a target="_blank" href="https://github.com/vuejs/devtools">Vue Dev Tools</a
    >. If you need more resources, we suggest paying
    <a target="_blank" href="https://github.com/vuejs/awesome-vue"
      >Awesome Vue</a
    >
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>My Blog</template>

    Got stuck? Ask your question on
    <a target="_blank" href="https://chat.vuejs.org">Vue Land</a>, our official
    Discord server, or
    <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js"
      >StackOverflow</a
    >. You should also subscribe to
    <a target="_blank" href="https://news.vuejs.org">our mailing list</a> and
    follow the official
    <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support</template>

    As an independent project, Vue relies on community backing for its
    sustainability. You can help us by
    <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
  </WelcomeItem>
</template>

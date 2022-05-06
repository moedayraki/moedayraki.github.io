<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import VSCodeIcon from "./icons/IconVSCode.vue";
import LaravelIcon from "./icons/IconLaravel.vue";
import IconVuejsVue from "./icons/IconVuejs.vue";
import IconTailwindcss from "./icons/IconTailwindcss.vue";
import IconMySql from "./icons/IconMySql.vue";
import IconSqlsrv from "./icons/IconSqlsrv.vue";
import IconSqlLite from "./icons/IconSqlLite.vue";
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
    about my road to web development <a target="_blank" href="https://dayrakiarts.com/">here</a>.
    
    When it comes to web development, my go to stack is:
    <ul>
      <li><VSCodeIcon /> <a target="_blank" href="https://laravel.com/">VS Code</a> as an IDE</li>
      <li>Backend written with the beatiful <LaravelIcon /><a target="_blank" href="https://laravel.com/">Laravel</a></li>
      <li>What's better than <IconVuejs /> <a target="_blank" href="https://laravel.com/">VueJS</a> when it comes to frontend</li>
      <li><IconTailwindcss /> <a target="_blank" href="https://laravel.com/">TailwindCSS</a>, the CSS framework that I recommend</li>
      <li>For databases, I use relational databases including <a target="_blank" href="https://laravel.com/"><IconSqlsrv /> SqlSrv,<IconMySql /> mySQL, and <IconSqlLite /> SqlLite</a></li>
    </ul>

    <br />
    Technology I'm learning now include
    <ul>
      <li><a target="_blank" href="https://laravel.com/">TypeScript</a>, Javascript's kid with types.</li>
      <li><a target="_blank" href="https://laravel.com/">Docker</a> for better deployment experience.</li>
      <li><a target="_blank" href="https://laravel.com/">Cypress</a> for right development experience.</li>
    </ul>

    More details about packaes, technologies, and ideas I use are available in <a href="https://github.com/moedayraki/moe-useful-things" target="_blank">Moe Useful Things</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Projects I'm Working On</template>
    Projects I'm working is coming soon!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>My Blog</template>
    My blog is coming soon!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Buy Me Coffee</template>
    If you like what I do, try being me a cup of coffee!
  </WelcomeItem>
</template>

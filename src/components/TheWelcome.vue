<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import VSCodeIcon from "./icons/IconVSCode.vue";
import LaravelIcon from "./icons/IconLaravel.vue";
import IconVuejs from "./icons/IconVuejs.vue";
import IconTailwindcss from "./icons/IconTailwindcss.vue";
import IconMySql from "./icons/IconMySql.vue";
import IconSqlsrv from "./icons/IconSqlsrv.vue";
import IconSqlLite from "./icons/IconSqlLite.vue";
import IconTypescript from "./icons/IconTypescript.vue";
import IconDocker from "./icons/IconDocker.vue";
import IconCypress from "./icons/IconCypress.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Get to Know Moe</template>

    My first name is actually Mohammed but I usually go by Moe (Not Mo 😇). I create
    <a target="_blank" href="https://dayrakiarts.com/">stuff for the web</a>
    including websites, web applications, and contribute to
    <a target="_blank" href="https://github.com/moedayraki/">open source</a> as
    much as I can. I'm a PC gamer as well!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>My Go to Stack</template>

    My road to web development is not that common. I got my Masters from
    University of Windsor as an Electrical Computer Engineer with focus on Cyber
    Security and Wireless Communication. I've then landed a job as a web
    developer.

    <br />

    There, <a target="_blank" href="https://laravel.com/">laravel</a> was my
    door to web development. You can read more about why I think web development is great
    <a target="_blank" href="https://moedayraki.github.io/blog/web-development">here</a>. When it comes
    to web development, my go to stack is:
    <ul>
      <li>
        <VSCodeIcon />
        <a target="_blank" href="https://code.visualstudio.com/">VS Code</a> as
        an IDE
      </li>
      <li>
        Backend written with the beatiful <LaravelIcon /><a
          target="_blank"
          href="https://laravel.com/"
          >Laravel</a
        >
      </li>
      <li>
        What's better than <IconVuejs />
        <a target="_blank" href="https://vuejs.org/">VueJS</a> when it comes to
        frontend
      </li>
      <li>
        <IconTailwindcss />
        <a target="_blank" href="https://tailwindcss.com/">TailwindCSS</a>, the
        CSS framework that I recommend
      </li>
      <li>
        For databases, I use relational databases including <IconSqlsrv /><a
          target="_blank"
          href="https://www.microsoft.com/en-ca/sql-server/sql-server-downloads"
        >
          SqlSrv</a
        >,<IconMySql /><a target="_blank" href="https://www.mysql.com/">
          mySQL</a
        >, and <IconSqlLite /><a
          target="_blank"
          href="https://www.sqlite.org/index.html"
        >
          SqlLite</a
        >
      </li>
    </ul>

    <br />
    Technology I'm learning now include
    <ul>
      <li>
        <IconTypescript />
        <a target="_blank" href="https://laravel.com/">TypeScript</a>,
        Javascript's kid with types.
      </li>
      <li>
        <IconDocker />
        <a target="_blank" href="https://laravel.com/">Docker</a> for better
        deployment experience.
      </li>
      <li>
        <IconCypress />
        <a target="_blank" href="https://laravel.com/">Cypress</a> for right
        development experience.
      </li>
    </ul>

    More details about packaes, technologies, and ideas I use are available in
    <a href="https://github.com/moedayraki/moe-useful-things" target="_blank"
      >Moe Useful Things</a
    >.
  </WelcomeItem>  

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>The Moe Blog</template>
    Check out the latest
    <a href="https://moedayraki.github.io/blog">articles</a> in programming and
    development.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Buy Me Coffee</template>
    <a href="https://www.buymeacoffee.com/moedayraki" target="_blank"
      ><img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        style="
          height: 60px !important;
          width: 217px !important;
          padding-bottom: 10px;
        "
    /></a>
    <div>You like what I do? try buying me a cup of coffee!</div>
  </WelcomeItem>
</template>

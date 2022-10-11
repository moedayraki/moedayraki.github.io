<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useAppStore } from "@/stores/app";
import HelloWorld from "@/components/HelloWorld.vue";
import { useParallax } from '@vueuse/core'

const app = useAppStore();
const avatar = ref(null)
const parallax  = useParallax(avatar)

app.scheme = app.getMediaPreference();
document.documentElement.className = app.scheme;
var imgAni = ref();
onMounted(() => {
  imgAni.value = "opacity-0";
  setTimeout(() => {
    imgAni.value = "foolishIn";
  }, 800);
});
</script>

<template>
  <header v-if="$route.name != 'terminal'">
    <div>
      <img
        ref= "avatar"
        :style="transform: `rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 20}deg)`"
        alt="Moe's Avatar"
        :class="`logo ${imgAni} magictime`"
        src="https://github.com/moedayraki.png"
        width="200"
        height="200"
      />
      <div class="text-center mr-8 cursor-pointer">
        <i
          v-if="app.scheme == 'light'"
          class="pi pi-sun text-yellow-400 text-xl"
          @click="app.toggleMediaPreference()"
        ></i>
        <i
          v-else
          class="pi pi-moon text-blue-800 text-xl"
          @click="app.toggleMediaPreference()"
        ></i>
      </div>
    </div>
    <div class="wrapper">
      <HelloWorld msg="Hello, Hello!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  z-index: 1;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.p-checkbox {
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  vertical-align: bottom;
  position: relative;
}

.p-component,
.p-component * {
  box-sizing: border-box;
}

.p-checkbox {
  width: 22px;
  height: 22px;
}

.p-hidden-accessible {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.p-checkbox {
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  vertical-align: bottom;
  position: relative;
}

.p-checkbox .p-checkbox-box {
  width: 22px;
  height: 22px;
  color: #495057;
  border-radius: 6px;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s;
}

.p-checkbox-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

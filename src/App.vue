<script setup lang="ts">
import { ref,reactive,computed ,onMounted, watch } from "vue";
import { useAppStore } from "@/stores/app";
import HelloWorld from "@/components/HelloWorld.vue";
import { useParallax } from '@vueuse/core'

const app = useAppStore();
const target = ref(null)
const parallax  = reactive(useParallax(target))
const visibleTop = ref(false);

app.scheme = app.getMediaPreference();
document.documentElement.className = app.scheme;
var imgAni = ref();

onMounted(() => {
  imgAni.value = "opacity-0";
  setTimeout(() => {
    imgAni.value = "foolishIn";
  }, 800);
});

const avatarStyle = computed(() => ({
  transform: `rotateX(${parallax.roll * 40}deg) rotateY(${
    parallax.tilt * 40
  }deg)`,
}))

watch(visibleTop, (newVisibleTop) => {
  if (newVisibleTop) {
    document.querySelector('body').style.overflow = 'hidden';
  }
  else{
    document.querySelector('body').style.overflow = 'auto';
  }
})
</script>

<template>
  <header ref="target" v-if="$route.name != 'terminal'" class="p-4 mb-5">
    <div>
      <img                
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
        <a class="cursor-pointer" @click="visibleTop = !visibleTop">Contact</a>
        <Transition>
          <div v-show="visibleTop" @click="visibleTop = false" class="bg-black/80 backdrop-blur-[5px] flex pointer-events-auto z-20" data-pc-section="mask" style="position: fixed; height: 100vh; width: 100vw; left: -80px; top: 0px; display: flex; justify-content: center; align-items: flex-start; z-index: 1101;">
            <div role="complementary" aria-modal="true" class="overflow-hidden grow shadow-none bg-white/0 p-0 flex flex-col pointer-events-auto relative text-gray-700 border-0 h-screen w-full" data-pc-name="sidebar" data-pc-section="root" data-pd-focustrap="true">
              <div class="center-box mx-auto max-w-[350px] h-full w-full">
                <div class="max-h-[150px] max-w-[350px] h-full w-full absolute overflow-hidden z-0 rounded-[10px] animated-border-box-glow blur-[20px]"></div>
                <div class="max-h-[150px] max-w-[350px] h-full w-full absolute overflow-hidden z-0 rounded-[10px] animated-border-box">
                  <div class="flex justify-around h-full align-middle items-center" v-on:click.stop>
                      <a class="morph" href="https://github.com/moedayraki" target="_blank"><img src="./assets/github_logo.png" alt="github logo" class="h-8 align-middle"></a>
                      <a class="morph" href="https://twitter.com/MohammedDayraki" target="_blank"><img src="./assets/x_logo.png" alt="github logo" class="h-8 align-middle"></a>
                      <a class="morph" href="https://g.page/r/CXfw9jFf2d22EAI" target="_blank"><img src="./assets/google_logo.png" alt="github logo" class="h-8 align-middle"></a>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </Transition>      
      </nav>
    </div>
  </header>

  <RouterView />  
</template>

<style>
@import "@/assets/css/base.css";
@import "@/assets/css/main.css";

.animated-border-box:before, .animated-border-box-glow:before {
  content: '';
  z-index: -2;
  text-align: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
	width: 99999px;
	height: 99999px;
	background-repeat: no-repeat;
	background-position: 0 0;
  /*border color, change middle color*/
	background-image: conic-gradient(rgba(0,0,0,0), #00bd7e, rgba(0,0,0,0) 25%);
  /* change speed here */
	animation: rotate 4s linear infinite;
}

.animated-border-box:after {
	content: '';
	position: absolute;
	z-index: -1;
	left: 5px;
	top: 5px;
	width: calc(100% - 10px);
	height: calc(100% - 10px);
	background: #b2b2b2;
	border-radius: 7px;
}

@keyframes rotate {
	100% {
		transform: translate(-50%, -50%) rotate(1turn);
	}
}

.center-box{
  height: 100%;
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.morph {
  padding: 0.3em 1em;
  background: #b2b2b2;
  border: none;
  border-radius: .5rem;
  color: #444;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .2rem;
  text-align: center;
  outline: none;
  cursor: pointer;
  transition: .2s ease-in-out;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
              -6px -6px 10px rgba(255, 255, 255, .5),
              6px 6px 8px rgba(255, 255, 255, .075),
              6px 6px 10px rgba(0, 0, 0, .15);
}
.morph:hover {
  box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
              -2px -2px 4px rgba(255, 255, 255, .4),
              2px 2px 2px rgba(255, 255, 255, .05),
              2px 2px 4px rgba(0, 0, 0, .1);
}
.morph:active {
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
              inset -2px -2px 4px rgba(255, 255, 255, .5),
              inset 2px 2px 2px rgba(255, 255, 255, .075),
              inset 2px 2px 4px rgba(0, 0, 0, .15);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>

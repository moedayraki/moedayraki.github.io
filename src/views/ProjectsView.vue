<template>
  <div class="projects" ref="projects">    
    <div class="flex flex-wrap justify-center lg:overflow-y-scroll lg:h-screen">
      <RouterLink v-for="project in store.projects" v-bind:key="project.id" :to='"/projects/"+project.id'>
        <card :data-image="project.logo">
          <template #header><h2>{{ project.name }}</h2></template>
          <template #content><p>{{ project.type }}</p></template>
        </card>
      </RouterLink>      
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "@/components/Card.vue"
import { useAppStore } from "@/stores/app"

const store = useAppStore()
</script>

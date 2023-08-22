<template>
  <div class="projects" ref="projects">    
    <div class="flex flex-wrap justify-center overflow-y-scroll h-screen">
      <card v-for="project in projects" v-bind:key="project.id" :data-image="project.logo" :view-offset="viewOffset">
        <template #header><h2>{{ project.name }}</h2></template>
        <template #content><p>{{ project.type }}</p></template>
      </card>
      <!-- <card data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" :view-offset="viewOffset">
        <template #header><h1>Beaches</h1></template>
        <template #content><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></template>
      </card>
      <card data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" :view-offset="viewOffset">
        <template #header><h1>Trees</h1></template>
        <template #content><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></template>
      </card>
      <card data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=" :view-offset="viewOffset">
        <template #header><h1>Lakes</h1></template>
        <template #content><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></template>
      </card>       -->
    </div>
  </div>
</template>

<script lang="ts">
import Card from "@/components/Card.vue"
export default {
  name:'projects-view',
  components:{
    Card
  },
  mounted(){
    this.viewOffset = this.$refs.projects.offsetLeft
  },
  data(){
    return{
      viewOffset: 0,
      projects:[
        {
          id:1,
          name:'Solely Foot Care Inc',
          type:'Website & Admin Page',
          techonology:'Laravel - Bootstrap',
          description:'A foot care clinic website that shows infomation, available services, google reviews, and instagram feeds. A contact form is found on the website that sends an email to the admin. The website is backed up by an admin page to maintain available services and prices.',
          link:'https://solelyfootcareinc.ca',
          logo:'https://images.pexels.com/photos/3564304/pexels-photo-3564304.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          id:2,
          name:'Al Marsad',
          type:'News & Admin Page',
          techonology:'',
          description:'',
          link:'https://lebaneselw.com/',
          logo:'https://images.pexels.com/photos/3393375/pexels-photo-3393375.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          id:3,
          name:'iKnow',
          type:'Interactive App & Database',
          techonology:'',
          description:'',
          link:'',
          logo:'https://images.pexels.com/photos/7092398/pexels-photo-7092398.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          id:3,
          name:'The Snake Game',
          type:'Interactive Game & Database',
          techonology:'',
          description:'',
          link:'',
          logo:'https://images.pexels.com/photos/17817251/pexels-photo-17817251/free-photo-of-close-up-of-a-green-tree-python.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          id:4,
          name:'DigitalPen',
          type:'Interactive Game',
          techonology:'',
          description:'',
          link:'',
          logo:'https://images.pexels.com/photos/5797899/pexels-photo-5797899.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          id:5,
          name:'Global Clocks',
          type:'API Reading App',
          techonology:'',
          description:'',
          link:'',
          logo:'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          id:6,
          name:'Today in History',
          type:'API Reading App',
          techonology:'',
          description:'',
          link:'',
          logo:'https://images.pexels.com/photos/6892703/pexels-photo-6892703.jpeg?auto=compress&cs=tinysrgb&w=1600'
        },
        {
          id:7,
          name:'LetsGo',
          type:'Full Stack App',
          techonology:'',
          description:'',
          link:'',
          logo:'https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1600'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="projects">    
    <div class="flex flex-wrap justify-center overflow-y-scroll h-screen">
      <card data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
        <template #header><h1>Canyons</h1></template>
        <template #content><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></template>
      </card>
      <card data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
        <template #header><h1>Beaches</h1></template>
        <template #content><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></template>
      </card>
      <card data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
        <template #header><h1>Trees</h1></template>
        <template #content><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></template>
      </card>
      <card data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=">
        <template #header><h1>Lakes</h1></template>
        <template #content><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></template>
      </card>      
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
  data(){
    return{
      projects:[
        {
          id:1,
          name:'Solely Foot Care Inc',
          type:'Website & Admin Page',
          techonology:'Laravel - Bootstrap',
          description:'A foot care clinic website that shows infomation, available services, google reviews, and instagram feeds. A contact form is found on the website that sends an email to the admin. The website is backed up by an admin page to maintain available services and prices.',
          link:'https://solelyfootcareinc.ca',
          logo:'https://solelyfootcareinc.ca/images/dayrakiarts_5.png'
        },
        {
          id:2,
          name:'Shawarma Castle',
          type:'',
          techonology:'',
          description:'',
          link:'',
          logo:''
        },
        {
          id:3,
          name:'YMJ Construction',
          type:'',
          techonology:'',
          description:'',
          link:'',
          logo:''
        },
        {
          id:3,
          name:'Taj Motors',
          type:'',
          techonology:'',
          description:'',
          link:'',
          logo:''
        },
        {
          id:4,
          name:'Boost IV',
          type:'',
          techonology:'',
          description:'',
          link:'',
          logo:''
        },
        {
          id:5,
          name:'Al Marsad',
          type:'',
          techonology:'',
          description:'',
          link:'',
          logo:''
        },
        {
          id:6,
          name:'Bayt Salwa',
          type:'',
          techonology:'',
          description:'',
          link:'',
          logo:''
        },
        {
          id:7,
          name:'The Moe Blog',
          type:'',
          techonology:'',
          description:'',
          link:'',
          logo:''
        }
      ]
    }
  }
}
</script>

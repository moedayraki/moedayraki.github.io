<template>
  <div class="projects">
    <h1>I'm still working on this page 😔.</h1>
  </div>
</template>

<script lang="ts">
export default {
  name:'projects-view',
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

<style>
/* https://codepen.io/andymerskin/pen/XNMWvQ */
/* https://codepen.io/natszafraniec/pen/eYMPEaM */
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

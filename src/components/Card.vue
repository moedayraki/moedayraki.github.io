<template>
    <div class="card-wrap"        
        ref="card">
        <div class="card">
              <div class="card-bg" :style="[cardBgImage]"></div>
              <div class="card-info">
              <slot name="header"></slot>
              <slot name="content"></slot>
              </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  const props = defineProps({
    dataImage: String
  })
  const cardBgImage = computed(() => {
    return {
      backgroundImage: `url(${props.dataImage})`
    }
  })
</script>

<style scoped>            

    .card-wrap {
        margin: 10px;
        transform: perspective(800px);
        transform-style: preserve-3d;
        cursor: pointer;
    }
    .card-wrap:hover .card-info {
        transform: translateY(0);
    }
    .card-wrap:hover .card-info p {
        opacity: 1;
    }
    .card-wrap:hover .card-info, .card-wrap:hover .card-info p {
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .card-wrap:hover .card-info:after {
    transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 1;
    transform: translateY(0);
    }
    .card-wrap:hover .card-bg {
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0.8;
    }
    .card-wrap:hover .card {
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .card {
    position: relative;
    flex: 0 0 240px;
    width: 240px;
    height: 320px;
    background-color: #333;
    overflow: hidden;
    border-radius: 10px;
    transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    .card-bg {
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    pointer-events: none;
    }

    .card-info {
    padding: 20px;
    position: absolute;
    bottom: -10px;
    color: #fff;
    transform: translateY(40%);
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    .card-info p {
    opacity: 0;
    text-shadow: black 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    .card-info * {
    position: relative;
    z-index: 1;
    }
    .card-info:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    .card-info h1 {
    font-family: "Playfair Display";
    font-size: 36px;
    font-weight: 700;
    text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
    }
</style>
<template>
   <div>    
        <Galleria :value="project.screenshots" :numVisible="5" containerStyle="max-width: 640px" :showThumbnails="false"
            :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="left"
            :pt="{
                content : { class: 'flex'},
                itemwrapper: {class: 'flex relative', style: {alignItems: 'center'}},
                itemcontainer: {class: 'relative flex h-full' , style: {order: 2}},
                indicators: { class:'flex items-center justify-center p-4 absolute left-0 top-0 align-items-start bg-black/50 h-full', style: {listStyleType: 'none', flexDirection: 'column', order: 1}},
            }">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #indicator="{ index }">
                <span class="text-white cursor-pointer">{{ index + 1 }}</span>
            </template>
        </Galleria>
   </div>
   <div class="ml-4">
       <h1>{{ project.name }}</h1>
       <h3>{{ project.type }}</h3>
   </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { useAppStore } from '@/stores/app'
import Galleria from 'primevue/galleria';

const store = useAppStore()
const project = _.find(store.projects, { id: 1 })        
</script>

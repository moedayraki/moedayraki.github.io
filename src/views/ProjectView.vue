<template>
    <div>
        <div>    
            <Galleria :value="project.screenshots" :numVisible="5" :showThumbnails="false"
                :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="left"
                :pt="{
                    root: { class: 'px-4' },
                    content : { class: 'flex'},
                    itemwrapper: {class: 'flex relative', style: {alignItems: 'center'}},
                    itemcontainer: {class: 'relative flex h-full ' , style: {order: 2}},
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
            <h1 class="mt-4 md:mt-0">{{ project.name }} <a :href="project.link" target="_blank"><i class="pi pi-link" style="font-size: 2rem"></i></a></h1>
                <Fieldset legend="Description"
                :pt="{
                    root: {
                    class: [
                        'border border-gray-300 bg-white text-gray-700 rounded-md block mx-2 my-0.5 pl-4 pr-5 inline-size-min',
                        'dark:bg-green-900 dark:border-green-200/40 dark:text-white/80'
                    ]
                },
                legend:{
                    class: [
                        'border border-gray-300 text-gray-700 bg-gray-50 font-bold rounded-md',
                        'dark:bg-green-600 dark:border-green-900/40 dark:text-white/80 ',
                    ]
                },
                }">
                    <p>
                        {{ project.description }}
                    </p>
                </Fieldset>
            <a href="https://moedayraki.github.io/blog/" target="_blank" class="m-2">More Details ..</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { useAppStore } from '@/stores/app'
import Galleria from 'primevue/galleria'
import Fieldset from 'primevue/fieldset'

const store = useAppStore()
const project = _.find(store.projects, { id: 1 })        
</script>

<template>
    <div key="">
        <div class="flex flex-row space-x-2">
            <div class="flex-shrink">
                <Ps1 />
            </div>

            <div class="flex-grow"></div>
        </div>

        <p class="whitespace-pre-wrap mb-2" style="line-height:normal" v-html="entry.output">

        </p>
    </div>
</template>
<script lang="ts">
import {History as HistoryInterface} from './interface'
export default {
    
}
</script>
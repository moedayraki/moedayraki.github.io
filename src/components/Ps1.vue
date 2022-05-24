<template>
    <div>
        <span class="text-light-yellow dark:text-dark-yellow">
            <!-- {{ config.ps1_uername }} -->
        </span>
        <span class="text-light-gray dark:text-dark-gray">@</span>
        <span class="text-light-green dark:text-dark-green">
            <!-- {{ config.ps1_hostname }} -->
        </span>
        <span class="text-light-grey dark:text0dark-gray"></span>
    </div>
</template>
<script lang="ts">
    // import * as config from "./../../config.json";

    export default ({
        data(){
            return{
                config: config
            }
        }
    })
</script>

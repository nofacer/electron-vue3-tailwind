<template>
  <div class="h-full w-12 flex flex-col justify-center">
    <div class="h-12"><img :src="image" alt=""/></div>
    <div class="grow bg-white pt-10 flex flex-col">
      <div
          class="h-12 flex flex-col justify-center hover:bg-sky-500 hover:text-white transition duration-150 ease-in-out"
          @click="router.push('/home')">
        <HomeIcon class="h-5 w-5 place-self-center"/>
      </div>
      <div
          class="h-12 flex flex-col justify-center hover:bg-sky-500 hover:text-white transition duration-150 ease-in-out"
          @click="router.push('/about')">
        <InformationCircleIcon class="h-5 w-5 place-self-center"/>
      </div>
    </div>
    <div
        class="h-12 flex flex-col justify-center hover:bg-sky-500 hover:text-white transition duration-150 ease-in-out"
        @click="router.push('/setting')">
      <AdjustmentsIcon class="h-5 w-5 place-self-center"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import image from '@/assets/logo.png'
import {AdjustmentsIcon, HomeIcon, InformationCircleIcon} from '@heroicons/vue/outline'
import router from "../router";
</script>

<style scoped>

</style>

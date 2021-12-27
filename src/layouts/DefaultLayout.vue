<template>
  <div class="h-screen bg-slate-100 flex">
    <div class="h-full border-r-2 bg-white">
      <AppSidebar/>
    </div>
    <div class="h-full grow">
      <div class="container mx-auto">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<style scoped>
</style>

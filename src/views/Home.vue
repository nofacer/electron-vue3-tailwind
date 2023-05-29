<template>
  home
  Counter: {{ store.count }}
  <div class="bg-sky-300" @click="store.increment()">click</div>
</template>

<script setup lang="ts">
import {useCounterStore} from '@/stores/counter'

const store = useCounterStore()

</script>

<style scoped>

</style>

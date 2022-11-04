<script setup>
import { inject } from 'vue'

/* eslint-disable */
const props = defineProps({
  title: String
})
const selectedTitle = inject('selectedTitle')
</script>

<template>
  <div class="tabs__content" v-show="selectedTitle === title">
    <slot />
  </div>
</template>

<style>
.tabs__content {
  background-color: #bfbfbf;
  min-height: 300px;
  display: grid;
  place-items: center;
  border-radius: 0 0 5px 5px;
  padding: 10px;
}
</style>
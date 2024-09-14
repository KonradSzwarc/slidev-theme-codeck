<script setup lang="ts">
import { cn } from '../utils/styles';

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="cn('slidev-component header', props.class)">
    <slot />
  </div>
</template>

<style>
div:where(.slidev-component.header) {
  :where(h1 + p) {
    @apply mt-1 opacity-80 text-lg;
  }
}
</style>

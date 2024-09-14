<script setup lang="ts">
import { cn } from '../utils/styles';

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="cn('slidev-component sticky-note', props.class)">
    <slot />
  </div>
</template>

<style>
div:where(.slidev-component.sticky-note) {
  @apply bg-accent border rounded outline-accent shadow text-accent size-50 p-4;
}
</style>

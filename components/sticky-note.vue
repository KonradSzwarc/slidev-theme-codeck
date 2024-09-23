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
  @apply bg-default text-default border-default border rounded shadow size-45 p-4 color-scheme-yellow-light;
}
</style>

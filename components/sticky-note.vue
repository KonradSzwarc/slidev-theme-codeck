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
  @apply bg-accent outline-accent text-accent border rounded shadow size-45 p-4;

  :where(code) {
    @apply bg-code-accent text-code-accent;
  }
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../utils/styles';

const props = defineProps<{
  class?: string;
  color?: string;
  scheme?: string;
}>();

const { color = 'yellow', scheme = 'light' } = props;

const colorScheme = computed(() => `color-scheme-${color}-${scheme}`);
</script>

<template>
  <div :class="cn('slidev-component sticky-note', colorScheme, props.class)">
    <slot />
  </div>
</template>

<style>
div:where(.slidev-component.sticky-note) {
  @apply bg-default text-default border-default border rounded shadow size-45 p-4;
}
</style>

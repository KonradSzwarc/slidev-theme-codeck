<script setup lang="ts">
import { cn } from '../utils/styles';

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="cn('slidev-layout section flex flex-col justify-center items-center text-center', props.class)">
    <slot />
  </div>
</template>

<style>
:where(.slidev-layout.section) {
  h1 {
    @apply text-4xl leading-tight;
  }

  h1 + p {
    @apply mt-3 text-xl;
  }
}
</style>

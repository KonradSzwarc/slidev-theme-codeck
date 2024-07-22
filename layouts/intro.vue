<script setup lang="ts">
import { cn } from '../utils/styles';

const props = defineProps<{
  class?: string;
  classes?: {
    container?: string;
  };
}>();
const { classes } = props;
</script>

<template>
  <div :class="cn('slidev-layout intro flex flex-col justify-center items-center text-center', props.class)">
    <div :class="cn('mx-16', classes?.container)">
      <slot />
    </div>
  </div>
</template>

<style>
:where(.slidev-layout.intro) {
  h1 {
    @apply text-6xl leading-tight;
  }

  h1 + p {
    @apply mt-4 text-2xl;
  }
}
</style>

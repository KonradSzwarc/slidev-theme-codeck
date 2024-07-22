<script setup lang="ts">
import { cn } from '../utils/styles';

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="cn('slidev-layout default', props.class)">
    <slot />
  </div>
</template>

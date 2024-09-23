<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../utils/styles';

const props = defineProps<{
  class?: string;
  classes?: {
    root?: string;
    title?: string;
    content?: string;
  };
  side?: 'left' | 'right';
}>();

const { classes, side = 'left' } = props;

const sideClass = computed(() => (side === 'left' ? 'flex-row' : 'flex-row-reverse'));
</script>

<template>
  <div :class="cn('slidev-layout side-title', sideClass, classes?.root, props.class)">
    <div :class="cn('title', classes?.title)">
      <slot name="title" />
    </div>
    <div :class="cn('content', classes?.content)">
      <slot name="content" />
    </div>
  </div>
</template>

<style>
div:where(.slidev-layout.side-title) {
  @apply flex pl-0 py-0;

  :where(.title) {
    @apply px-10 py-8 w-80 bg-default text-default border-default flex flex-col justify-end color-scheme-blue-light;
  }

  :where(.content) {
    @apply px-10 py-8;
  }
}
</style>

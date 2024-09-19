<script setup lang="ts">
import { computed } from 'vue';
import { colorSchemeClass, type WithColorScheme } from '../utils/color-scheme';
import { cn } from '../utils/styles';

const props = defineProps<{
  class?: string;
  classes?: {
    root?: string;
    title?: string;
    content?: string;
  };
  title?: WithColorScheme<{
    side?: 'left' | 'right';
  }>;
}>();
const { classes, title: { side = 'left', color = 'blue', scheme = 'light' } = {} } = props;

const colorScheme = computed(() => colorSchemeClass({ color, scheme }));
</script>

<template>
  <div :data-side="side" :class="cn('slidev-layout side-title', classes?.root, props.class)">
    <div :class="cn('title', colorScheme, classes?.title)">
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

  &:where([data-side='left']) {
    @apply flex-row;
  }

  &:where([data-side='right']) {
    @apply flex-row-reverse;
  }

  :where(.title) {
    @apply px-10 py-8 w-80 bg-default text-default border-default flex flex-col justify-end;
  }

  :where(.content) {
    @apply px-10 py-8;
  }
}
</style>

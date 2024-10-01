<script setup lang="ts">
import { cn } from '../utils/styles';

const props = defineProps<{
  class?: string;
  classes?: {
    root?: string;
    wrapper?: string;
    icon?: string;
    title?: string;
    content?: string;
  };
}>();

const { classes } = props;
</script>

<template>
  <div :class="cn('slidev-layout fact', classes?.root, props.class)">
    <div :class="cn('wrapper', classes?.wrapper)">
      <div :class="cn('icon', classes?.icon)">
        <slot name="icon">
          <ph:lightbulb-duotone />
        </slot>
      </div>
      <div :class="cn('title', classes?.title)">
        <slot name="title" />
      </div>
      <div :class="cn('content', classes?.content)">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style>
div:where(.slidev-layout.fact) {
  @apply centered;

  :where(.wrapper) {
    @apply w-120 bg-default text-default border-default border-2 border-r-6 border-b-6 rounded-lg p-5 pt-4 color-scheme-slate-glass;
  }

  :where(.icon) {
    @apply text-4xl leading-none text-lighted pb-2;
  }

  :where(.title) {
    @apply text-2xl font-black text-lighted;
  }

  :where(.content) {
    @apply pt-2;
  }
}
</style>

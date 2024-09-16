<script setup lang="ts">
import { cn } from '../utils/styles';

const props = defineProps<{
  class?: string;
  classes?: {
    root?: string;
    wrapper?: string;
    content?: string;
    author?: string;
    bracket?: string;
    bracketTop?: string;
    bracketBottom?: string;
  };
}>();
const { classes } = props;
</script>

<template>
  <div :class="cn('slidev-layout quote', classes?.root, props.class)">
    <div :class="cn('wrapper', classes?.wrapper)">
      <div :class="cn('bracket bracket-top', classes?.bracket, classes?.bracketTop)" />
      <div :class="cn('content', classes?.content)">
        <slot name="content" />
      </div>
      <div :class="cn('author', classes?.author)">
        <slot name="author" />
      </div>
      <div :class="cn('bracket bracket-bottom', classes?.bracket, classes?.bracketBottom)" />
    </div>
  </div>
</template>

<style>
div:where(.slidev-layout.quote) {
  @apply flex flex-col justify-center items-center text-center;

  :where(.wrapper) {
    @apply relative mx-16;
  }

  :where(.bracket) {
    @apply size-10 rounded-sm line-default absolute;
  }

  :where(.bracket-top) {
    @apply -top-5 -left-10 border-t-4 border-l-4;
  }

  :where(.bracket-bottom) {
    @apply -bottom-5 -right-10 border-b-4 border-r-4;
  }

  :where(.content) {
    @apply text-2xl leading-normal;
  }

  :where(.author) {
    @apply text-xl font-semibold mt-5;
  }
}
</style>

<script setup lang="ts">
import { cn } from '../utils/styles';

const props = defineProps<{
  class?: string;
  classes?: {
    root?: string;
    header?: string;
    content?: string;
    footer?: string;
  };
}>();
const { classes } = props;
</script>

<template>
  <div :class="cn('slidev-layout default', classes?.root, props.class)">
    <div v-if="$slots.header" :class="cn('header', classes?.header)">
      <slot name="header" />
    </div>
    <div :class="cn('content', classes?.content)">
      <slot name="content" />
      <slot />
    </div>
    <div v-if="$slots.footer" :class="cn('footer', classes?.footer)">
      <slot name="footer" />
    </div>
  </div>
</template>

<style>
div:where(.slidev-layout.default) {
  @apply flex flex-col gap-5;

  :where(.header h1 + p) {
    @apply mt-1 opacity-80 text-lg;
  }

  :where(.content) {
    @apply flex-1;
  }
}
</style>

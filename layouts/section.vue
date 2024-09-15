<script setup lang="ts">
import { useSlots } from 'vue';
import { cn } from '../utils/styles';

const props = defineProps<{
  classes?: {
    root?: string;
    header?: string;
    title?: string;
    subtitle?: string;
    footer?: string;
  };
}>();
const { classes } = props;

const slots = useSlots();
</script>

<template>
  <div :class="cn('slidev-layout section', classes?.root)">
    <div :class="cn('header', classes?.header)">
      <slot name="header" />
    </div>
    <div v-if="slots.title" :class="cn('title', classes?.title)">
      <slot name="title" />
    </div>
    <div v-if="slots.subtitle" :class="cn('subtitle', classes?.subtitle)">
      <slot name="subtitle" />
    </div>
    <div :class="cn('footer ', classes?.footer)">
      <slot name="footer" />
    </div>
  </div>
</template>

<style>
div:where(.slidev-layout.section) {
  @apply flex flex-col items-center justify-center h-full text-center;

  :where(.header) {
    @apply mb-auto;
  }

  :where(.title) {
    @apply text-3xl leading-tight font-black tracking-wide text-lighted;
  }

  :where(.subtitle) {
    @apply text-xl text-default mt-2;
  }

  :where(.footer) {
    @apply mt-auto;
  }
}
</style>

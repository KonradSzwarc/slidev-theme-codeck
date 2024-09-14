<script setup lang="ts">
import { useSlots } from 'vue';
import Header from '../components/header.vue';
import { cn } from '../utils/styles';

const props = defineProps<{
  classes?: {
    root?: string;
    header?: string;
    content?: string;
    footer?: string;
  };
}>();
const { classes } = props;

const slots = useSlots();
</script>

<template>
  <div :class="cn('slidev-layout default', classes?.root)">
    <Header v-if="slots.header" :class="cn('header', classes?.header)">
      <slot name="header" />
    </Header>
    <div :class="cn('content', classes?.content)">
      <slot name="content" />
      <slot />
    </div>
    <div :class="cn('footer', classes?.footer)">
      <slot name="footer" />
    </div>
  </div>
</template>

<style>
div:where(.slidev-layout.default) {
  @apply flex flex-col gap-5;

  :where(.content) {
    @apply flex-1;
  }
}
</style>

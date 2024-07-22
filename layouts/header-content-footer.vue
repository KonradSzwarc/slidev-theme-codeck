<script setup lang="ts">
import { useSlots } from 'vue';
import { cn } from '../utils/styles';

const props = defineProps<{
  classes?: {
    header?: string;
    content?: string;
    footer?: string;
  };
}>();
const { classes } = props;

const slots = useSlots();
</script>

<template>
  <div :class="cn('slidev-layout header-content-footer flex flex-col gap-5', props.class)">
    <div v-if="slots.header || slots.default" :class="cn('header', classes?.header)">
      <slot name="header" />
      <slot />
    </div>
    <div v-if="slots.content" :class="cn('content flex-1', classes?.content)">
      <slot name="content" />
    </div>
    <div v-if="slots.footer" :class="cn('footer', classes?.footer)">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '../utils/styles';

type Side = 'top' | 'bottom';
type Placement = 'start' | 'center' | 'end';

const props = defineProps<{
  position?: `${Side}-${Placement}`;
  class?: string;
}>();

const { position = 'top-end' } = props;

const positionClass = computed(() =>
  cn(
    position === 'top-start' && 'top-0 left-0 rounded-br-lg border-t-0 border-l-0',
    position === 'top-center' && 'top-0 left-1/2 transform -translate-x-1/2 rounded-b-lg border-t-0',
    position === 'top-end' && 'top-0 right-0 rounded-bl-lg border-t-0 border-r-0',
    position === 'bottom-start' && 'bottom-0 left-0 rounded-tr-lg border-b-0 border-l-0',
    position === 'bottom-center' && 'bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-lg border-b-0',
    position === 'bottom-end' && 'bottom-0 right-0 rounded-tl-lg border-b-0 border-r-0',
  ),
);
</script>

<template>
  <div :class="cn('slidev-component side-badge', positionClass, props.class)">
    <slot />
  </div>
</template>

<style>
div:where(.slidev-component.side-badge) {
  @apply fixed bg-default text-default border-default border-2 px-4 py-1 text-base font-semibold color-scheme-blue-outline;
}
</style>

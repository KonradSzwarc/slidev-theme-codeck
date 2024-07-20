<script setup lang="ts">
import { cn } from '../utils/styles';


type Side = 'top' | 'bottom';
type Placement = 'start' | 'center' | 'end';

const props = defineProps<{
  position?: `${Side}-${Placement}`;
  class?: string;
}>();

const { position = 'top-end' } = props;

const rootClass = cn(
  'fixed bg-overlay2 text-invert/90 px-4 py-1 text-base font-semibold',
  position === 'top-start' && 'top-0 left-0 rounded-br-lg',
  position === 'top-center' && 'top-0 left-1/2 transform -translate-x-1/2 rounded-b-lg',
  position === 'top-end' && 'top-0 right-0 rounded-bl-lg',
  position === 'bottom-start' && 'bottom-0 left-0 rounded-tr-lg',
  position === 'bottom-center' && 'bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-lg',
  position === 'bottom-end' && 'bottom-0 right-0 rounded-tl-lg',
  props.class,
)
</script>

<template>
  <div :class="rootClass">
    <slot />
  </div>
</template>

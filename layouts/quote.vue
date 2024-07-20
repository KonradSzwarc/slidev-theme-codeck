<script setup lang="ts">
import { cn } from '../utils/styles';

const props = defineProps<{
  class?: string;
  bracketClass?: string;
}>();

const bracketClass = cn("lt-bracket size-10 border-4 rounded-sm border-main absolute", props.bracketClass);

</script>

<template>
  <div :class="cn('slidev-layout quote flex flex-col justify-center items-center text-center', props.class)">
    <div class="lt-container relative mx-16">
      <div :class="cn('lt-bracket-top -top-5 -left-10', bracketClass, 'border-r-none border-b-none')" />
      <div class="lt-content text-2xl leading-normal">
        <slot />
      </div>
      <div class="lt-author text-xl font-semibold mt-5">
        <slot name="author" />
      </div>
      <div :class="cn('lt-bracket-bottom -bottom-5 -right-10', bracketClass, 'border-l-none border-t-none')" />
    </div>
  </div>
</template>

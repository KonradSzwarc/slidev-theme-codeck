<script setup lang="ts">
import { cn } from '../utils/styles';

const props = defineProps<{
  classes?: {
    container?: string;
    content?: string;
    author?: string;
    brackets?: string;
    bracketTop?: string;
    bracketBottom?: string;
  };
}>();
const { classes } = props;

const bracketClass = cn('size-10 rounded-sm border-main absolute', classes?.brackets);
</script>

<template>
  <div :class="cn('slidev-layout quote flex flex-col justify-center items-center text-center', props.class)">
    <div class="relative mx-16">
      <div :class="cn('-top-5 -left-10 border-t-4 border-l-4', bracketClass, classes?.bracketTop)" />
      <div :class="cn('text-2xl leading-normal', classes?.content)">
        <slot />
      </div>
      <div :class="cn('text-xl font-semibold mt-5', classes?.author)">
        <slot name="author" />
      </div>
      <div :class="cn('-bottom-5 -right-10 border-b-4 border-r-4', bracketClass, classes?.bracketBottom)" />
    </div>
  </div>
</template>

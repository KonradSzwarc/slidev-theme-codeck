<script setup lang="ts">
import { cn } from '../utils/styles';

const props = defineProps<{
  title: string;
  class?: string;
  classes?: {
    root?: string;
    header?: string;
    icon?: string;
    title?: string;
    content?: string;
  };
  kind: keyof typeof colorSchemes;
}>();

const colorSchemes = {
  note: 'accent-scheme-yellow-glass',
  abstract: 'accent-scheme-cyan-glass',
  info: 'accent-scheme-sky-glass',
  todo: 'accent-scheme-teal-glass',
  tip: 'accent-scheme-emerald-glass',
  success: 'accent-scheme-green-glass',
  question: 'accent-scheme-violet-glass',
  warning: 'accent-scheme-amber-glass',
  failure: 'accent-scheme-red-glass',
  danger: 'accent-scheme-rose-glass',
  example: 'accent-scheme-fuchsia-glass',
  quote: 'accent-scheme-stone-glass',
};

const { classes, title, kind } = props;
</script>

<template>
  <div :class="cn('slidev-component callout', colorSchemes[kind], classes?.root, props.class)">
    <div :class="cn('header', classes?.header)">
      <div :class="cn('icon', classes?.icon)">
        <slot name="icon">
          <ph:note-bold v-if="kind === 'note'" />
          <ph:clipboard-text-bold v-if="kind === 'abstract'" />
          <ph:info-bold v-if="kind === 'info'" />
          <ph:check-square-bold v-if="kind === 'todo'" />
          <ph:lightbulb-bold v-if="kind === 'tip'" />
          <ph:check-circle-bold v-if="kind === 'success'" />
          <ph:question-bold v-if="kind === 'question'" />
          <ph:warning-bold v-if="kind === 'warning'" />
          <ph:x-circle-bold v-if="kind === 'failure'" />
          <ph:warning-circle-bold v-if="kind === 'danger'" />
          <ph:article-bold v-if="kind === 'example'" />
          <ph:quotes-bold v-if="kind === 'quote'" />
        </slot>
      </div>
      <p :class="cn('title', classes?.title)">{{ title }}</p>
    </div>
    <div :class="cn('content', classes?.content)">
      <slot />
    </div>
  </div>
</template>

<style>
div:where(.slidev-component.callout) {
  @apply bg-accent outline-accent text-accent border rounded px-3.5 pt-2 pb-3 grid gap-1;

  :where(code) {
    @apply bg-code-accent text-code-accent;
  }

  :where(.header) {
    @apply flex gap-0.5;
  }

  :where(.icon) {
    @apply size-6 flex items-center;

    :where(svg) {
      @apply size-5;
    }
  }

  :where(.title) {
    @apply font-semibold;
  }

  :where(.content) {
    @apply text-sm;
  }
}
</style>

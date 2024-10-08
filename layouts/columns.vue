<script setup lang="ts">
import { useSlots } from 'vue';
import { cn } from '../utils/styles';

const props = defineProps({
  class: String,
  classes: {
    type: Object,
    validator: (obj: object) => Object.values(obj).every((value) => typeof value === 'string'),
  },
});

const { classes } = props;
const slots = useSlots();

const cols = Object.keys(slots).filter((key) => !['header', 'content', 'footer'].includes(key));
</script>

<template>
  <div :class="cn('slidev-layout columns', classes?.root, props.class)">
    <div v-if="slots.header" :class="cn('header', classes?.header)">
      <slot name="header" />
    </div>
    <div v-if="cols.length || slots.content" :class="cn('content', classes?.content)">
      <slot name="content" />
      <div v-for="col in cols" :key="col" :class="cn('column', classes?.column, classes?.[col])">
        <slot :name="col" />
      </div>
    </div>
    <div v-if="slots.footer" :class="cn('footer', classes?.footer)">
      <slot name="footer" />
    </div>
  </div>
</template>

<style>
div:where(.slidev-layout.columns) {
  @apply flex flex-col gap-5;

  :where(.header h1 + p) {
    @apply mt-1 opacity-80 text-lg;
  }

  :where(.content) {
    @apply flex-1 flex gap-5;

    > * {
      @apply flex-1;
    }
  }

  :where(.column) {
    @apply flex-1;
  }
}
</style>

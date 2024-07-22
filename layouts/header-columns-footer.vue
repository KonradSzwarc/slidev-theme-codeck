<script setup lang="ts">
import { useSlots } from 'vue';
import { cn } from '../utils/styles';

const props = defineProps({
  class: String,
  classes: {
    type: Object,
    validator: (obj) => Object.values(obj).every((value) => typeof value === 'string'),
  },
});
const { classes } = props;

const slots = useSlots();
const cols = Object.keys(slots).filter((key) => !['default', 'header', 'columns', 'footer'].includes(key));
</script>

<template>
  <div :class="cn('slidev-layout header-columns-footer flex flex-col gap-5', props.class)">
    <div v-if="slots.header || slots.default" :class="cn('header', classes?.header)">
      <slot name="header" />
      <slot />
    </div>
    <div v-if="cols.length" :class="cn('columns flex-1 flex gap-5', classes?.columns)">
      <div v-for="col in cols" :key="col" :class="cn('flex-1', classes?.[col])">
        <slot :name="col" />
      </div>
    </div>
    <div v-if="slots.footer" :class="cn('footer', classes?.footer)">
      <slot name="footer" />
    </div>
  </div>
</template>

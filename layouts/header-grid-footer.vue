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

const cells = Object.keys(slots).filter((key) => !['default', 'header', 'grid', 'footer'].includes(key));
</script>

<template>
  <div :class="cn('slidev-layout header-grid-footer flex flex-col gap-5', props.class)">
    <div v-if="slots.header || slots.default" :class="cn('header', classes?.header)">
      <slot name="header" />
      <slot />
    </div>
    <div v-if="cells.length" :class="cn('flex-1 grid gap-5', classes?.grid)">
      <div v-for="cell in cells" :key="cell" :class="classes?.[cell]" :style="{ gridArea: cell }">
        <slot :name="cell" />
      </div>
    </div>
    <div v-if="slots.footer" :class="cn('footer', classes?.footer)">
      <slot name="footer" />
    </div>
  </div>
</template>

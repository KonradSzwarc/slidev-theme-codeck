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
</script>

<template>
  <div :class="cn('slidev-layout grid gap-5', props.class)">
    <div v-for="cell in Object.keys(slots)" :key="cell" :class="classes?.[cell]" :style="{ gridArea: cell }">
      <slot :name="cell" />
    </div>
  </div>
</template>

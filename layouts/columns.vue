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
  <div :class="cn('slidev-layout columns flex gap-5', props.class)">
    <div v-for="col in Object.keys(slots)" :key="col" :class="cn('flex-1', classes?.[col])">
      <slot :name="col" />
    </div>
  </div>
</template>

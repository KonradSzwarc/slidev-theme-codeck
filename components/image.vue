<script setup lang="ts">
import { computed } from 'vue';

const { src } = defineProps<{
  src: string | { light: string; dark: string };
}>();

const darkSrc = computed(() => (typeof src === 'string' ? src : src.dark));
const lightSrc = computed(() => (typeof src === 'string' ? src : src.light));
</script>

<template>
  <LightOrDark>
    <template #dark>
      <img v-bind="$attrs" :src="darkSrc" />
    </template>
    <template #light>
      <img v-bind="$attrs" :src="lightSrc" />
    </template>
  </LightOrDark>
</template>

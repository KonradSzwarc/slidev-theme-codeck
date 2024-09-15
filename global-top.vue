<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  for (const style of document.querySelectorAll('style')) {
    // Remove the default styling of inline code blocks.
    if (style.innerHTML.includes('.slidev-layout :not(pre) > code') && style.innerHTML.includes('/* Inline Code */')) {
      style.innerHTML = style.innerHTML.replace(/^\.slidev-layout :not\(pre\) > code {[^}]+}$/gm, '/*');
    }
  }
});
</script>

<template></template>

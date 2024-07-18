<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
<style>
.slidev-layout.default {
  h1 {
    @apply mb-4;
  }

  h1+p {
    @apply -mt-4 mb-4;
  }
}
</style>

<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
<style>
:where(.slidev-layout.default) {
  h1 {
    @apply mb-5;
  }

  h1+p {
    @apply -mt-4 mb-5;
  }
}
</style>

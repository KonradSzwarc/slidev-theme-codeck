<template>
  <div class="slidev-layout intro flex flex-col justify-center items-center text-center">
    <slot />
  </div>
</template>
<style>
:where(.slidev-layout.intro) {
  h1 {
    @apply text-6xl;
  }

  h1+p {
    @apply mt-3 text-2xl;
  }
}
</style>

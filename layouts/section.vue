<template>
  <div class="slidev-layout section flex flex-col justify-center items-center text-center">
    <slot />
  </div>
</template>

<style>
:where(.slidev-layout.section) {
  h1 {
    @apply text-4xl;
  }

  h1 + p {
    @apply mt-3 text-xl;
  }
}
</style>

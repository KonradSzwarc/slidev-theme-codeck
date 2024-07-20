<template>
  <div class="slidev-layout intro flex flex-col justify-center items-center text-center">
    <div class="mx-16">
      <slot />
    </div>
  </div>
</template>

<style>
:where(.slidev-layout.intro) {
  h1 {
    @apply text-6xl leading-tight;
  }

  h1 + p {
    @apply mt-4 text-2xl;
  }
}
</style>

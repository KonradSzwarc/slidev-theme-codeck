<template>
  <div class="slidev-layout two-cols-header flex flex-col">
    <div class="lt-header">
      <slot />
    </div>
    <div class="lt-columns flex gap-4">
      <div class="lt-left-column w-full">
        <slot name="left" />
      </div>
      <div class="lt-right-column w-full">
        <slot name="right" />
      </div>
    </div>
    <div class="lt-footer mt-auto">
      <slot name="footer" />
    </div>
  </div>
</template>

<style>
:where(.slidev-layout.two-cols-header) {
  h1 {
    @apply mb-5;
  }

  h1+p {
    @apply -mt-4 mb-5;
  }
}
</style>

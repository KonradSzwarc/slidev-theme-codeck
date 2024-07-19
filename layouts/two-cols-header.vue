<template>
  <div class="slidev-layout two-cols-header flex flex-col">
    <slot />
    <div class="flex gap-4">
      <div class="w-full">
        <slot name="left" />
      </div>
      <div class="w-full">
        <slot name="right" />
      </div>
    </div>
    <div class="mt-auto">
      <slot name="bottom" />
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

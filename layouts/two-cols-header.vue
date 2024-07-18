<template>
  <div class="slidev-layout flex flex-col gap-4 w-full h-full">
    <div class="mb-2">
      <slot />
    </div>
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

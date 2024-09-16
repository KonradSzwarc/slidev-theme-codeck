<script setup lang="ts">
import { useSlots } from 'vue';
import { cn } from '../utils/styles';

const props = defineProps({
  class: String,
  classes: {
    type: Object,
    validator: (obj: object) => Object.values(obj).every((value) => typeof value === 'string'),
  },
  areas: {
    type: Array<string>,
    default: () => [],
  },
});

const { classes, areas } = props;
const slots = useSlots();

const rowsCount = areas.length;
const colsCount = areas[0]?.split(' ').length;

const wrapperStyle =
  rowsCount && colsCount
    ? {
        gridTemplateRows: `repeat(${rowsCount}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${colsCount}, minmax(0, 1fr))`,
        gridTemplateAreas: areas.map((row) => `"${row}"`).join(' '),
      }
    : undefined;

const cellStyle = (cellName: string) => (wrapperStyle ? { gridArea: cellName } : undefined);

const cells = Object.keys(slots).filter((key) => !['header', 'content', 'footer'].includes(key));
</script>

<template>
  <div :class="cn('slidev-layout cells', classes?.root, props.class)">
    <Header v-if="slots.header" :class="cn('header', classes?.header)">
      <slot name="header" />
    </Header>
    <div v-if="cells.length || slots.content" :class="cn('content', classes?.content)" :style="wrapperStyle">
      <slot name="content" />
      <div
        v-for="cell in cells"
        :key="cell"
        :class="cn('cell', classes?.cell, classes?.[cell])"
        :style="cellStyle(cell)"
      >
        <slot :name="cell" />
      </div>
    </div>
    <div v-if="slots.footer" :class="cn('footer', classes?.footer)">
      <slot name="footer" />
    </div>
  </div>
</template>

<style>
div:where(.slidev-layout.cells) {
  @apply flex flex-col gap-5;

  :where(.content) {
    @apply flex-1 grid gap-5;
  }
}
</style>



<template>
  <div :class="props.class"> {{ title }}</div>
  <q-separator v-if="separator"/>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: 'Default Title'
  },
  class: {
    type: String,
    default: 'text-h6 q-ma-md'
  },
  separator: {
    type: Boolean,
    default: true
  },
});

</script>

<style scoped>

</style>

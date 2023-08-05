
<template>

  <div :class="props.class">
    <div class="row q-gutter-none justify-start">
      <div :class="[props.nameClass , 'value-name']">
        {{ props.name }}
      </div>
      <div :class="props.valueClass">
        {{ props.value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  name: {
    type: String,
    default: 'key'
  },
  value: {
    type: String,
    default: 'value'
  },
  class: {
    type: String,
    default: ''
  },
  nameClass: {
    type: String,
    default: 'col-auto'
  },
  valueClass: {
    type: String,
    default: 'col-auto'
  },
})
</script>


<style scoped>
.value-name {
  font-weight: bold;
}
</style>

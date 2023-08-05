

<template>
  <q-card :class="props.class" bordered>
    <q-card-section class="row">
      <div class="text-h6 text-weight-bolder text-grey-5">
        <ruby v-if="titleRuby.length > 0">
          {{ props.title }}
          <rt>{{ props.titleRuby }}</rt>
        </ruby>
        <div v-else>
          {{ props.title }}
        </div>
      </div>
    </q-card-section>
    <q-separator inset></q-separator>
    <q-card-section>
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: 'Default title'
  },
  titleRuby: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: 'q-ma-md'
  },
})



</script>

<style scoped>

</style>

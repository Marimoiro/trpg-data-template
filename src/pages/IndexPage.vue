<template>
  <q-page class="q-pa-lg">
    <t-title :title="store.name"></t-title>
    <t-card title="このページについて">
      <div v-html="ToBr(store.description.value)"/>
    </t-card>
    <t-card title="概要">
      {{ store.flavor.value }}
    </t-card>

    <t-card :title="store.name + 'の設定'">
      <div v-html="ToBr(store.body.value)"/>
    </t-card>

    <t-card :title="store.name + 'のデザイン'">
      <q-img src="oracle_design.jpg"></q-img>
      <div v-html="ToBr(store.detail.value)"/>
    </t-card>

  </q-page>
</template>

<script setup lang="ts">

import {useDetailStore} from "stores/details";
import TCard from "components/TCard.vue";
import {ToBr} from "../util";
import TTitle from "components/TTitle.vue";

const store = useDetailStore();

</script>

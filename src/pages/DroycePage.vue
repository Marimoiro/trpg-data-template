<template>
  <q-page class="q-pa-lg">
    <t-title :title="store.name + '専用Dロイス'"></t-title>
    <t-card v-for="d in droyces" :key="d.id" :title="d.name" :title-ruby="d.ruby">
      <t-title title="ストーリー"> </t-title>
      <div v-html="`<p>${ToBr(d.short)}</p>`"></div>
      <t-title title="解説"> </t-title>
      <div v-html="`<p>${ToBr(d.description)}</p>`"></div>
      <t-title title="効果"> </t-title>
      <div v-html="`<p>${ToBr(d.game)}</p>`"></div>
    </t-card>
  </q-page>
</template>

<script setup lang="ts">

import droyceJson from "../data/droyces.json";
import {Droyce} from "src/model";
import TTitle from "components/TTitle.vue";
import {useDetailStore} from "stores/details";
import TCard from "components/TCard.vue";
import {ToBr} from "src/util";
import {List} from "linqts";

const droyces = new List(droyceJson as Droyce[]).Skip(1).ToArray()

const store = useDetailStore();

</script>

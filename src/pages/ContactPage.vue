<template>
  <q-page class="q-pa-lg">
    <t-title title="連絡先"></t-title>
      <t-card title="連絡先">
        <EssentialLink :title="c.title + ':' + c.name"  :key="c.title" :link="c.value" v-for="c in contacts"></EssentialLink>
      </t-card>

    <q-separator></q-separator>
    <t-title title="ライセンス表記"></t-title>
    <t-card :title="l.title" :key="l.title" v-for="l in licenses">
        <EssentialLink :title="l.title" :link="l.url" ></EssentialLink>
        <div v-html="`<p>${ToBr(l.license)}</p>`"></div>
    </t-card>
  </q-page>
</template>

<script setup lang="ts">
import TTitle from "components/TTitle.vue";

import licensesJson from "../data/licenses.json";
import contactsJson from "../data/contacts.json";
import TCard from "components/TCard.vue";
import EssentialLink from "components/EssentialLink.vue";
import {ToBr} from "src/util";

const contacts = contactsJson as {title: string,name: string, value: string}[];
const licenses = licensesJson as {title: string, url: string, license:string}[];

</script>

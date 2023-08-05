<template>
  <q-page class="q-pa-lg">
    <t-title title="ユニークアイテム"></t-title>

    <div id="effects">
      <div class="row items-start">
          <div :key="i.ruby" v-for="i in items" class="col col-sm-5 col-xs-12 q-ma-md" >
            <t-card :title="i.name" :title-ruby="i.ruby" class="effect-card full-height">
              <div class="row">
                <t-value class="col-12" name="種別:&nbsp;" :value="i.type"></t-value>
                <div v-if="i.category == 'general'"  class="row">

                </div>
                <div v-else-if="i.category == 'wiggle'"  class="row">
                  <t-value class="col-5" name="技能:&nbsp;" :value="i.skill"></t-value>
                  <t-value class="col-5" name="攻撃力:&nbsp;" :value="i.attack"></t-value>
                  <t-value class="col-5" name="行動:&nbsp;" :value="i.initiative"></t-value>
                  <t-value class="col-5" name="装甲値:&nbsp;" :value="i.armor"></t-value>
                  <t-value class="col-5" name="全力移動:&nbsp;" :value="i.fullmove"></t-value>
                </div>
                <div v-else-if="i.category == 'weapon'" class="row">
                  <t-value class="col-5" name="技能:&nbsp;" :value="i.skill"></t-value>
                  <t-value class="col-5" name="命中:&nbsp;" :value="i.hit"></t-value>
                  <t-value class="col-5" name="攻撃力:&nbsp;" :value="i.attack"></t-value>
                  <t-value class="col-5" name="ガード値:&nbsp;" :value="i.guard"></t-value>
                  <t-value class="col-5" name="射程:&nbsp;" :value="i.range"></t-value>
                </div>
                <div v-else-if="i.category == 'armor'"  class="row">
                  <t-value class="col-5" name="ドッジ:&nbsp;" :value="i.dogde"></t-value>
                  <t-value class="col-5" name="行動:&nbsp;" :value="i.initiative"></t-value>
                  <t-value class="col-5" name="装甲値:&nbsp;" :value="i.armor"></t-value>
                </div>

                <t-value class="col-12" name="必要経験点:&nbsp;" :value="i.exp"></t-value>
                <div class="col-12">
                  <q-separator></q-separator>
                  <div v-html="`<p>${ToBr(i.flavor)}</p>`"></div>

                  <div v-html="`<p>${ToBr(i.game)}</p>`"></div>
                </div>
              </div>
            </t-card>
          </div>
      </div>
    </div>

  </q-page>
</template>

<script setup lang="ts">
import TTitle from "components/TTitle.vue";

import itemsJson from "../data/uniqueItems.json";
import {Item} from "src/model";
import TCard from "components/TCard.vue";
import TValue from "components/TValue.vue";
import {ToBr} from "src/util";
import {List} from "linqts";

const items = new List(itemsJson as Item[]).Skip(1).ToArray()



</script>

<style lang="scss" scoped>
.effect-card {
  height: 100%;
  min-height: 300px;
}
</style>

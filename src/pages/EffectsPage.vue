<template>
  <q-page class="q-pa-lg">
    <t-title title="エフェクト"></t-title>

    <div id="effects">
      <div class="row items-start">
        <t-card :title="es.category" v-for="es in effectSets" :key="es.category">
          <div class="row items-start">
            <div :key="e.ruby" v-for="e in es.effects" class="col col-sm-5 col-xs-12 q-ma-md" >
              <t-card :title="e.name" :title-ruby="e.ruby" class="effect-card full-height">
                <div class="row">
                  <t-value class="col-12" name="最大レベル:&nbsp;" :value="e.maxLv"></t-value>
                  <t-value class="col-12" name="タイミング:&nbsp;" :value="e.timing"></t-value>
                  <t-value class="col-5" name="技能:&nbsp;" :value="e.skill"></t-value>
                  <t-value class="col-5" name="難易度:&nbsp;" :value="e.difficult"></t-value>
                  <t-value class="col-5" name="対象:&nbsp;" :value="e.target"></t-value>
                  <t-value class="col-5" name="射程:&nbsp;" :value="e.range"></t-value>
                  <t-value class="col-5" name="侵触値:&nbsp;" :value="e.cost"></t-value>
                  <t-value class="col-5" name="制限:&nbsp;" :value="e.limit"></t-value>
                  <div class="col-12">
                    <q-separator></q-separator>
                    <div v-html="`<p>${ToBr(e.flavor)}</p>`"></div>

                    <div v-html="`<p>${ToBr(e.game)}</p>`"></div>
                  </div>
                </div>
              </t-card>
            </div>
          </div>
        </t-card>

      </div>
    </div>

  </q-page>
</template>

<script setup lang="ts">

import TTitle from "components/TTitle.vue";

import effectsJson from "../data/effects.json";
import {Effect} from "src/model";
import TCard from "components/TCard.vue";
import TValue from "components/TValue.vue";
import {ToBr} from "src/util";
import {List} from "linqts";

const effects = effectsJson as Effect[]

class EffectSet {
  category = "";
  effects: Effect[] = [];
}

const effectSets = new Array<EffectSet>();
let set : EffectSet = new EffectSet();

for ( const e of new List(effects).Skip(1) )
{
  if (e.id.length == 0 )
  {
    if( e.name.length != 0 )
    {
      set = new EffectSet();
      effectSets.push(set);
      set.category = e.name
    } else {
      continue;
    }
  } else {
    set.effects.push(e);
  }
}


</script>

<style lang="scss" scoped>
.effect-card {
  height: 100%;
  min-height: 300px;
}
</style>

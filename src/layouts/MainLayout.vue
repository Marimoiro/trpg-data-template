<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          ダブルクロス The 3rd Edition 非公式シンドローム オラクル
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          ページ
        </q-item-label>
        <page-link title="概要" link="/" icon="home" />
        <page-link title="エフェクト" link="/effects" icon="electric_bolt" />
        <page-link title="Dロイス" link="/droyce" icon="extension" />
        <page-link title="アイテム" link="/items" icon="construction" />
        <page-link title="連絡先" link="/contact" icon="contact_support" />

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';
import PageLink from "components/PageLink.vue";

const essentialLinks: EssentialLinkProps[] = [
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

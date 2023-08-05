import { defineStore } from 'pinia';


import json from '../data/details.json';
import {Detail} from "src/model";

const details : Detail[] = json ;
const map = details.reduce((map, d) => map.set(d.key,d),new Map<string,Detail>());

export const useDetailStore = defineStore('details', {

  getters: {
    details() {
      return details;
    },
    description() {
      return map.get('description')!;
    },
    name() {
      return map.get('name')!.value;
    },
    flavor() {
      return map.get('flavor')!;
    },
    title() {
      return map.get('title')!;
    },
    body() {
      return map.get('body')!;
    },
    detail() {
      return map.get('detail')!;
    }
  },

  actions: {
  }
});

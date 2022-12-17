<template>
  <div bordered class="q-pa-md" >
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="bg-grey-3"
            align="justify"
            narrow-indicator
          >
            <q-tab name="general" label="General" />
            <q-tab name="use-fast" label="Use Fast" />
            <q-tab name="buy-again" label="Buy Again" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="general">
              <ItemCard/>
            </q-tab-panel>

            <q-tab-panel name="use-fast">
              <ItemCard/>
            </q-tab-panel>

            <q-tab-panel name="buy-again">
              <ItemCard/>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </div>

 </template>

 <script>
 import { defineComponent,ref } from 'vue'
 import ItemCard from 'src/pages/Table-card.vue'

 export default defineComponent({
   name: 'tabs-component',
   components: {
    ItemCard
   },
   data() {
    return {
      tab: ref('general')
    }
  },
 })
 </script>

<template>
    <q-item>
      <q-item-section top avatar>
        <q-avatar color="primary" text-color="white" icon="person"/>
      </q-item-section>

      <q-item-section>
        <q-item-label>User Name</q-item-label>
        <q-item-label caption>More user Info</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-btn color="grey-7" round flat icon="more_vert">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable>
                  <q-item-section>Delete</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Make Admin</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
      </q-item-section>
    </q-item>
 </template>

 <script>
 import { defineComponent } from 'vue'

 export default defineComponent({
   name: 'users_card',
 })
 </script>

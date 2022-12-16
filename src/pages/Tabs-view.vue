<template>
  <div float class="center">
    <q-tabs
        v-model="tab"
        class="bg-grey-1"
      >
        <q-tab alert="blue" name="mails" icon="list_alt" label="Daily" />
        <q-tab alert="red" name="alarms" icon="flash_on" label="Use Fast" />
        <q-tab alert="orange" name="movies" icon="shopping_bag" label="Buy Again" />
    </q-tabs>
    <!-- <table_component/> -->
  </div>

 </template>

 <script>
 import { defineComponent } from 'vue'
//  import table_component from 'src/components/Table-card.vue'

 export default defineComponent({
   name: 'tabs-component',
  //  components: {
  //   table_component
  //  }
//    data() {
//      return {
//        group_desc:'Group Description'
//    }
//      }

 })
 </script>

 <style scoped>
.center
{
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 900px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
}
 /* .group_card{
   height: 800px;
   width: 1000px;
 } */
 </style>

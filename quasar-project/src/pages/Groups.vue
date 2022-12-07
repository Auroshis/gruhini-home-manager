<template>
    <q-card flat dense class="my-card bg-deep-purple-1 q-pd-md ">
       <q-card-section>
         <div class="row items-center no-wrap">
           <div class="col">
             <div class="text-h6">Family</div>
             <div class="text-subtitle2">by User</div>
           </div>
 
           <div class="col-auto">
             <q-btn color="grey-7" round flat icon="more_vert">
               <q-menu cover auto-close>
                 <q-list>
                   <q-item clickable>
                     <q-item-section>Delete</q-item-section>
                   </q-item>
                   <q-item clickable>
                     <q-item-section>Add User</q-item-section>
                   </q-item>
                   <q-item clickable>
                     <q-item-section>Add Admin</q-item-section>
                   </q-item>
                 </q-list>
               </q-menu>
             </q-btn>
           </div>
         </div>
       </q-card-section>
 
       <q-card-section>
         {{ group_desc }}
       </q-card-section>
 
       <q-separator />
 
       <q-card-actions>
         <q-btn clickable to="/users" flat icon="people"/>
         <q-btn clickable to="/item" flat icon="checklist"/>
       </q-card-actions>
     </q-card>
 </template>
 
 <script>
 import { defineComponent } from 'vue'
 
 export default defineComponent({
   name: 'group_card',
   data() {
     return {
       group_desc:'Group Description'
   }
     }
     
 })
 </script>
 
 <!-- <style scoped>
 /* .group_card{
   height: 800px;
   width: 1000px;
 } */
 </style> -->
 
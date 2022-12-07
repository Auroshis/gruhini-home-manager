<template>
  <div bordered class="q-pa-md">
    <group_card/>
  </div>
  
</template>

<script>
import { defineComponent } from 'vue'
import group_card from './Groups.vue'
// import item_card from './Items.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    group_card
  },
  // data() {
  //   return {
  //     group_desc:'Group Description'
  // }
  //   }
    
})
</script>

<style scoped>
.group_card{
  height: 150px;
  width: 600px;
}
</style>

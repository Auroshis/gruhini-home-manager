<template>
  <div bordered class="q-pa-md main-content" v-if="content_toggle === true">
    <h6>groups</h6>
    <button @click="getItems()">go to items</button>
    <!-- <group_card/> -->
  </div>
  <div bordered class="q-pa-md main-content" v-if="content_toggle === false">
    <h6>items</h6>
    <button @click="content_toggle = true">go back to groups</button>
    <!-- <group_card/> -->
  </div>

</template>

<script>
// import group_card from 'src/components/Groups.vue'
// import item_card from './Items.vue'

export default {
  name: 'IndexPage',
  data() {
    return {
      content_toggle: true
    }
  },
  methods: {
  getItems() {
    this.content_toggle = false;
  }
  }
}
</script>

<style scoped>
.group_card{
  height: 150px;
  width: 600px;
}
.main-content{
  height: 900px;
  width: 600px;
}
</style>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div class="q-px-lg q-pt-xl text-h3">
          Gruhini
        </div>
        <div class="q-px-lg text-weight-light">
          Your home inventory manager
        </div>
        <q-img class="header-image absolute-top"
        src="https://cdn.pixabay.com/photo/2022/06/25/08/43/space-7283103_1280.jpg"
        :ratio="16/9"
        />
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/">
              <q-item-section avatar>
                <q-icon name="groups" />
              </q-item-section>

              <q-item-section>
                Groups
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple to="/help">
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                help
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top drawer_img" src="https://cdn.pixabay.com/photo/2022/06/25/08/43/space-7283103_1280.jpg">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          <div class="text-weight-bold">User</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  // components: {
  //   EssentialLink
  // },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
.header-image{
  height: 100%;
  z-index: -1;
  opacity: 0.4;
}
.drawer_img{
  height: 152.59px;
  opacity: 1;
}
</style>

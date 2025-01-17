<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Toolset
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Menu
        </q-item-label>
        <UiHeader
          v-for="link in nav"
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

<script>
import UiHeader from "src/components/UiHeader.vue";
export default {
  name: "MainLayout",
  components: {
    UiHeader,
  },
  data() {
    return {
      nav: [
        {
          title: "Home",
          icon: "school",
          link: "/home",
        },
        {
          title: "Toolset",
          icon: "code",
          link: "/toolset",
        },
      ],
      leftDrawerOpen: false,
    };
  },
  methods: {},
};
</script>

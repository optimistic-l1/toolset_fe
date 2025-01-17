<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          ToolSet
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab v-for="(item,i) in nav" :key="i"  :to="item.to" :label="item.label" exact />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      nav:[{type:'router-link',label:'home',icon:'',to:'/'},{type:'router-link',label:'tool',icon:'',to:'/toolset'},{type:'router-link',label:'help',icon:'',to:'/help'}]
    }
  },
  methods: {
  }
}
</script>

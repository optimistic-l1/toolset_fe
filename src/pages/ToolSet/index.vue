<template>
  <div id="ToolSetPage" class="q-pa-lg">
    <q-list class="row">
      <q-item class="q-pa-none q-ma-md list-item" v-for="(item, i) in toolList" :key="i">
        <q-card class="my-card " @click="goToLink(item.to)">
          <div class="my-card-top q-pa-md">

            <q-icon :name="item.icon" size="50px" />

            <span>{{ item.title }}</span>

          </div>
          <q-separator />
          <div class="q-ma-xs my-card-bottom row items-center">
            <span>{{ item.describe }}</span>
          </div>

        </q-card>
      </q-item>
    </q-list>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>

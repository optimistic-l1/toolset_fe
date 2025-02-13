<template>
  <div id="QRCodeGenerationPage" class="q-pa-lg">
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Toolset" icon="navigation" to="/toolset" />
        <q-breadcrumbs-el label="QRCodeGeneration" icon="palette" />
      </q-breadcrumbs>
    </div>
    <q-chip color="orange" text-color="white" icon="event">二维码生成：</q-chip>
    <q-separator />
    <q-input class="q-my-md" outlined v-model="parameter.text" label="请输入文本：" />
    <div class="q-my-md">
      <p>width:</p>
      <q-slider v-model="parameter.width" :min="10" label label-always :max="500"/>
    </div>
    <div class="q-my-md">
      <p>height:</p>
      <q-slider v-model="parameter.height" :min="10" label label-always :max="500"/>
    </div>
    <div>
      <p>color:</p>
      <q-color v-model="parameter.colorDark" class="my-picker" style="max-width: 200px;"/>
    </div>
    <q-btn
      :loading="loading"
      :disable="!parameter.text"
      class="q-my-md"
      style="width: 100%"
      color="primary"
      label="生成二维码"
      @click="generateQRCode"
    />
    <q-separator class="q-my-md" />
    <div class="row q-my-md" v-for="(item,index) in list" :key="index" >
      <img :src="item.url" class="q-mr-md">
      <div class="col-grow">
        <q-card class="my-card" style="height:128px">
          <q-card-section>
            {{ item.text }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>

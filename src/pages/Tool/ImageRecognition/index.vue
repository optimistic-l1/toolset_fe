<template>
  <div id="ImageRecognitionPage" class="q-pa-lg">
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Toolset" icon="navigation" to="/toolset" />
        <q-breadcrumbs-el label="ImageRecognition" icon="palette" />
      </q-breadcrumbs>
    </div>
    <q-chip color="orange" text-color="white" icon="event">图片识别文本：</q-chip>
      <q-separator/>
      <q-file class="q-mt-md" outlined clearable accept="image/*" @input="uploadImage"  v-model="file" label="图片" />
      <q-btn :loading="loading" :disable="!file" class="q-my-md" style="width:100%" color="primary" label="识别文本" @click="imageRecognition"/>
      <q-separator class="q-my-md"/>
      <div v-if="file" class="image-preview row">
        <img :src="url" alt="图片预览" class="col-6"/>
        <div class="col-6">
          <p v-for="(item, index) in results" :key="index">
            {{ item }}
          </p>
      </div>
      </div>
      
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>

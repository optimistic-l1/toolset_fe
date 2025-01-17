<template>
  <div id="ImageTranscodingPage" class="q-pa-lg">
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Toolset" icon="navigation" to="/toolset" />
        <q-breadcrumbs-el label="ImageTranscoding" icon="palette" />
      </q-breadcrumbs>
    </div>
    <q-chip color="orange" text-color="white" icon="event">图片转Base64：</q-chip>
      <q-separator class="q-mb-md"/>
      <div>
        <q-file outlined v-model="file" label="选择图片" clearable>
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
        <template v-slot:after>
          <q-btn dense flat icon="send" label='转换' @click="readAsDataURL()"/>
        </template>
      </q-file>
      <q-input
      class="q-my-md"
      v-model="text"
    
      outlined
      type="textarea"
    />
    <q-btn color="primary" label="复制"  @click="copyToClipboard(text)"/>
      </div>
      <img v-if='text' :src="text">
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>

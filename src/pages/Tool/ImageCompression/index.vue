<template>
  <div id="ImageCompressionPage" class="q-pa-lg">
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Toolset" icon="navigation" to="/toolset" />
        <q-breadcrumbs-el label="ImageCompression" icon="folder_zip" />
      </q-breadcrumbs>
    </div>
    <q-chip color="orange" text-color="white" icon="event">图片压缩：</q-chip>
      <q-separator />
      <iframe src="https://compresspng.com/" style="width: 100%; height: 100vh; border: none;"></iframe>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>

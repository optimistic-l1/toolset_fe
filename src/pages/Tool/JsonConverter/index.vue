<template>
  <div id="JsonConverterPage" class="q-pa-lg">
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Toolset" icon="navigation" to="/toolset" />
        <q-breadcrumbs-el label="JsonConverter" icon="data_object" />
      </q-breadcrumbs>
    </div>
    <q-chip color="orange" text-color="white" icon="event">JSON转换器：</q-chip>
      <q-separator class="q-mb-md" />
      <div ref="editorContainer" class="json-editor"></div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>

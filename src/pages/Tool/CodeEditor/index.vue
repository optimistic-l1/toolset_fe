<template>
  <div id="CodeEditorPage" class="q-pa-lg">
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Toolset" icon="navigation" to="/toolset" />
        <q-breadcrumbs-el label="CodeEditor" icon="code" />
      </q-breadcrumbs>
    </div>
    <q-chip color="orange" text-color="white" icon="event">代码编辑器：</q-chip>
    <q-separator class="q-mb-md" />


    <MonacoEditor
      v-model="editorContent"
      :language="currentLanguage"
      style="height: 600px; width: 100%"
    />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>

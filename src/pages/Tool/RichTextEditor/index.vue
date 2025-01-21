<template>
  <div id="RichTextEditorPage" class="q-pa-lg">
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Toolset" icon="navigation" to="/toolset" />
        <q-breadcrumbs-el label="RichTextEditor" icon="terminal" />
      </q-breadcrumbs>
    </div>
    <q-chip color="orange" text-color="white" icon="event">富文本编辑器：</q-chip>
      <q-separator class="q-mb-md"/>
      <!-- Quill 编辑器 -->
      <div ref="editor" class="quill-editor"></div>
      <!-- 实时预览区域 -->
       
    <div class="preview q-mt-md" v-html="editorContent"></div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>

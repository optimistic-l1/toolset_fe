<template>
  <div id="MarkdownEditor" class="q-pa-lg">
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Toolset" icon="navigation" to="/toolset" />
        <q-breadcrumbs-el label="MarkdownEditor" icon="terminal" />
      </q-breadcrumbs>
    </div>
    <q-chip color="orange" text-color="white" icon="event">Markdown编辑器：</q-chip>
      <q-separator />
      <mavon-editor v-model="value" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>

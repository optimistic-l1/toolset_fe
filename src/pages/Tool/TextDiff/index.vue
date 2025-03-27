<template>
  <div id="TextDiffPage" class="q-pa-lg">
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Toolset" icon="navigation" to="/toolset" />
        <q-breadcrumbs-el label="TextDiff" icon="palette" />
      </q-breadcrumbs>
    </div>
    <q-chip color="orange" text-color="white" icon="event">文本对比：</q-chip>
      <q-separator />
      
      <p class="q-pa-md">请在以下输入框输入需要对比的文本：</p>
      <div class="row flex">
        <q-input
        class="col-6 q-pa-md"
        autogrow
        v-model="oldText"
        filled
        clearable
        type="textarea"
        color="black"
        label="Contrast text 1"
      />
      <q-input
       class="col-6 q-pa-md"
        v-model="newText"
        autogrow
        filled
        clearable
        type="textarea"
        color="black"
        label="Contrast text 2"
      />
  </div>
  <q-separator />
      <CodeDiff
      class="q-ma-md"
      :old-string="oldText"
      :new-string="newText"
      output-format="side-by-side"
    />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>

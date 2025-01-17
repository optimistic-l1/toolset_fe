<template>
  <div id="ColorConverterPage" class="q-pa-md">
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Toolset" icon="navigation" to="/toolset" />
        <q-breadcrumbs-el label="ColorConverter" icon="palette" />
      </q-breadcrumbs>
    </div>
    <div>
      <q-chip color="orange" text-color="white" icon="event">HEX转RGB：</q-chip>
      <q-separator />
      <div class="q-my-md row">
        <q-input
          class="col-5 q-mr-md"
          outlined
          bottom-slots
          v-model="hex.a"
          label="Label"
          counter
          @input="rgb.a = hexToRgb(hex.a)"
        >
          <template v-slot:before> HEX </template>
          <template v-slot:append>
            <q-icon
              v-if="hex.a !== ''"
              name="close"
              @click="hex.a = ''"
              class="cursor-pointer"
            />
          </template>
          <template v-slot:after>
            <q-btn
              :style="{ background: hex.a, color: 'white' }"
              :label="hex.a"
              @click="copyToClipboard(hex.a)"
            >
              <q-tooltip content-class="bg-black" :offset="[10, 10]">
                点击复制
              </q-tooltip>
            </q-btn>
          </template>
        </q-input>
        <q-input
          class="col-5"
          outlined
          bottom-slots
          v-model="rgb.a"
          label="Label"
          disable
          counter
        >
          <template v-slot:before> RGB </template>
          <template v-slot:append>
            <q-icon
              v-if="rgb.a !== ''"
              name="close"
              @click="rgb.a = ''"
              class="cursor-pointer"
            />
          </template>
          <template v-slot:after>
            <q-btn
              :style="{ background: rgb.a, color: 'white' }"
              :label="rgb.a"
              @click="copyToClipboard(rgb.a)"
            >
              <q-tooltip content-class="bg-black" :offset="[10, 10]">
                点击复制
              </q-tooltip>
            </q-btn>
          </template>
        </q-input>
      </div>
    </div>
    <div>
      <q-chip color="orange" text-color="white" icon="event">RGB转HEX：</q-chip>
      <q-separator />
      <div class="q-my-md row">
        <q-input
          class="col-5 q-mr-md"
          outlined
          bottom-slots
          v-model="rgb.b"
          label="Label"
          counter
          @input="hex.b = rgbToHex(rgb.b)"
        >
          <template v-slot:before> RGB </template>
          <template v-slot:append>
            <q-icon
              v-if="rgb.b !== ''"
              name="close"
              @click="rgb.b = ''"
              class="cursor-pointer"
            />
          </template>
          <template v-slot:after>
            <q-btn
              :style="{ background: rgb.b, color: 'white' }"
              :label="rgb.b"
              @click="copyToClipboard(rgb.b)"
            >
              <q-tooltip content-class="bg-black" :offset="[10, 10]">
                点击复制
              </q-tooltip>
            </q-btn>
          </template>
        </q-input>
        <q-input
          class="col-5"
          outlined
          bottom-slots
          v-model="hex.b"
          label="Label"
          disable
          counter
        >
          <template v-slot:before> HEX </template>
          <template v-slot:append>
            <q-icon
              v-if="hex.b !== ''"
              name="close"
              @click="hex.b = ''"
              class="cursor-pointer"
            />
          </template>
          <template v-slot:after>
            <q-btn
              :style="{ background: hex.b, color: 'white' }"
              :label="hex.b"
              @click="copyToClipboard(hex.b)"
            >
              <q-tooltip content-class="bg-black" :offset="[10, 10]">
                点击复制
              </q-tooltip>
            </q-btn>
          </template>
        </q-input>
      </div>
    </div>
    <q-chip color="orange" text-color="white" icon="event">捕色器：</q-chip>
      <q-separator />
      <q-btn color="white" text-color="black" label="点击捕捉颜色" class="q-my-md q-mr-md" @click="captureColor"/>
      <q-btn
              :style="{ background: capture, color: 'white' }"
              :label="capture"
              @click="copyToClipboard(capture)"
            >
              <q-tooltip content-class="bg-black" :offset="[10, 10]">
                点击复制
              </q-tooltip>
            </q-btn>
      <br>
      <q-chip color="orange" text-color="white" icon="event" class="q-mt-md">颜色器：</q-chip>
      <q-separator />
    <q-color v-model="color" class="my-picker q-mt-md" />
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>

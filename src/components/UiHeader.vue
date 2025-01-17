<template>
  <q-item
    clickable
    @click="goToLink"
      :class="{ 'text-grey': !isActive, 'text-primary': isActive }"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'UiHeader',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.link;
    }
  },
  methods: {
    goToLink() {
      this.$router.push(this.link);
    }
  }
}
</script>

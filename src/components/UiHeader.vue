<template>
  <q-item clickable @click="goToLink" :class="{ 'text-grey': !isActive, 'text-primary': isActive }">
    <q-item-section v-if="icon" avatar>
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
      // 如果当前路由路径以传入的 link 开头，则认为是激活状态
      return this.$route.path.startsWith(this.link);
    }
  },
  methods: {
    goToLink() {
      this.$router.push(this.link);
    }
  }
}
</script>

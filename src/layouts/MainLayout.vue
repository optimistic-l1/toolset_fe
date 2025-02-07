<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Toolset </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8"> Menu </q-item-label>
        <UiHeader v-for="link in nav" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        :to="tab.path"
        class="tags-view-item"
      >
        {{ tab.name }}
        <q-icon
          name="close"
          size="12px"
          @click.prevent.stop="removeTab(index)"
        />
      </router-link>
      <keep-alive>
        <router-view :key="$route.fullPath"/>
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import UiHeader from "src/components/UiHeader.vue";
export default {
  name: "MainLayout",
  components: {
    UiHeader,
  },
  data() {
    return {
      nav: [
        {
          title: "Home",
          icon: "school",
          link: "/home",
        },
        {
          title: "Toolset",
          icon: "code",
          link: "/toolset",
        },
      ],
      leftDrawerOpen: false,
      tabs: [],
    };
  },
  watch: {
    $route(to) {
      // 添加新标签
      const existingTab = this.tabs.find((tab) => tab.path === to.path);
      if (!existingTab) {
        this.tabs.push({ name: to.name, path: to.path });
      }
    },
  },
  mounted() {
    // 初始化时添加当前路由
    this.tabs.push({ name: this.$route.name, path: this.$route.path });
  },
  methods: {
    removeTab(index) {
      // 删除指定索引的标签
      this.tabs.splice(index, 1);

      // 获取当前激活的路由路径
      const currentPath = this.$route.path;

      // 找到当前激活的路由对应的标签索引
      const activeTab = this.tabs.find((tab) => tab.path === currentPath);

      if (activeTab) {
        // 如果当前激活的路由仍然存在，则跳转到当前激活的路由
        this.$router.push(
          activeTab.path,
          () => {},
          (error) => {
            if (error.name !== "NavigationDuplicated") {
              console.error(error);
            }
          }
        );
      } else if (this.tabs.length > 0) {
        // 如果当前激活的路由被删除，跳转到最后一个标签
        this.$router.push(
          this.tabs[this.tabs.length - 1].path,
          () => {},
          (error) => {
            if (error.name !== "NavigationDuplicated") {
              console.error(error);
            }
          }
        );
      } else {
        // 如果没有标签了，跳转到首页
        this.$router.push(
          "/",
          () => {},
          (error) => {
            if (error.name !== "NavigationDuplicated") {
              console.error(error);
            }
          }
        );
      }
    },
  },
};
</script>

<style scoped>
.tags-view-item {
  display: inline-block;
  padding: 5px 5px;
  margin: 3px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #333;
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tags-view-item.router-link-exact-active {
  background-color: #1976d2;
  border-color: #1976d2;
  color: #fff;
}
</style>

<template>
  <router-view/>
  <menu-tab-bar v-show="$route.meta.isShow"></menu-tab-bar>
  <p class="edition">版本：v1.0</p>
  <beian></beian>
</template>

<script>
import Beian from "views/Beian/Beian";
import MenuTabBar from "components/content/menuTabBar/MenuTabBar";

  export default {
    name: 'App',
    components: {
      MenuTabBar,
      Beian,
    },
    data() {
      return {
      }
    }
  }
</script>
<style>
@import "assets/css/base.css";
</style>

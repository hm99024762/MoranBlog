<template>
  <div class="beian">
    <a href="http://beian.miit.gov.cn" target="_blank">{{beian}}</a>
  </div>
</template>

<script>
  export default {
    name: "Beian",
    data() {
      return {
        beian: '粤ICP备2021025488号'
      }
    }
  }
</script>

<style scoped>
.beian {
  color: var(--text-color);
  position: absolute;
  bottom: 16px;
  right: 20px;

}
a:hover, a:link, a:visited, a:active, a:focus{
  color: var(--text-color);
  text-decoration: none;
  outline: none;
}
</style>
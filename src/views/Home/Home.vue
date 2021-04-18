<template>
  <div id="home">
    <div class="my-card">
      <toggle-soft-ui class="label">
        <input class="toggle-state" type="checkbox" v-model="isTheme">
      </toggle-soft-ui>
      <img class="head-icon" src="../../assets/img/head.jpg">
      <h2 class="card-name">{{name}}</h2>
      <div class="card-content">{{cardContent}}</div>
    </div>
    <div class="icon-back">
      <btn-soft-ui v-for="item in imgUrl" @click="goLink(item.id)"><img class="icon" :src="item.url"></btn-soft-ui>
    </div>
  </div>
</template>

<script>
import BtnSoftUi from "components/common/btnSoftUi/BtnSoftUi";
import ToggleSoftUi from "components/common/toggleSoftUi/ToggleSoftUi";

  export default {
    name: "Home",
    components: {
      ToggleSoftUi,
      BtnSoftUi
    },
    data() {
      return {
        imgUrl:
        [
          {id: '1', path: '/', url: require('../../assets/img/home.png')},
          {id: '2', path: '/article', url: require('../../assets/img/article.png')},
          {id: '3', path: '/stars', url: require('../../assets/img/stars.png')}
        ],
        name: 'Moran',
        cardContent: '没有梦想的咸鱼。\n没有技术的前端菜鸟。\n没有方向的船，什么风都是逆风。',
        isTheme: false
      }
    },
    methods: {
      goLink(id) {
        if (id == 1)
          this.$router.push('/')
        if (id == 2)
          this.$router.push('/article')
        if (id == 3)
          this.$router.push('/stars')
      }
    }
  }
</script>

<style scoped>
#home {
  text-align: center;
}

.my-card {
  width: 600px;
  margin-bottom: 20px;
  /*soft ui样式*/
  border-radius: 10px;
  background-color: var(--back-color);
  box-shadow:  6px 6px 15px #c8d0d6,
              -6px -6px 15px #ffffff;
}

.head-icon {
  width: 150px;
  height: 150px;
  margin-top: 15px;
  border-radius: 50%;
  -webkit-user-drag: none;
}

.card-name {
  color: var(--text-color);
  margin: 0;
  padding-bottom: 10px;
  cursor: default;
}

.card-content {
  color: var(--text-color);
  white-space: pre;
  padding-bottom: 15px;
  cursor: default;
}

.icon {
  width: 45px;
  height: 45px;
  -webkit-user-drag: none;
}

.icon-back {
  width: 600px;
  height: 100px;
  /*border-radius: 10px;
  background-color: var(--back-color);
  box-shadow:  6px 6px 15px #c8d0d6,
              -6px -6px 15px #ffffff;*/

  /*btn盒子调整*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.label {
  position: absolute;
  top: 16px;
  right: 20px;
}

.toggle-state {
  display: none;
}

.toggle-state:checked ~ {
  transform: translate3d(25%, 0, 0);
}
</style>
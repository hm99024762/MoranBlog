<template>
  <div>
    <div class="menu-item" v-for="item in menuItems" :key="item.id" :id="item.id" @click="goLink(item.num)">
      <img :src="item.url" :alt="item.alias">
    </div>
    <div class="menu-details" @click="toggleMenu" ref="menuDetail">
      <img :src="menuBg">
    </div>
  </div>
</template>

<script>
  export default {
    name: "MenuTabBar",
    data() {
      return {
        openFlag: false, // 展开合并标志
        operators: ['-', '-'], // 用于记录展开时动画XY方向
        baseDistance: 82,  // 展开距离
        menuBg: require('../../../assets/img/details.png'),
        menuItems:
            [
              { num: 1, id: 'menuhome', alias: '主页', path: '/', url: require('../../../assets/img/home.png') },
              { num: 2, id: 'menuarticle', alias: '文章', path: '/article', url: require('../../../assets/img/article.png') },
              { num: 3, id: 'menustars', alias: '超链', path: '/stars', url: require('../../../assets/img/stars.png') },
            ],
      }
    },
    methods: {
      goLink(id) {
        if (id == 1)
          this.$router.push('/');
        if (id == 2)
          this.$router.push('/article');
        if (id == 3)
          this.$router.push('/stars');
        this.toggleMenu();
      },
      toggleMenu() {
        if (!this.openFlag) {
          this.menuItems.forEach((item, index) => {
            this.toogleMenuTransition(item.id, index, false);
            this.$refs.menuDetail.style.transform = 'rotate(360deg)';
          });
        }else {
          this.menuItems.forEach((item, index) => {
            this.toogleMenuTransition(item.id, index, true);
          });
          this.$refs.menuDetail.style.transform = 'rotate(0)';
        }
        this.openFlag = !this.openFlag;
      },
      toogleMenuTransition(id, index, revert) {
        let oneArea = 90 / (this.menuItems.length - 1);
        let axisX = Math.sin((this.menuItems.length - 1 - index) * oneArea * 2 * Math.PI / 360);
        let axisY = Math.cos((this.menuItems.length - 1 - index) * oneArea * 2 * Math.PI / 360);
        let el = document.getElementById(id);
        let that = this;
        if (!revert) {
          setTimeout(() => {
            el.style.transform = `translate(${that.operators[0]}${that.baseDistance * axisX}px,${that.operators[1]}${that.baseDistance * axisY }px)`;
          }, index * 100)
        }else {
          el.style.transform = 'translate(0,0)'
        }
      }
    }
  }
</script>

<style scoped>
img {
  width: 45px;
  height: 45px;
  -webkit-user-drag: none;
}

.menu-item,
.menu-details {
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 6px;
  box-shadow: var(--box-shadow);
  background-color: var(--back-color);
  cursor: pointer;
  position: absolute;
  bottom: 150px;
  right: 150px;
  transition-duration: 400ms;
}

.menu-item:active,
.menu-details:active {
  box-shadow: var(--click-shadow);
}
</style>
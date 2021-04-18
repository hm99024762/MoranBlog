<template>
  <div class="stars">
    <h1>友链</h1>
    <div class="cols">
      <div class="col" v-for="item in friends">
        <a :href="item.url" target="_blank">
          <friends-card :frname="item.name" :frtext="item.introduce">
            <img :src="item.img">
          </friends-card>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import FriendsCard from "components/common/friendsCard/FriendsCard";

  export default {
    name: "Stars",
    components: {
      FriendsCard
    },
    data() {
      return {
        friends:
        [
          { name: 'Sukka', introduce: '童话只美在真实却从不续写。', url: 'https://blog.skk.moe/', img: require('../../assets/img/IconFriends/sukka.png') },
          { name: '栋', introduce: '自称咸鱼的dalao。', url: 'https://waitung.cn/', img: require('../../assets/img/IconFriends/dong.jpg') },
          { name: 'Rickdriod', introduce: '网络方向的dalao。', url: 'https://gxiaor.rdroidg.cc/', img: require('../../assets/img/IconFriends/R.jpg') },
          { name: '纽扣夹子', introduce: '上班看瑟琴漫画的男人。', url: 'https://ccclip.xyz/', img: require('../../assets/img/IconFriends/kouzi.jpg') },
        ]
      }
    }
  }
</script>

<style scoped>
.stars {
  width: 1024px;
  border-radius: 10px;
  padding-bottom: 6px;
  background-color: var(--back-color);
  box-shadow:  6px 6px 15px #c8d0d6,
              -6px -6px 15px #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin: 6px 0 4px 0;
  color: var(--h1-color);
  text-shadow: 1px 1px 1px #fff;
}

img {
  width: 64px;
  height: 64px;
  -webkit-user-drag: none;
  border-radius: 10px 0 0 10px;
}

.cols {
  width: 620px;
  display: flex;
  flex-wrap: wrap;
}

.col {
  box-sizing: border-box;
  padding: 12px;
}

.friend-card:active {
  box-shadow: inset 5px 5px 17px #c8d0d6,
              inset -5px -5px 17px #ffffff;
}
</style>
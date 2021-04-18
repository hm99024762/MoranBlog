<template>
  <div class="friend-card">
    <div class="img"><slot></slot></div>
    <div class="content">
      <strong>{{frname}}</strong>
      <p :title="frtext">{{frtext}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FriendsCard",
    props: {
      frtext: {
        type: String,
        default: 'A friend\'s introduce.'
      },
      frname: {
        type: String,
        default: 'Moran'
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
.friend-card {
  width: 280px;
  height: 64px;
  border-radius: 10px;
  background-color: var(--back-color);
  box-shadow:  6px 6px 15px #c8d0d6,
              -6px -6px 15px #ffffff;
/*  排列样式  */
  display: flex;
}

.content {
  width: 200px;
  height: 44px;
  margin: 10px 8px;
  text-align: left;
}

p {
  margin: 0;
  height: 16px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-top: 1px solid #555F76;
  text-shadow: 1px 1px 1px #fff;
}

strong {
  text-shadow: 1px 1px 1px #fff;
}
</style>
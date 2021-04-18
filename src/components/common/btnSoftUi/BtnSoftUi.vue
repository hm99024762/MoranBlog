<template>
  <div class="btn-content">
    <button class="btn"><slot></slot></button>
  </div>
</template>

<script>
  export default {
    name: "BtnSoftUi"
  }
</script>

<style scoped>
.btn {
  border: none !important;
  outline: none !important;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: var(--back-color);
  box-shadow:  6px 6px 15px #c8d0d6,
              -6px -6px 15px #ffffff;
  cursor: pointer;
  /*正常应该是图片icon*/
  font-size: 16px;
  /*过渡时间*/
  transition: all 0.2s ease-in-out;
  /*图片居中*/
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn:hover {
  box-shadow:  2px 2px 8px #c8d0d6,
              -2px -2px 8px #ffffff;
}
.btn:active {
  box-shadow: inset 5px 5px 17px #c8d0d6,
              inset -5px -5px 17px #ffffff;
}
.btn-content {
  width: 60px;
  height: 60px;
  display: inline;
  margin: 14px;
}
</style>
<template>
  <div class="toggle-soft-ui">
    <label class="label">
      <div class="toggle">
        <slot></slot>
        <div class="indicator"></div>
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    name: "ToggleSoftUi"
  }
</script>

<style scoped>
.toggle-soft-ui {
  width: 60px;
}

.label {
  cursor: pointer;
  color: #394a56;
}

.toggle {
  isolation: isolate;
  position: relative;
  height: 30px;
  width: 60px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow:
      -8px -4px 8px 0px #ffffff,
      8px 4px 12px 0px #d1d9e6,
      4px 4px 4px 0px #d1d9e6 inset,
      -4px -4px 4px 0px #ffffff inset;
}

.indicator {
  height: 100%;
  width: 200%;
  background: #ecf0f3;
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow:
      -8px -4px 8px 0px #ffffff,
      8px 4px 12px 0px #d1d9e6;
}

.toggle-state:checked ~ .indicator {
  transform: translate3d(25%, 0, 0);
}
</style>
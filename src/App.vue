<template>
  <div id="app">
    <router-view/>
    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
  },
  method: {}
};
</script>

<style lang="scss">
@import url(./assets/font/iconfont.css);

.iconfont {
  font-family: "iconfont" !important;
  font-size: 25px;
  transition: 0.3s;
  font-style: normal;
  vertical-align: middle;
  color: rgb(117, 120, 137);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  overflow: auto;
  position: relative;
}

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(151, 157, 167);
}
</style>

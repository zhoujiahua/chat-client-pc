<template>
  <div class="home">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .content {
    width: 96%;
    height: 90%;
    padding: 20px;
    overflow: hidden;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: rgb(39, 42, 55);
  }
}
</style>

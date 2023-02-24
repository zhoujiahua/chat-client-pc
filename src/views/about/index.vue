<template>
  <div>
    <transition name="typewriter">
      <p v-if="show">{{ message }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Welcome",
      show: false,
      index: 0,
      speed: 50,
    };
  },
  mounted() {
    this.typeWriter();
  },
  methods: {
    typeWriter() {
      if (this.index < this.message.length) {
        this.index++;
        setTimeout(() => {
          this.show = true;
          this.typeWriter();
        }, this.speed);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.typewriter-enter-active {
  transition: opacity 0.8s ease-out;
}

.typewriter-enter {
  opacity: 0;
}

.typewriter-leave-active {
  transition: opacity 0.8s ease-in;
}

.typewriter-leave-to {
  opacity: 0;
}
</style>
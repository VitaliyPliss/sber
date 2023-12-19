<template>
  <div class="app">
    <page-main />
  </div>
</template>

<script>
import pageMain from './pages/main/page-main.vue';

export default {
  name: 'app',
  components: {
    pageMain,
  },
  mounted() {
    window.addEventListener('resize', this.onWindowsResize);
    this.onWindowsResize();
  },
  methods: {
    onWindowsResize() {
      this.$store.commit('setCssVars', getComputedStyle(document.body));
    },
  },
};
</script>

<style src="./app.less" lang="less" />

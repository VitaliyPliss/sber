<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__logos">
        <img src="images/header/logo-sber.svg" class="header__logo" />
        <div class="header__divider" style="background-image: url('images/header/divider.svg')" />
        <img src="images/header/logo-mult.svg" class="header__logo" />
      </div>
      <a href="#" class="header__link">Хочу стикер</a>
    </div>
  </header>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'header-block',
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      // const opacity = window.pageYOffset > 1000 ? 0 : 1;
      // gsap.to('.header__divider', { duration: 1, opacity });
    },
  },
};
</script>

<style src="./header.less" lang="less" />

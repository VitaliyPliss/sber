<template>
  <div ref="animationContainer">
    <div class="promo">
      <div class="container promo__container">
        <h1 class="promo__title">
          Платёжный <span class="promo__title_gradient">стикер от&nbsp;Сбера</span>
        </h1>
        <p class="promo__subtitle">
          &mdash;&nbsp;Таити, Таити...<br />
          У&nbsp;нас и&nbsp;здесь стикеры неплохо работают!
        </p>
        <div class="promo__tag" style="background-image: url('images/arrow.svg')">
          листайте вниз
        </div>
        <div class="promo__disclaimer">*по&nbsp;лицензии, ООО &laquo;СМФ&raquo;</div>
      </div>
      <div class="promo__videos">
        <video
          class="promo__video"
          autoplay
          loop
          playsinline
          src="https://sber.cdnvideo.ru/common/files/pay_sticker.mp4"
        />
        <video
          class="promo__video promo__video_mobile"
          autoplay
          loop
          playsinline
          src="https://sber.cdnvideo.ru/common/files/pay_sticker_mob.mp4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'promo-block',
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', this.desktopAnimation);
    mm.add('(max-width: 1023px)', this.mobileAnimation);
  },
  methods: {
    desktopAnimation() {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.animationContainer,
          start: 'top top',
          end: '+=20000px',
          scrub: 5,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
      timeline.to(['.header__divider', '.header__logo'], {
        opacity: 0,
        duration: 3,
      });
    },
  },
};
</script>

<style src="./promo.less" lang="less" />

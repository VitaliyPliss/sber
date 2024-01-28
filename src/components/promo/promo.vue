<template>
  <div ref="animationContainer">
    <div class="promo">
      <div class="container promo__container">
        <h1 ref="promoTitle" class="promo__title">
          Платёжный <span class="promo__title_gradient">стикер от&nbsp;Сбера</span>
        </h1>

        <div class="promo__subtitles">
          <p ref="promoSubtitleFirst" class="promo__subtitle">
            &mdash;&nbsp;Таити, Таити...<br />
            У&nbsp;нас и&nbsp;здесь стикеры<br />
            неплохо работают!
          </p>
          <p ref="promoSubtitleSecond" class="promo__subtitle">
            &mdash;&nbsp;И&nbsp;того и&nbsp;другого,<br />
            и можно с&nbsp;оплатой<br />
            стикером!
          </p>
          <p ref="promoSubtitleThird" class="promo__subtitle">
            &mdash;&nbsp;Стикер хоть куда.<br />
            В&nbsp;полном расцвете<br />
            финансовых сил!
          </p>
        </div>
        <div ref="promoTag" class="promo__tag" style="background-image: url('images/arrow.svg')">
          листайте вниз
        </div>
        <div ref="promoDisclaimer" class="promo__disclaimer">
          *по&nbsp;лицензии, ООО &laquo;СМФ&raquo;
        </div>
      </div>

      <div ref="promoVideos" class="promo__videos">
        <video
          class="promo__video"
          autoplay
          muted
          loop
          playsinline
          src="https://sber.cdnvideo.ru/common/files/pay_sticker.mp4"
        />

        <video
          class="promo__video promo__video_mobile"
          autoplay
          muted
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
      const {
        animationContainer,
        promoTitle,
        promoSubtitleFirst,
        promoSubtitleSecond,
        promoSubtitleThird,
        promoTag,
        promoDisclaimer,
      } = this.$refs;

      gsap.set('.header', {
        y: '-100%',
      });
      gsap.set(promoTitle, {
        x: '-50vw',
      });
      gsap.set([promoTag, promoDisclaimer], {
        y: '20vh',
      });
      gsap.set([promoSubtitleFirst, promoSubtitleSecond, promoSubtitleThird], {
        x: '-100vw',
      });

      const startTimeline = gsap.timeline({});
      startTimeline.to(
        ['.header', promoTag, promoDisclaimer],
        {
          y: 0,
          duration: 0.6,
        },
        '<'
      );
      startTimeline.to(
        [promoTitle, promoSubtitleFirst],
        {
          x: 0,
          duration: 0.6,
        },
        '<'
      );

      const quotesChangingTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });
      quotesChangingTimeline.to(
        promoSubtitleFirst,
        {
          opacity: 0,
          filter: 'blur(12px)',
          x: '50vw',
          duration: 0.6,
          delay: 3,
        },
        '<'
      );
      quotesChangingTimeline.to(
        promoSubtitleSecond,
        {
          x: 0,
          duration: 0.6,
        },
        '<'
      );
      quotesChangingTimeline.to(
        promoSubtitleSecond,
        {
          opacity: 0,
          filter: 'blur(12px)',
          x: '50vw',
          duration: 0.6,
          delay: 3,
        },
        '<'
      );
      quotesChangingTimeline.to(
        promoSubtitleFirst,
        {
          opacity: 0,
          duration: 0.1,
          filter: 'blur(0)',
          x: '-100vw',
        },
        '<'
      );
      quotesChangingTimeline.to(
        promoSubtitleThird,
        {
          x: 0,
          duration: 0.6,
        },
        '<'
      );
      quotesChangingTimeline.to(
        promoSubtitleThird,
        {
          opacity: 0,
          filter: 'blur(12px)',
          x: '50vw',
          duration: 0.6,
          delay: 3,
        },
        '<'
      );
      quotesChangingTimeline.to(
        promoSubtitleFirst,
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
        },
        '<'
      );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: animationContainer,
          start: 'top top',
          end: '+=929px',
          scrub: 5,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
      timeline.to(['.header__divider', '.header__logo_mult', promoTag, promoDisclaimer], {
        opacity: 0,
        duration: 3,
      });
      timeline.to(
        promoTitle,
        {
          x: '-120%',
          delay: 3,
          duration: 3,
        },
        '<'
      );
    },
  },
};
</script>

<style src="./promo.less" lang="less" />

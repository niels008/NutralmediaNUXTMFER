<script setup>
import BackButton from "@/components/global/BackButton.vue";
import { onMounted } from "vue";
import Animations from "@/functions/Animations";
import Title from "@/components/global/Title.vue";
import contentWrap from "@/components/global/contentWrap.vue";

onMounted(() => {
  Animations();
});
</script>

<template>
  <div class="project">
    <div class="menu-wrap">
      <BackButton />
      <Logo variant="small" />
    </div>
    <SectionDetail :extraSpacing="true">
      <div
        id="hero"
        data-delay=".1s"
        data-duration=".5s"
        class="detail_title anim"
      >
        <Title :level="1">E-Sports</Title>
        <Title :level="3">My hobbies</Title>
      </div>
      <div class="o-wrapper">
        <div class="content_text">
          <div data-delay=".1s" data-duration=".5s" class="c-wrap anim">
            <Title :level="3">Dragons Unfold</Title>
            <p>
              In my childhood I was engaged in playing games. During the various
              LAN parties I visited, I came into contact with graphic design. I
              have designed logos, corporate identities and t-shirts for a large
              number of teams.
            </p>
            <p>
              At the moment I only do branding for major streamers and also for
              e-sports clubs and organizations that help gamers achieve their
              dreams. I do this to contribute to the community that has also
              supported me.
            </p>
          </div>
        </div>
        <div
          data-delay=".1s"
          data-duration=".5s"
          class="content_image vijftigprocent anim"
        >
          <figure class="figure_12-16">
            <img
              class="shadow-2xl"
              src="/portfolio/esports/dragonsunfold_tshirt_huisstijl.png"
              alt="dragonsunfold t-shirt huisstijl"
            />
          </figure>
        </div>
      </div>
      <div data-delay=".1s" data-duration=".5s" class="detail_title anim">
        <Title :level="1">Panetelaa</Title>
        <Title :level="2">Livestream overlay and logo</Title>
      </div>
      <div class="o-wrapper">
        <div data-delay=".1s" data-duration=".5s" class="content_image anim">
          <figure class="figure_9-16">
            <img
              class="shadow-2xl"
              src="/portfolio/esports/panetela_offline.png"
              alt="panetelaa online screen"
            />
          </figure>
        </div>
      </div>
      <div class="o-wrapper spacer">
        <div data-delay=".1s" data-duration=".5s" class="content_text anim">
          <contentWrap>
            <Title :level="3">Twitch.tv/panetelaa</Title>
            <p>
              The livestream is mainly about the game Fortnite and in addition,
              the streamer connects gamers with problems to a community that can
              help them with depression, anxiety and learn to deal with
              uncomfortable situations.
            </p>
            <p>
              At the time, I was asked to create a new layout for the livestream
              in a playful and childlike way. Unfortunately I was not allowed to
              change the logo and the various texts around it, but I did add a
              new face to this brand: “the pan man”.
            </p>
            <p>
              The design is adjusted seasonally with a day and night scene that
              I work out with Adobe Illustrator and Adobe XD.
            </p>
          </contentWrap>
        </div>
        <div
          data-delay=".1s"
          data-duration=".5s"
          class="content_image vijftigprocent anim"
        >
          <figure class="figure_9-16">
            <img
              class="shadow-2xl"
              src="/portfolio/esports/panetela_livestream_webcamandchat.png"
              alt="dragonsunfold t-shirt huisstijl"
            />
          </figure>
        </div>
      </div>
      <div class="o-wrapper spacer">
        <div data-delay=".1s" data-duration=".5s" class="content_image anim">
          <figure class="figure_9-16">
            <img
              class="shadow-2xl"
              src="/portfolio/esports/panetela_brb.png"
              alt="dragonsunfold t-shirt huisstijl"
            />
          </figure>
        </div>
      </div>
      <div data-delay=".1s" data-duration=".5s" class="detail_title anim">
        <Title class="spacer" :level="1">Logo's</Title>
        <Title :level="3">Where it all started</Title>
      </div>
      <div class="logo_display">
        <div class="content_image">
          <figure data-delay=".1s" data-duration="1s" class="figure_16-16 anim">
            <img
              src="/portfolio/esports/logos/vortex.png"
              alt="dragonsunfold t-shirt huisstijl"
            />
          </figure>
        </div>
        <div class="content_image">
          <figure data-delay=".3s" data-duration="1s" class="figure_16-16 anim">
            <img
              src="/portfolio/esports/logos/vindico.png"
              alt="dragonsunfold t-shirt huisstijl"
            />
          </figure>
        </div>
        <div class="content_image">
          <figure data-delay=".5s" data-duration="1s" class="figure_16-16 anim">
            <img
              src="/portfolio/esports/logos/dash.png"
              alt="dragonsunfold t-shirt huisstijl"
            />
          </figure>
        </div>
        <div class="content_image">
          <figure data-delay=".1s" data-duration="1s" class="figure_16-16 anim">
            <img
              src="/portfolio/esports/logos/harrycasteleijns.png"
              alt="dragonsunfold t-shirt huisstijl"
            />
          </figure>
        </div>
        <div class="content_image">
          <figure data-delay=".3s" data-duration="1s" class="figure_9-16 anim">
            <img
              src="/portfolio/esports/logos/kerstpromo.png"
              alt="dragonsunfold t-shirt huisstijl"
            />
          </figure>
        </div>
        <div class="content_image">
          <figure data-delay=".5s" data-duration="1s" class="figure_16-16 anim">
            <img
              src="/portfolio/esports/logos/eclipse.png"
              alt="dragonsunfold t-shirt huisstijl"
            />
          </figure>
        </div>
      </div>
    </SectionDetail>
  </div>
</template>

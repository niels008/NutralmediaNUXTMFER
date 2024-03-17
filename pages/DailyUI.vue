<script setup>
import BackButton from "@/components/global/BackButton.vue";
import { onMounted } from "vue";
import Animations from "@/functions/Animations";
import Title from "@/components/global/Title.vue";
import detailMenu from "@/components/global/detailMenu.vue";
import Project from "@/components/global/Project.vue";
import contentWrap from "@/components/global/contentWrap.vue";

onMounted(() => {
  Animations();
});
</script>

<template>
  <Project>
    <detailMenu />
    <SectionDetail>
      <div
        id="hero"
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title anim"
      >
        <Title :level="1">Daily UI's</Title>
        <h2>
          To follow and test the different trends within UI and UX design, I
          post UI designs here with one of the latest trends. The different
          images that I post here I make with different new tools that will be
          available within the new year.
        </h2>
      </div>
      <div class="o-wrapper">
        <div data-duration=".5s" data-delay=".3s" class="content_text anim">
          <contentWrap>
            <Title :level="3">Soft UI Dark Theme</Title>
            <p>
              For my first design I chose to apply the new soft UI trend (Neu
              morphism) within a music app.
            </p>
            <p>
              The buttons and various other elements seem to move more towards a
              realistic product design in this style. The buttons seem to
              function more like on a physical product, but when it comes to
              accessibility, this does not seem useful to me.
            </p>
          </contentWrap>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_11-9">
            <img src="/portfolio/esports/dailyUI1.png" alt="Daily UI 1" />
          </figure>
        </div>
      </div>
    </SectionDetail>
  </Project>
</template>

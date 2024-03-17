<script setup>
import BackButton from "@/components/global/BackButton.vue";
import { onMounted } from "vue";
import Animations from "@/functions/Animations";
import SectionDetail from "@/components/global/SectionDetail.vue";
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
    <SectionDetail>
      <div
        id="hero"
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title anim"
      >
        <Title :level="1">SNS Bank (Volksbank)</Title>
        <Title :level="3">E-Learning design basics</Title>
      </div>
      <div class="o-wrapper">
        <div data-duration=".5s" data-delay=".3s" class="content_text anim">
          <contentWrap>
            <Title :level="3">E-Learning</Title>
            <p>
              Within the SNS Bank, together with an educationalist, I created
              the foundation for the first e-modules. During this project,
              research was conducted into the possibilities and systems of
              e-learning that can be applied within the financial sector and of
              course at SNS Bank.
            </p>
            <p>
              During my research I soon found out that the current system was
              very outdated. The various screenshots are therefore made with
              separate images in a kind of MS Word program for e-learning.
            </p>
            <p>
              My advice and proposal was therefore to shake up the entire system
              and start over. During an MT meeting I was able to present my
              project and ensured that my employer received a budget to make the
              product happen.
            </p>
            <p>
              The current system now runs on HTML CSS and a self-made LMS system
              that keeps track of the scores of the users. In addition, there is
              a career per user in which one can view their modules and
              progress.
            </p>
          </contentWrap>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_12-16">
            <img
              class="e-shadow"
              src="/portfolio/SNSBANK/snsbank1.jpg"
              alt="E-learning SNS Bank"
            />
          </figure>
        </div>
      </div>
      <div class="o-wrapper">
        <div data-duration=".5s" data-delay=".3s" class="content_image anim">
          <figure class="figure_4-4">
            <img src="/portfolio/SNSBANK/collectie.png" alt="Collectie" />
          </figure>
        </div>
      </div>
    </SectionDetail>
  </div>
</template>

<script setup>
import BackButton from "@/components/global/BackButton.vue";
import { onMounted } from "vue";
import Animations from "@/functions/Animations";
import Title from "@/components/global/Title.vue";
import SectionDetail from "@/components/global/SectionDetail.vue";
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
        <Title :level="1">My Process</Title>
        <Title :level="3">The triple diamond</Title>
      </div>
      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image vijftigprocent anim"
        >
          <figure class="figure_9-16">
            <img src="/portfolio/visma/process.png" alt="my process" />
          </figure>
        </div>
      </div>

      <div
        class="o-wrapper o-wrapper-3col"
        style="align-items: flex-start; text-transform: none !important"
      >
        <div data-duration=".5s" data-delay=".15s" class="content_text anim">
          <contentWrap>
            <Title :level="3">Problem discovery</Title>
            <p>
              <strong>Problem discovery</strong> doing customer / user research
              to create deep insight into customer experience and the problems
              people encounter. Customer journeys, journey frameworks, and
              personas are excellent tools to describe the customer experience.
            </p>
            <p>
              <strong>Problem definition</strong> using the insights gathered in
              the ‘Discover’ phase to define the core problems or challenges to
              solve – opportunities, and then prioritizing them to select the
              most impactful ones.
            </p>
          </contentWrap>
        </div>
        <div data-duration=".5s" data-delay=".15s" class="content_text anim">
          <contentWrap>
            <Title :level="3">Solution discovery</Title>
            <p>
              <strong>Ideate solutions</strong> thinking up solutions (or
              bringing in existing ideas) to the selected opportunities, and
              prioritizing them to select the most impactful ones.
            </p>
            <p>
              <strong>Validate solutions</strong> whether small in-person
              validations of a prototype or running experiments live on a
              digital platform – get feedback to understand what works and what
              doesn’t.
            </p>
          </contentWrap>
        </div>
        <div data-duration=".5s" data-delay=".15s" class="content_text anim">
          <contentWrap>
            <Title :level="3">Design & Development</Title>
            <p>
              <strong>Design & development</strong> handing the selected
              solution concepts over to the product teams in order to design,
              build and validate further.
            </p>
            <p>
              <strong>Rollout & development</strong> ship and measure impact on
              the customer / user experience (and loop back new insights)
            </p>
          </contentWrap>
        </div>
      </div>
    </SectionDetail>
  </div>
</template>

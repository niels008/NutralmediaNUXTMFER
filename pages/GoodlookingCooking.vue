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
        data-delay=".15s"
        class="detail_title anim"
      >
        <Title :level="1">Goodlooking Cooking</Title>
        <Title :level="2">Webdesign &amp; Front-end development</Title>
      </div>
      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".15s"
          class="content_text sticky anim"
        >
          <contentWrap>
            <Title :level="3">GoodlookingCooking</Title>
            <p>
              The company focuses on preparing beautiful dishes and is active in
              catering. They use Dutchovens, Ofyrs and Monoliths for this. This
              catering company not only offers catering but also a very
              luxurious experience where quality is paramount.
            </p>
            <p>
              The company has a lot of visual material, but nothing is done with
              it on their current website. Within the redesign of the website it
              was decided to use these images to reflect the atmosphere of the
              company and the number of events they host.
            </p>
            <p>
              During the process, we indicated that using a video could enhance
              the atmosphere. This video ensures more interaction with the
              customer and shows the user what the atmosphere is like on
              location.
            </p>
          </contentWrap>
        </div>
        <div
          data-duration=".5s"
          data-delay=".15s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_29-9">
            <img
              class="e-shadow"
              src="/portfolio/goodlookingcooking/glc_detaildesktop.png"
              alt="Voorpagina Goodlooking Cooking"
            />
          </figure>
        </div>
      </div>
      <div
        data-duration=".5s"
        data-delay=".15s"
        class="detail_title spacer anim"
      >
        <Title :level="1">Mobile</Title>
      </div>
      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".15s"
          class="content_image-small anim"
        >
          <figure class="figure_59-9">
            <img
              class="e-shadow"
              src="/portfolio/goodlookingcooking/glc_detailmobile.png"
              alt="Goodlooking Cooking Mobiel"
            />
          </figure>
        </div>
        <div
          data-duration=".5s"
          data-delay=".15s"
          class="content_text sticky anim"
        >
          <contentWrap>
            <Title :level="3">Telefoon format</Title>
            <p>
              Because instagram is increasingly playing a role for catering
              companies, the customer asked to implement instagram in the
              website.
            </p>
            <p>
              In this way, the user can share the various images on the website
              or view them on instagram.
            </p>
            <p>
              After asking a bit further we came to the conclusion that
              "catering" is refered to something cheap in Holland. As a company
              they tried to focus on luxury goods and luxurious.
            </p>
          </contentWrap>
        </div>
      </div>
    </SectionDetail>
  </div>
</template>

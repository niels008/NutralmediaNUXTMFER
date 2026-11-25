<script setup>
definePageMeta({ layout: "projects" });

useSeoMeta({
  title: "Daily UI",
  description:
    "Daily UI experiments where I test current UI and UX trends with new design tools, starting with a soft UI (neumorphism) dark theme music app.",
  ogTitle: "Daily UI | Niels de Bont",
  ogDescription:
    "Daily UI experiments where I test current UI and UX trends with new design tools, starting with a soft UI (neumorphism) dark theme music app.",
  ogImage: "/portfolio/esports/dailyUI1.png",
  ogType: "website",
});
</script>

<template>
  <SectionDetail>
    <div
      id="hero"
      data-duration=".5s"
      data-delay=".3s"
      class="detail_title anim"
    >
      <PageTitle :level="1">Daily UI's</PageTitle>
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
          <PageTitle :level="3">Soft UI Dark Theme</PageTitle>
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
          <img
            src="/portfolio/esports/dailyUI1.png"
            alt="Soft UI dark theme music app concept"
            fetchpriority="high"
          />
        </figure>
      </div>
    </div>
  </SectionDetail>
</template>

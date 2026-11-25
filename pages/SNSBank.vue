<script setup>
definePageMeta({ layout: "projects" });

useSeoMeta({
  title: "SNS Bank e-learning",
  description:
    "E-learning design basics at SNS Bank (Volksbank): research into e-learning for the financial sector and the foundation for a new HTML, CSS and LMS system.",
  ogTitle: "SNS Bank e-learning | Niels de Bont",
  ogDescription:
    "E-learning design basics at SNS Bank (Volksbank): research into e-learning for the financial sector and the foundation for a new HTML, CSS and LMS system.",
  ogImage: "/portfolio/SNSBANK/snsbank1.jpg",
  ogType: "website",
});
</script>

<template>
  <SectionDetail :extra-spacing="true">
    <div
      id="hero"
      data-duration=".5s"
      data-delay=".3s"
      class="detail_title anim"
    >
      <PageTitle :level="1">SNS Bank (Volksbank)</PageTitle>
      <PageTitle :level="3">E-Learning design basics</PageTitle>
    </div>
    <div class="o-wrapper">
      <div data-duration=".5s" data-delay=".3s" class="content_text anim">
        <contentWrap>
          <PageTitle :level="3">E-Learning</PageTitle>
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
            class="shadow-2xl"
            src="/portfolio/SNSBANK/snsbank1.jpg"
            alt="E-learning module screen for SNS Bank"
            fetchpriority="high"
          />
        </figure>
      </div>
    </div>
    <div class="o-wrapper">
      
      <div data-duration=".5s" data-delay=".3s" class="content_image anim">
        <figure class="figure_4-4">
          <img
            src="/portfolio/SNSBANK/collectie.png"
            alt="Collection of e-learning module screens"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
  </SectionDetail>
</template>

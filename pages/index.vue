<script setup>
useSeoMeta({
  title: "Digital Product Designer",
  description:
    "Portfolio of Niels de Bont, digital product designer. Cases in UX design, design systems, product design and front-end development.",
  ogTitle: "Digital Product Designer | Niels de Bont",
  ogDescription:
    "Portfolio of Niels de Bont, digital product designer. Cases in UX design, design systems, product design and front-end development.",
  ogImage: "/studiofoto.jpg",
  ogType: "website",
});

useScrollReveal();
</script>

<template>
  <Menu />
  <div id="#main" class="main">
    <HeroSection />
    <ServicesSection />
    <section class="projects">
      <h1 class="title title-mg black">Cases</h1>
      <ProjectAccordion
        :projects="[
          'Youforce',
          'Visma',
          'Agrovision',
          'VSMAutomatisering',
          'ESports',
          'SMCLaren',
          'GoodlookingCooking',
          'SNSBank',
        ]"
      />
    </section>
    <Footer />
    <BacktoTopButton />
  </div>
</template>

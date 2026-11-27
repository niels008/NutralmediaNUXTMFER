<script setup lang="ts">
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

// "See all cases" at the end of a case links to /#cases. Home scrolls inside
// .main rather than the window, so scroll that pane to the Cases grid.
const route = useRoute();
onMounted(() => {
  if (route.hash !== "#cases") return;
  requestAnimationFrame(() => {
    document.getElementById("cases")?.scrollIntoView({ block: "start" });
  });
});
</script>

<template>
  <Menu />
  <div id="#main" class="main">
    <HeroSection />
    <ServicesSection />
    <section class="projects">
      <h1 class="title title-mg black">Cases</h1>
      <section id="cases" class="products">
        <ProjectButton v-for="name in CASE_ORDER" :key="name" :project="name" />
      </section>
    </section>
    <Footer />
    <BacktoTopButton />
  </div>
</template>

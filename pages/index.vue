<script setup>
import { onMounted } from "vue";
import Menu from "@/components/global/Menu.vue";
import Animations from "@/functions/Animations";
import BacktoTopButton from "@/components/global/BacktoTopButton.vue";
import Footer from "@/components/global/Footer.vue";
import HeroSection from "@/components/global/HeroSection.vue";
import ServicesSection from "@/components/global/ServicesSection.vue";
import ProjectButton from "@/components/global/ProjectButton.vue";

onMounted(() => {
  Animations();
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
        <ProjectButton project="Visma" />
        <ProjectButton project="Agrovision" />
        <ProjectButton project="VSMAutomatisering" />
        <ProjectButton project="ESports" />
        <ProjectButton project="SMCLaren" />
        <ProjectButton project="GoodlookingCooking" />
        <ProjectButton project="SNSBank" />
        <ProjectButton project="DailyUI" />
      </section>
    </section>
    <Footer />
    <BacktoTopButton />
  </div>
</template>

<script setup>
import ContactArrow from "@/components/global/ContactArrow.vue";
</script>

<template>
  <section id="services" class="services">
    <header>
      <div data-duration=".5s" data-delay=".3s" class="header_title anim">
        <h2>Services</h2>
        <h1>
          Full service around digital capabilities <br />
          from start to finish.
        </h1>
      </div>
      <ContactArrow />
    </header>
    <div class="service_cont">
      <div data-duration=".5s" data-delay=".2s" class="experience anim">
        <h2>Experience</h2>
        <p>
          Advice, UI &amp; UX design, websites, mobile apps, animation and
          e-learning.
        </p>
        <div class="arrow"></div>
      </div>
      <div data-duration=".5s" data-delay=".3s" class="campagnes anim">
        <h2>Campaigns</h2>
        <p>
          Tailor-made advice on online business, identity development and
          marketing.
        </p>
        <div class="arrow"></div>
      </div>
      <div data-duration=".5s" data-delay=".4s" class="studio anim">
        <h2>Studio</h2>
        <p>The development of a product that suits your company.</p>
        <div class="arrow"></div>
      </div>
    </div>
  </section>
</template>

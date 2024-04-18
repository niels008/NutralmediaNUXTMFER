<script setup>
import ContactArrow from "@/components/global/ContactArrow.vue";
import Logo from "./Logo.vue";
</script>

<template>
  <section id="hero" class="hero">
    <header>
      <Logo variant="big" />
      <ContactArrow />
    </header>
    <aside>
      <h1 data-duration="1s" data-delay=".3s" class="title anim">
        Hello, I'm Niels <br />A Digital Product designer.
      </h1>
      <div class="flex-grid-cont">
        <div class="item-1">
          <a href="#cases">
            <div data-duration=".5s" data-delay=".15s" class="anim">
              <h2>Work</h2>
              <p>
                View the selection of my cases for an idea of ​​the process and
                end result.
              </p>
            </div>
            <div class="arrow"></div>
          </a>
        </div>
        <div class="item-2">
          <router-link to="/myprocess">
            <div data-duration=".5s" data-delay=".15s" class="anim">
              <h2>My process</h2>
              <p>Get to know my process so you know how I work.</p>
            </div>
            <div class="arrow"></div>
          </router-link>
        </div>
      </div>
    </aside>
    <a class="herobtn" href="#services">
      <div class="down-arrow"></div>
    </a>
  </section>
</template>

<style lang="postcss">
section.hero > header {
  h1 {
    @extend %title-900;
  }
}
</style>

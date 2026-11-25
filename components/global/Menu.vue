<script setup>
import { inject } from "vue";

const state = inject("state");

const closeMenu = () => {
  state.menuOpen = false;
};
</script>

<template>
  <div class="menu-wrap">
    <input
      id="menutoggle"
      class="toggler"
      type="checkbox"
      aria-label="Toggle navigation menu"
      :aria-expanded="state.menuOpen"
      aria-controls="main-menu"
      v-model="state.menuOpen"
    />
    <div class="hamburger" aria-hidden="true">
      <div></div>
    </div>
    <nav id="main-menu" class="menu" aria-label="Main">
      <div>
        <div>
          <ul>
            <li><a @click="closeMenu" href="#hero">Home</a></li>
            <li>
              <NuxtLink to="/myprocess" @click="closeMenu">My process</NuxtLink>
            </li>
            <li><a @click="closeMenu" href="#cases">Cases</a></li>
            <li><a @click="closeMenu" href="#services">Services</a></li>
            <li><a @click="closeMenu" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <Logo variant="small" />
  </div>
</template>

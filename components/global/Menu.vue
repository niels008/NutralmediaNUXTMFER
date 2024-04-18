<script setup>
import { inject } from "vue";
import Menu from "@/components/global/Menu.vue";
import Logo from "@/components/global/Logo.vue";

const state = inject("state");
const menuItemClickHandler = (event) => {
  state.menuOpen = !state.menuOpen;
};
</script>

<template>
  <div class="menu-wrap">
    <input
      id="menutoggle"
      class="toggler"
      type="checkbox"
      v-model="state.menuOpen"
    />
    <div class="hamburger">
      <div></div>
    </div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li>
              <a @click="menuItemClickHandler($event)" href="#hero">Home</a>
            </li>

            <li>
              <router-link to="/myprocess" @click="menuItemClickHandler"
                >My process</router-link
              >
            </li>

            <li>
              <a @click="menuItemClickHandler($event)" href="#cases">Cases</a>
            </li>
            <li>
              <a @click="menuItemClickHandler($event)" href="#services"
                >Services</a
              >
            </li>
            <li>
              <a @click="menuItemClickHandler($event)" href="#contact"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Logo variant="small" />
  </div>
</template>

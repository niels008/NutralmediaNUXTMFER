<script>
import { onMounted } from "vue";
import Animations from "@/functions/Animations";
import BackButton from "@/components/global/BackButton.vue";
import Logo from "@/components/global/Logo.vue";

export default {
  components: {
    BackButton,
    Logo,
  },
  setup() {
    onMounted(() => {
      Animations();
    });
  },
};
</script>

<template>
  <div class="project">
    <div class="menu-wrap">
      <BackButton />
      <Logo variant="small" />
    </div>
    <slot />
  </div>
</template>

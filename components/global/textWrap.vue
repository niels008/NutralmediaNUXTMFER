<script setup>
import { onMounted } from "vue";
import Animations from "@/functions/Animations";

onMounted(() => {
  Animations();
});
</script>
<template>
  <div data-duration=".5s" data-delay=".15s" class="content_text anim">
    <div class="c-wrap">
      <slot> </slot>
    </div>
  </div>
</template>

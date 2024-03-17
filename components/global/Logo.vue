<script setup>
import { computed } from "@vue/runtime-core";

defineProps({
  variant: {
    type: String,
    default: "big",
    required: true,
  },
});

const computedClassName = (variant) => (variant === "big" ? "top" : "sidebar");
</script>

<template>
  <img
    data-delay=".1s"
    data-duration=".5s"
    :class="`logo ${computedClassName(variant)} anim`"
    :src="`/logo-${variant}.svg`"
    alt="Nutral Media logo"
  />
</template>

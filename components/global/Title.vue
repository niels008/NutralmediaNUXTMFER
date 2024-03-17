<script>
export default {
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
};
</script>
<!--make a component that receives props to change the title from a h1 h2 h3-->
<template>
  <h1 class="h1" v-if="level == 1">
    <slot></slot>
  </h1>
  <h2 class="h2" v-else-if="level == 2">
    <slot></slot>
  </h2>
  <h3 class="h3" v-else-if="level == 3">
    <slot></slot>
  </h3>
</template>

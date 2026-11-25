<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  stagger: {
    type: Number,
    default: 0.04,
  },
});

// Letters near the middle start first, which is what makes the roll read as
// one movement instead of a left to right wipe.
const letters = computed(() =>
  [...props.text].map((character, index) => ({
    character: character === " " ? "\u00A0" : character,
    delay: `${props.stagger * Math.abs(index - (props.text.length - 1) / 2)}s`,
  }))
);
</script>

<template>
  <span class="text-roll">
    <span class="sr-only">{{ text }}</span>
    <span class="text-roll__layer" aria-hidden="true">
      <span
        v-for="(letter, index) in letters"
        :key="`out-${index}`"
        :style="{ transitionDelay: letter.delay }"
        >{{ letter.character }}</span
      >
    </span>
    <span class="text-roll__layer text-roll__layer--incoming" aria-hidden="true">
      <span
        v-for="(letter, index) in letters"
        :key="`in-${index}`"
        :style="{ transitionDelay: letter.delay }"
        >{{ letter.character }}</span
      >
    </span>
  </span>
</template>

<style lang="scss">
.text-roll {
  position: relative;
  display: block;
  overflow: hidden;
  line-height: 1.1;

  .text-roll__layer > span {
    display: inline-block;
    // framer-motion's easeInOut tween, which the reference component uses
    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  }

  .text-roll__layer--incoming {
    position: absolute;
    inset: 0;
    color: #f69c2a;

    > span {
      transform: translateY(100%);
    }
  }

  &:hover {
    .text-roll__layer > span {
      transform: translateY(-100%);
    }

    .text-roll__layer--incoming > span {
      transform: translateY(0);
    }
  }
}

</style>

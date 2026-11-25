<script setup>
import { computed } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  stagger: {
    type: Number,
    default: 0.035,
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
  line-height: 0.75;

  .text-roll__layer > span {
    display: inline-block;
    transition: transform 0.4s ease-in-out;
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

@media (prefers-reduced-motion: reduce) {
  .text-roll .text-roll__layer > span {
    transition: none;
  }
}
</style>

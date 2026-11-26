<script setup>
// Shared case-study intro: client name, the project, and a one-line outcome.
defineProps({
  client: { type: String, required: true },
  project: { type: String, default: "" },
  outcome: { type: String, default: "" },
});
</script>

<template>
  <header
    id="hero"
    data-duration=".5s"
    data-delay=".3s"
    class="detail_title case-intro anim"
  >
    <p v-if="project" class="case-intro_project">{{ project }}</p>
    <PageTitle :level="1">{{ client }}</PageTitle>
    <p v-if="outcome" class="case-intro_outcome">{{ outcome }}</p>
    <p v-else class="case-intro_outcome case-placeholder">
      [Placeholder: one-line outcome of this case]
    </p>
  </header>
</template>

<style lang="scss">
.case-intro {
  margin-bottom: 1rem;
  .case-intro_project {
    font-family: "Open Sans", sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #333333;
  }
  .case-intro_outcome {
    font-family: "Bitter", serif;
    font-size: 1.35rem;
    line-height: 1.5;
    color: #1e1f1f;
    max-width: 680px;
    margin-top: 0.5rem;
  }
}
.case-placeholder {
  color: #9a9a9a !important;
  font-style: italic;
  outline: 1px dashed #f69c2a;
  outline-offset: 4px;
  border-radius: 2px;
}
</style>

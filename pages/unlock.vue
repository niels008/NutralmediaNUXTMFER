<script setup>
definePageMeta({ layout: "projects" });

useSeoMeta({
  title: "Protected case",
  description: "This case study is protected with a password.",
  robots: "noindex",
});

const route = useRoute();
const password = ref("");
const error = ref("");
const pending = ref(false);

const submit = async () => {
  pending.value = true;
  error.value = "";
  try {
    await $fetch("/api/unlock", {
      method: "POST",
      body: { password: password.value },
    });
    const target = route.query.redirect;
    const destination =
      typeof target === "string" && target.startsWith("/") ? target : "/";
    // A full page load, so the server renders the case with the fresh cookie
    // instead of the client router reading the one from before unlocking.
    window.location.assign(destination);
  } catch {
    error.value = "That password is not correct.";
    password.value = "";
  } finally {
    pending.value = false;
  }
};
</script>

<template>
  <SectionDetail :extraSpacing="false">
    <div id="hero" class="detail_title">
      <PageTitle :level="1">Protected case</PageTitle>
      <PageTitle :level="3">Ask me for the password to read this case.</PageTitle>
    </div>
    <div class="o-wrapper">
      <div class="content_text">
        <contentWrap>
          <form class="unlock-form" @submit.prevent="submit">
            <label class="unlock-form__label" for="case-password">Password</label>
            <input
              id="case-password"
              v-model="password"
              type="password"
              name="password"
              autocomplete="current-password"
              required
            />
            <button type="submit" :disabled="pending">
              {{ pending ? "Checking..." : "Open case" }}
            </button>
            <p v-if="error" class="unlock-form__error" role="alert">{{ error }}</p>
          </form>
        </contentWrap>
      </div>
    </div>
  </SectionDetail>
</template>

<style lang="scss">
.unlock-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 320px;

  .unlock-form__label {
    font-family: "Open Sans", sans-serif;
    font-size: 0.9rem;
    color: #333333;
  }

  input,
  button {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    padding: 0.75rem;
    border-radius: 2px;
  }

  input {
    border: 1px solid #d5d5d5;
  }

  button {
    border: none;
    cursor: pointer;
    color: #ffffff;
    background: #1e1f1f;

    &:hover {
      background: #f69c2a;
    }

    &:disabled {
      cursor: default;
      opacity: 0.6;
    }
  }

  .unlock-form__error {
    margin: 0;
    color: #b3261e;
  }
}
</style>

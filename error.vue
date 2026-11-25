<script setup>
defineProps({
  error: Object,
});

useSeoMeta({ title: "Page not found", robots: "noindex" });
</script>

<template>
  <div class="project">
    <div class="menu-wrap">
      <BackButton />
      <Logo variant="small" />
    </div>
    <div class="main">
      <section class="detail">
        <div class="detail_title">
          <PageTitle :level="1">{{ error?.statusCode === 404 ? "Page not found" : "Something went wrong" }}</PageTitle>
          <PageTitle :level="3">
            {{
              error?.statusCode === 404
                ? "This page does not exist or has moved."
                : "An unexpected error occurred."
            }}
          </PageTitle>
          <NuxtLink to="/">Back to the homepage</NuxtLink>
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>

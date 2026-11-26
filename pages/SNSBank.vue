<script setup>
definePageMeta({ layout: "projects" });

useSeoMeta({
  title: "SNS Bank e-learning",
  description:
    "E-learning design basics at SNS Bank (Volksbank): research into e-learning for the financial sector and the foundation for a new HTML, CSS and LMS system.",
  ogTitle: "SNS Bank e-learning | Niels de Bont",
  ogDescription:
    "E-learning design basics at SNS Bank (Volksbank): research into e-learning for the financial sector and the foundation for a new HTML, CSS and LMS system.",
  ogImage: "/portfolio/SNSBANK/snsbank1.jpg",
  ogType: "website",
});

const facts = [
  { label: "Role", value: "UX designer" },
  { label: "Timeline", value: "7-month internship, plus a few years after" },
  { label: "Platform", value: "Volksbank LMS" },
];
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <CaseIntro
      client="SNS Bank (Volksbank)"
      project="E-Learning design basics"
      outcome="Replaced an outdated e-learning system with a new one built on HTML, CSS and a self-made LMS, after pitching the project to the MT and securing a budget."
    />

    <CaseAtAGlance :facts="facts" />

    <!-- The problem -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The problem</p>
        <contentWrap>
          <PageTitle :level="3">The e-learning system was very outdated</PageTitle>
          <p>
            During my research I soon found out that the current system was
            very outdated. The various screenshots are therefore made with
            separate images in a kind of MS Word program for e-learning.
          </p>
        </contentWrap>
      </div>
      <figure class="case-screens case-screens-1">
        <img
          class="shadow-2xl"
          src="/portfolio/SNSBANK/snsbank1.jpg"
          alt="E-learning module screen for SNS Bank"
          fetchpriority="high"
        />
      </figure>
    </section>

    <!-- What I did -->
    <section class="case-steps">
      <p class="case-label case-label-center">What I did</p>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">01</span>
          <contentWrap>
            <PageTitle :level="3">Research e-learning for the financial sector</PageTitle>
            <p>
              Within the SNS Bank, together with an educationalist, I created
              the foundation for the first e-modules. During this project,
              research was conducted into the possibilities and systems of
              e-learning that can be applied within the financial sector and of
              course at SNS Bank.
            </p>
          </contentWrap>
        </div>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">02</span>
          <contentWrap>
            <PageTitle :level="3">Propose starting over and win the budget</PageTitle>
            <p>
              My advice and proposal was therefore to shake up the entire system
              and start over. During an MT meeting I was able to present my
              project and ensured that my employer received a budget to make the
              product happen.
            </p>
          </contentWrap>
        </div>
      </article>
    </section>

    <!-- The result -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The result</p>
        <contentWrap>
          <PageTitle :level="3">A new system with its own LMS</PageTitle>
          <p>
            The current system now runs on HTML CSS and a self-made LMS system
            that keeps track of the scores of the users. In addition, there is
            a career per user in which one can view their modules and
            progress.
          </p>
          <p>
            I first built a prototype of the LMS in HTML, CSS and a bit of
            JavaScript. I presented it to the MT and got funding to build the
            rest.
          </p>
        </contentWrap>
      </div>
      <figure class="case-screens case-screens-1">
        <img
          src="/portfolio/SNSBANK/collectie.png"
          alt="Collection of e-learning module screens"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  </SectionDetail>
</template>

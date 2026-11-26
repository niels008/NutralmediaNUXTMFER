<script setup>
definePageMeta({ layout: "projects" });

useSeoMeta({
  title: "Goodlooking Cooking website",
  description:
    "Web design and front-end development for catering company Goodlooking Cooking: an image led redesign with video, Instagram and a mobile layout.",
  ogTitle: "Goodlooking Cooking website | Niels de Bont",
  ogDescription:
    "Web design and front-end development for catering company Goodlooking Cooking: an image led redesign with video, Instagram and a mobile layout.",
  ogImage: "/portfolio/goodlookingcooking/glc_detaildesktop.png",
  ogType: "website",
});

const facts = [
  { label: "Role", value: "UX + UI design and frontend development" },
  { label: "Timeline", value: "2 weeks" },
  { label: "Platform", value: "Adecon CMS" },
];
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <CaseIntro
      client="Goodlooking Cooking"
      project="Webdesign & Front-end development"
      outcome="Gave a luxury catering company a website that shows off its craft, and the phone started ringing."
    />

    <CaseAtAGlance :facts="facts" />

    <!-- The problem -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The problem</p>
        <contentWrap>
          <PageTitle :level="3">A lot of visual material, but nothing done with it</PageTitle>
          <p>
            The company focuses on preparing beautiful dishes and is active in
            catering. They use Dutchovens, Ofyrs and Monoliths for this. This
            catering company not only offers catering but also a very
            luxurious experience where quality is paramount.
          </p>
          <p>
            The company has a lot of visual material, but nothing is done with
            it on their current website.
          </p>
          <p>
            After asking a bit further we came to the conclusion that
            "catering" is referred to something cheap in Holland. As a company
            they tried to focus on luxury goods and luxurious.
          </p>
        </contentWrap>
      </div>
      <figure class="case-screens case-screens-1">
        <img
          class="shadow-2xl"
          src="/portfolio/goodlookingcooking/glc_detaildesktop.png"
          alt="Goodlooking Cooking website on desktop"
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
            <PageTitle :level="3">Let the images and a video carry the atmosphere</PageTitle>
            <p>
              Within the redesign of the website it was decided to use these
              images to reflect the atmosphere of the company and the number of
              events they host.
            </p>
            <p>
              During the process, we indicated that using a video could enhance
              the atmosphere. This video ensures more interaction with the
              customer and shows the user what the atmosphere is like on
              location.
            </p>
          </contentWrap>
        </div>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">02</span>
          <contentWrap>
            <PageTitle :level="3">Bring Instagram into a mobile layout</PageTitle>
            <p>
              Because instagram is increasingly playing a role for catering
              companies, the customer asked to implement instagram in the
              website.
            </p>
            <p>
              In this way, the user can share the various images on the website
              or view them on instagram.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow">
          <img
            class="shadow-2xl"
            src="/portfolio/goodlookingcooking/glc_detailmobile.png"
            alt="Goodlooking Cooking website on mobile"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>
    </section>

    <!-- The result -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The result</p>
        <contentWrap>
          <PageTitle :level="3">More visible, and the craft on show</PageTitle>
          <p>
            We helped the company become more visible and showed off the craft behind it.
          </p>
          <p>
            After the website went live, the owner told us they got a lot of calls.
          </p>
        </contentWrap>
      </div>
    </section>
  </SectionDetail>
</template>

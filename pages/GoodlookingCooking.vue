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
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <div
      id="hero"
      data-duration=".5s"
      data-delay=".15s"
      class="detail_title anim"
    >
      <PageTitle :level="1">Goodlooking Cooking</PageTitle>
      <PageTitle :level="2">Webdesign &amp; Front-end development</PageTitle>
    </div>
    <div class="o-wrapper">
      <div
        data-duration=".5s"
        data-delay=".15s"
        class="content_text sticky anim"
      >
        <contentWrap>
          <PageTitle :level="3">GoodlookingCooking</PageTitle>
          <p>
            The company focuses on preparing beautiful dishes and is active in
            catering. They use Dutchovens, Ofyrs and Monoliths for this. This
            catering company not only offers catering but also a very
            luxurious experience where quality is paramount.
          </p>
          <p>
            The company has a lot of visual material, but nothing is done with
            it on their current website. Within the redesign of the website it
            was decided to use these images to reflect the atmosphere of the
            company and the number of events they host.
          </p>
          <p>
            During the process, we indicated that using a video could enhance
            the atmosphere. This video ensures more interaction with the
            customer and shows the user what the atmosphere is like on
            location.
          </p>
        </contentWrap>
      </div>
      <div
        data-duration=".5s"
        data-delay=".15s"
        class="content_image-small vijftigprocent anim"
      >
        <figure class="figure_29-9">
          <img
            class="shadow-2xl"
            src="/portfolio/goodlookingcooking/glc_detaildesktop.png"
            alt="Goodlooking Cooking website on desktop"
            fetchpriority="high"
          />
        </figure>
      </div>
    </div>
    <div
      data-duration=".5s"
      data-delay=".15s"
      class="detail_title spacer anim"
    >
      <PageTitle :level="1">Mobile</PageTitle>
    </div>
    <div class="o-wrapper">
      <div
        data-duration=".5s"
        data-delay=".15s"
        class="content_image-small anim"
      >
        <figure class="figure_59-9">
          <img
            class="shadow-2xl"
            src="/portfolio/goodlookingcooking/glc_detailmobile.png"
            alt="Goodlooking Cooking website on mobile"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
      <div
        data-duration=".5s"
        data-delay=".15s"
        class="content_text sticky anim"
      >
        <contentWrap>
          <PageTitle :level="3">Telefoon format</PageTitle>
          <p>
            Because instagram is increasingly playing a role for catering
            companies, the customer asked to implement instagram in the
            website.
          </p>
          <p>
            In this way, the user can share the various images on the website
            or view them on instagram.
          </p>
          <p>
            After asking a bit further we came to the conclusion that
            "catering" is refered to something cheap in Holland. As a company
            they tried to focus on luxury goods and luxurious.
          </p>
        </contentWrap>
      </div>
    </div>
  </SectionDetail>
</template>

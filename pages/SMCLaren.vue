<script setup>
definePageMeta({ layout: "projects" });

useSeoMeta({
  title: "SMCLaren website",
  description:
    "Web design and front-end development for advisory firm SMCLaren: a newspaper styled site with prominent blogs, service pages and partner profiles.",
  ogTitle: "SMCLaren website | Niels de Bont",
  ogDescription:
    "Web design and front-end development for advisory firm SMCLaren: a newspaper styled site with prominent blogs, service pages and partner profiles.",
  ogImage: "/portfolio/smclaren/frontpage.png",
  ogType: "website",
});
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <div
      id="hero"
      data-duration=".5s"
      data-delay=".3s"
      class="detail_title anim"
    >
      <PageTitle :level="1">SMCLaren</PageTitle>
      <PageTitle :level="2">Webdesign &amp; Front-end development</PageTitle>
    </div>
    <div class="o-wrapper">
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_text sticky anim"
      >
        <div class="c-wrap">
          <PageTitle :level="3">SMCLaren</PageTitle>
          <p>
            SMCLaren is a company that provides advice at a high level. The
            company consists of several partners who work together on top
            structures of large companies.
          </p>
          <p>
            A design has been chosen that meets the needs of the user. The
            research and analysis showed that the users write a large number
            of blogs about their field.
          </p>
          <p>
            These blogs are hidden on the current website and should be more
            prominent. For this reason, it was decided to place the blogs
            prominently on the front page. Trust is very important in the
            world where they work. The different blog posts show the knowledge
            of the different employees. By prominently displaying the various
            blog posts, we therefore generate more confidence.
          </p>
          <p>
            In addition, it was decided to appoint the leaders of this
            partnership prominently displayed in order to create a face for
            the company. An advice was also given to the company to adapt the
            banner to a playful photo of the workspace with the different
            employees working are.
          </p>
          <p>
            The styling is based on a newspaper. This was chosen because there
            is little visual material available and in this way the blogs will
            also speak more based on images.
          </p>
        </div>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_image-small vijftigprocent anim"
      >
        <figure class="figure_19-9">
          <img
            class="shadow-2xl"
            src="/portfolio/smclaren/frontpage.png"
            alt="SMCLaren homepage with featured blogs"
            fetchpriority="high"
          />
        </figure>
      </div>
    </div>
    <div
      data-duration=".5s"
      data-delay=".3s"
      class="detail_title spacer anim"
    >
      <PageTitle :level="1">Services</PageTitle>
    </div>
    <div class="o-wrapper">
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_image-small anim"
      >
        <figure class="figure_113-9">
          <img
            class="shadow-2xl"
            src="/portfolio/smclaren/Diensten.png"
            alt="SMCLaren services overview page"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_text sticky anim"
      >
        <div class="c-wrap">
          <PageTitle :level="3">Services</PageTitle>
          <p>
            A short explanation per service has been chosen for the services
            page. This is done in such a way as to reduce the cognitive load
            of the user by adding details on a new page to describe the
            subject.
          </p>
          <p>
            Headings of the various related blogs have also been added to the
            detail pages. The customer would like to show what has been
            researched and published about a service.
          </p>
        </div>
      </div>
    </div>
    <div class="o-wrapper">
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_image noshadow anim"
      >
        <figure class="figure_12-16">
          <img
            src="/portfolio/smclaren/diensten_detail/diensten_detail.png"
            alt="SMCLaren service detail page"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
    <div
      data-duration=".5s"
      data-delay=".3s"
      class="detail_title spacer anim"
    >
      <PageTitle :level="1">Blog overview</PageTitle>
    </div>
    <div class="o-wrapper">
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_text sticky anim"
      >
        <div class="c-wrap">
          <PageTitle :level="3">Blog overview</PageTitle>
          <p>
            Within the blog overview we have chosen to use a featured blog to
            let the company decide what blog is most important to them to
            share to their audience.
          </p>
          <p>
            In the left sidebar I have chosen to add a filter list for the
            blogs so that the user can filter and categorize the different
            blogs by time and theme.
          </p>
          <p>
            In the detail page the authors of the blog are shown and there is
            an option to go back to the overview of the blogs.
          </p>
        </div>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_image-small vijftigprocent anim"
      >
        <figure class="figure_113-9">
          <img
            src="/portfolio/smclaren/diensten_detail/blog_plus_blogdetail.png"
            alt="Blog overview and blog detail page"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
    <div
      data-duration=".5s"
      data-delay=".3s"
      class="detail_title spacer anim"
    >
      <PageTitle :level="1">Partner overview</PageTitle>
    </div>
    <div class="o-wrapper">
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_image-small vijftigprocent anim"
      >
        <figure class="figure_26-9">
          <img
            class="shadow-2xl"
            src="/portfolio/smclaren/partners.png"
            alt="Partners and advisors overview page"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_text sticky anim"
      >
        <div class="c-wrap">
          <PageTitle :level="3">Partners &amp; Advisors</PageTitle>
          <p>
            For the overview it has been decided to provide a brief
            explanation of his or her expertise for each partner. In addition,
            blogs have been added that the partners and advisors have written.
          </p>
        </div>
      </div>
    </div>
    <div class="o-wrapper">
      <div data-duration=".5s" data-delay=".3s" class="content_text anim">
        <div class="c-wrap">
          <PageTitle :level="3">Partner details</PageTitle>
          <p>
            Within the partner detail page, the different publications of the
            person and the blogs that they have written are displayed. In
            addition, there is a short description of the specialism of the
            partner and/or advisor.
          </p>
        </div>
      </div>
      <div class="content_image-small vijftigprocent">
        <figure class="figure_12-16">
          <img
            class="shadow-2xl"
            src="/portfolio/smclaren/partners_detail.png"
            alt="Partner detail page with publications"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
  </SectionDetail>
</template>

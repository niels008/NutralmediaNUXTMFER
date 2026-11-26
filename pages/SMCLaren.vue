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

const facts = [
  { label: "Role", value: "Frontend development and UX + UI design" },
  { label: "Timeline", value: "4 weeks" },
  { label: "Platform", value: "Adecon CMS" },
];
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <CaseIntro
      client="SMCLaren"
      project="Webdesign & Front-end development"
      outcome="Built SMCLaren's first website, a showcase of the craft that helps win more clients."
    />

    <CaseAtAGlance :facts="facts" />

    <!-- The problem -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The problem</p>
        <contentWrap>
          <PageTitle :level="3">The blogs that build trust were hidden</PageTitle>
          <p>
            SMCLaren is a company that provides advice at a high level. The
            company consists of several partners who work together on top
            structures of large companies.
          </p>
          <p>
            The research and analysis showed that the users write a large number
            of blogs about their field.
          </p>
          <p>
            These blogs are hidden on the current website and should be more
            prominent. Trust is very important in the world where they work.
          </p>
        </contentWrap>
      </div>
    </section>

    <!-- What I did -->
    <section class="case-steps">
      <p class="case-label case-label-center">What I did</p>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">01</span>
          <contentWrap>
            <PageTitle :level="3">Put the blogs and the partners on the front page</PageTitle>
            <p>
              A design has been chosen that meets the needs of the user. For
              this reason, it was decided to place the blogs prominently on the
              front page. The different blog posts show the knowledge of the
              different employees. By prominently displaying the various blog
              posts, we therefore generate more confidence.
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
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1">
          <img
            class="shadow-2xl"
            src="/portfolio/smclaren/frontpage.png"
            alt="SMCLaren homepage with featured blogs"
            fetchpriority="high"
          />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">02</span>
          <contentWrap>
            <PageTitle :level="3">Keep services short and link to the blogs</PageTitle>
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
          </contentWrap>
        </div>
        <div class="case-screens case-screens-2">
          <figure>
            <img
              class="shadow-2xl"
              src="/portfolio/smclaren/Diensten.png"
              alt="SMCLaren services overview page"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure class="case-screens-scroll" tabindex="0" aria-label="Service detail page, scroll to see all">
            <img
              src="/portfolio/smclaren/diensten_detail/diensten_detail.png"
              alt="SMCLaren service detail page"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">03</span>
          <contentWrap>
            <PageTitle :level="3">Let the company feature a blog and let users filter</PageTitle>
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
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow case-screens-scroll" tabindex="0" aria-label="Blog overview and blog detail page, scroll to see all">
          <img
            src="/portfolio/smclaren/diensten_detail/blog_plus_blogdetail.png"
            alt="Blog overview and blog detail page"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">04</span>
          <contentWrap>
            <PageTitle :level="3">Give every partner and advisor a profile</PageTitle>
            <p>
              For the overview it has been decided to provide a brief
              explanation of his or her expertise for each partner. In addition,
              blogs have been added that the partners and advisors have written.
            </p>
            <p>
              Within the partner detail page, the different publications of the
              person and the blogs that they have written are displayed. In
              addition, there is a short description of the specialism of the
              partner and/or advisor.
            </p>
          </contentWrap>
        </div>
        <div class="case-screens case-screens-2">
          <figure>
            <img
              class="shadow-2xl"
              src="/portfolio/smclaren/partners.png"
              alt="Partners and advisors overview page"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure class="case-screens-scroll" tabindex="0" aria-label="Partner detail page, scroll to see all">
            <img
              class="shadow-2xl"
              src="/portfolio/smclaren/partners_detail.png"
              alt="Partner detail page with publications"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </article>
    </section>

    <!-- The result -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The result</p>
        <contentWrap>
          <PageTitle :level="3">What changed for SMCLaren</PageTitle>
          <p>
            SMCLaren got a website that improved their visibility and brand awareness.
          </p>
          <p>
            The blog also built trust with their clients and helped them land new clients.
          </p>
        </contentWrap>
      </div>
    </section>
  </SectionDetail>
</template>

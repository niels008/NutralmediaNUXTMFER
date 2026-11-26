<script setup>
definePageMeta({ layout: "projects" });

useSeoMeta({
  title: "Agrovision product design",
  description:
    "Product design for Agrovision: a portal for apps, permissions and relations management, organisation settings, and analytics with Agrovision Insights.",
  ogTitle: "Agrovision product design | Niels de Bont",
  ogDescription:
    "Product design for Agrovision: a portal for apps, permissions and relations management, organisation settings, and analytics with Agrovision Insights.",
  ogImage: "/portfolio/agrovision/MAV-MyApps.png",
  ogType: "website",
});

const facts = [
  { label: "Role", value: "UX designer and graphic designer" },
  { label: "Timeline", value: "1 year and 10 months" },
  { label: "Platform", value: "my.agrovision" },
];
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <CaseIntro
      client="Agrovision"
      project="Product design"
      outcome="Took a portal made of many separate, acquired products and turned it into one platform."
    />

    <CaseAtAGlance :facts="facts" />

    <!-- The problem -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The problem</p>
        <contentWrap>
          <PageTitle :level="3">A product portfolio that needed one way in</PageTitle>
          <p>
            During my time at Agrovision the focus was mainly on the following topics:
          </p>
          <ul>
            <li>
              Defining and designing a new product to manage and navigate to other products
            </li>
            <li>Big data visualisation with Agrovision Insights</li>
            <li>
              Farm management system specifically for pig farming called Agrovision Growers
            </li>
            <li>
              Rebranding and changing the identity of the Agrovision product portfolio
            </li>
          </ul>
        </contentWrap>
      </div>
      <figure class="case-screens case-screens-1 case-screens-narrow">
        <img
          class="shadow-2xl"
          src="/portfolio/agrovision/MAV-MyApps.png"
          alt="My Agrovision apps overview"
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
            <PageTitle :level="3">Show farmers who has access to what</PageTitle>
            <p>
              As a farmer you work together with a lot of stakeholders and people that rely on you.
            </p>
            <p>
              For this reason we built a solution that shows the permission you give to a stakeholder and what demographic information relates to the stakeholder.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1">
          <img
            src="/portfolio/agrovision/permissions.png"
            alt="Permissions and relations management screen"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">02</span>
          <contentWrap>
            <PageTitle :level="3">Keep personal information in one profile</PageTitle>
            <p>
              To handle all personal information we use a profile page to get the information we need and also share this information within the pages shown in permissions to a specific person.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow">
          <img
            class="shadow-2xl"
            src="/portfolio/agrovision/MAV-MySettings.png"
            alt="My Agrovision profile settings screen"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">03</span>
          <contentWrap>
            <PageTitle :level="3">Give organisations control over employee permissions</PageTitle>
            <p>
              During the making of the product the product managers needed a way to regulate the permissions for employees and therefore needed a screen that could manage this.
            </p>
            <p>
              This part also plays a big role in the management of the permissions for all applications in a general space.
            </p>
            <p>
              Within their organisation they can also choose a color that will be represented within the whole my.agrovision domain. This color is also used to provide the user branding to Agrovision Insights. So the company can do personalized advice with the products we deliver to them.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow">
          <img
            class="shadow-2xl"
            src="/portfolio/agrovision/MAV-ManageEmployees.png"
            alt="Organisation management with employee permissions"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">04</span>
          <contentWrap>
            <PageTitle :level="3">Make reports quick to produce with Agrovision Insights</PageTitle>
            <p>
              Pigs analytics is a layer on top of Power BI reports that provides Agrovision an easy way to produce a lot of reports in a small amount of time.
            </p>
            <p>
              The styling and components for these reports are made in Angular and Figma. They are exported to json files to be made into an editor where the user can build their own report with just a few clicks.
            </p>
            <p>I can't show a lot on this topic because of certain rules.</p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1">
          <img
            src="/portfolio/agrovision/AgrovisionInsights.png"
            alt="Agrovision Insights analytics report"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">05</span>
          <contentWrap>
            <PageTitle :level="3">Explore dashboards with proof of concepts</PageTitle>
            <p>
              Below you see one of the proofs of concept made for dashboarding. At the end of this project we had 4 concepts and this was one of them. I can't show the final version due to legal reasons.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1">
          <img
            src="/portfolio/agrovision/dashboard.png"
            alt="Dashboard reporting tool concept"
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
          <PageTitle :level="3">One portal for apps, access and analytics</PageTitle>
          <p>
            The work resulted in a portal to manage and navigate to other products, permission and organisation management, analytics with Agrovision Insights, and dashboard concepts.
          </p>
          <p>
            The biggest change was the platform itself. The portal went from a lot of separate products that had been acquired over time to one platform.
          </p>
        </contentWrap>
      </div>
    </section>
  </SectionDetail>
</template>

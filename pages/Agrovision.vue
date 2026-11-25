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
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <div
      id="hero"
      data-duration=".5s"
      data-delay=".3s"
      class="detail_title anim"
    >
      <PageTitle :level="1">Agrovision</PageTitle>
      <PageTitle :level="2">Product design</PageTitle>
    </div>
    <div class="o-wrapper">
      <div data-duration=".5s" data-delay=".15s" class="content_text anim">
        <contentWrap>
          <PageTitle :level="3">My Agrovision</PageTitle>
          <p>
            During my time at Agrovision the focus was mainly on the following
            topics:
          </p>
          <ul>
            <li>
              Defining and desinging a new product to manage and navigate to
              other products
            </li>
            <li>Big datavisualisation with Agrovision Insights</li>
            <li>
              Farm management system specificly for pig farming called
              Agrovision Growers
            </li>
            <li>
              Rebranding and changing the identity of the Agrovision product
              portfolio
            </li>
          </ul>
        </contentWrap>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_image-small sticky vijftigprocent anim"
      >
        <figure class="figure_12-16">
          <img
            class="shadow-2xl"
            src="/portfolio/agrovision/MAV-MyApps.png"
            alt="My Agrovision apps overview"
            fetchpriority="high"
          />
        </figure>
      </div>
    </div>
    <div class="o-wrapper">
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_image-small sticky anim"
      >
        <figure class="figure_19-9">
          <img
            src="/portfolio/agrovision/permissions.png"
            alt="Permissions and relations management screen"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>

      <div
        data-duration=".5s"
        data-delay=".3s"
        class="sticky content_text anim"
      >
        <contentWrap>
          <PageTitle :level="3">
            Permissions & <br />
            Relations management
          </PageTitle>
          <p>
            As a farmer you work together with allot of stakeholders and
            people that rely on you.
          </p>
          <p>
            With this reason we build a solution that shows the permission you
            give to a stakeholder and what demographic information relates to
            the stakeholder.
          </p>
        </contentWrap>
      </div>
    </div>
    <div
      data-duration=".5s"
      data-delay=".3s"
      class="detail_title spacer anim"
    ></div>
    <div class="o-wrapper">
      <div data-duration=".5s" data-delay=".3s" class="content_text anim">
        <contentWrap>
          <PageTitle :level="3">My settings</PageTitle>
          <p>
            To handle all personal information we use a profile page to get
            the information we need and also share this information within the
            pages shown in permissions to a specific person.
          </p>
        </contentWrap>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_image-small vijftigprocent anim"
      >
        <figure class="figure_12-16">
          <img
            class="shadow-2xl"
            src="/portfolio/agrovision/MAV-MySettings.png"
            alt="My Agrovision profile settings screen"
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
      <PageTitle :level="1">Organisation</PageTitle>
    </div>
    <div class="o-wrapper">
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_image-small anim"
      >
        <figure class="figure_12-16">
          <img
            class="shadow-2xl"
            src="/portfolio/agrovision/MAV-ManageEmployees.png"
            alt="Organisation management with employee permissions"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
      <Content>
        <contentWrap>
          <PageTitle :level="3">Organisation management</PageTitle>
          <p>
            During the making of the product de productmanagers needed a way
            to regulate the permissions for employee's and there for need a
            screen that could manage this.
          </p>
          <p>
            This part also plays a big role in the management of the
            permissions for all applications in a general space.
          </p>
          <p>
            Within their organisation they can also choose a color that will
            be represented within the whole my.agrovision domain. This color
            is also used to provide the user branding to Agrovision Insights.
            So the company can do personalized advise with the products we
            deliver to them.
          </p>
        </contentWrap>
      </Content>
    </div>
    <div
      data-duration=".5s"
      data-delay=".3s"
      class="detail_title spacer anim"
    >
      <PageTitle :level="1">Analytics</PageTitle>
    </div>
    <div class="o-wrapper">
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_image-small anim"
      >
        <figure class="figure_32-9">
          <img
            src="/portfolio/agrovision/AgrovisionInsights.png"
            alt="Agrovision Insights analytics report"
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
        <contentWrap>
          <PageTitle :level="3">Pigs analytics</PageTitle>
          <p>
            Is a layer on top of Power BI reports that provides Agrovision an
            easy way to produce allot of reports in a small amount of time.
          </p>
          <p>
            The styling and components for these reports are made in Angular
            and Figma. They are exported to json files to made in to a editor
            where the user can build their own report with just a few clicks.
          </p>
          <p>I can't show allot on this topic because of certain rules.</p>
        </contentWrap>
      </div>
    </div>
    <div
      data-duration=".5s"
      data-delay=".3s"
      class="detail_title spacer anim"
    >
      <PageTitle :level="1">Dashboards</PageTitle>
    </div>
    <div class="o-wrapper">
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="sticky content_text anim"
      >
        <contentWrap>
          <PageTitle :level="3">Reporting tool</PageTitle>
          <p>
            To the right you see one of the prove of concepts made for
            dashboarding. At the end of this project we had 4 concepts and
            this was one of them. I can't show the final version due to legal
            reasons.
          </p>
        </contentWrap>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_image-small vijftigprocent anim"
      >
        <figure class="figure_4-4">
          <img
            src="/portfolio/agrovision/dashboard.png"
            alt="Dashboard reporting tool concept"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
  </SectionDetail>
</template>

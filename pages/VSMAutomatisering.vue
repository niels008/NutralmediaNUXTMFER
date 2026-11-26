<script setup>
definePageMeta({ layout: "projects" });

useSeoMeta({
  title: "VSM Automatisering EGAM",
  description:
    "UI, UX design and front-end for EGAM at VSM Automatisering: a livestock dashboard, data entry flows, lists, dynamic groups and a style guide.",
  ogTitle: "VSM Automatisering EGAM | Niels de Bont",
  ogDescription:
    "UI, UX design and front-end for EGAM at VSM Automatisering: a livestock dashboard, data entry flows, lists, dynamic groups and a style guide.",
  ogImage: "/portfolio/vsmautomatisering/dashboard.jpg",
  ogType: "website",
});

const facts = [
  { label: "Role", value: "UX & UI design and frontend development" },
  { label: "Timeline", value: "1 year: a half-year internship, then another half year" },
  { label: "Platform", value: "EGAM and VSM Automatisering" },
];
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <CaseIntro
      client="VSM Automatisering"
      project="UI UX design & Front-end development"
      outcome="Gave livestock farmers one EGAM dashboard, clear data entry flows, lists and dynamic groups, backed by a style guide for the development team."
    />

    <CaseAtAGlance :facts="facts" />

    <!-- The problem -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The problem</p>
        <contentWrap>
          <PageTitle :level="3">Farmers lacked information about their herd</PageTitle>
          <p>
            During my graduation internship at VSM Automatisering I researched the customer's needs regarding EGAM.
          </p>
          <p>
            EGAM is a software package that helps farmers manage their livestock.
          </p>
          <p>
            During the investigation it soon became clear that the user lacks information about his herd.
          </p>
          <p>
            The user research also showed that each farmer wants to know different data. Most farmers in the Netherlands are highly educated and make their own Excel sheets. This is the group we wanted to target.
          </p>
        </contentWrap>
      </div>
      <figure class="case-screens case-screens-1">
        <img class="shadow-2xl" src="/portfolio/vsmautomatisering/dashboard.jpg" alt="EGAM livestock dashboard" fetchpriority="high" />
      </figure>
    </section>

    <!-- What I did -->
    <section class="case-steps">
      <p class="case-label case-label-center">What I did</p>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">01</span>
          <contentWrap>
            <PageTitle :level="3">Research what the dashboard should show, and test early</PageTitle>
            <p>
              During the various discussions, a dashboard was discussed, in which the livestock farmer can monitor his animals, import, remove and also medically monitor the animals.
            </p>
            <p>
              At the analysis phase of the project we used best practice, a/b testing, focus groups and literature research to gather the information need to fill the dashboard. During this process we also look at data visualization and tested this with the user.
            </p>
            <p>
              Within the goat sector, data is collected 6 times a day about the welfare of the animal. With this you can think of:
            </p>
            <ul>
              <li>The health of the animal</li>
              <li>When the goat enters lactation</li>
              <li>Milk production and milk levels</li>
              <li>What the animal ate and the amount</li>
              <li>The number of steps a goat takes per day</li>
            </ul>
            <p>
              This means that there is a lot of data available from which we can form an analysis. I have therefore opted for a design in which the user can analyse, compare and monitor his various animals.
            </p>
            <p>
              In addition, together with the IT team, I discussed the options for linking the milk values to the amount of feed. In this way, the livestock farmer can use about 40% of his feed better, resulting in less nitrogen emissions and better performance of the animals.
            </p>
            <p>
              After my presentation of the concept to the livestock farmers, everyone was very satisfied and curious about the effect of the product. After giving this presentation, I immediately started working on the prototype and testing the prototype with the user.
            </p>
            <p>
              This was done as early as possible because there is little knowledge of computers and related equipment within the agricultural sector. The testing and the process was therefore quite a challenge.
            </p>
            <p>
              In addition, the target group was very large and generic. From an employee of the livestock farmer to the vet who wants to view and assess the data of the livestock farmer. The target group therefore varies greatly in education level and type of work.
            </p>
            <p>
              During this process, tests were carried out 3 times a week and these tests were discussed within the focus group.
            </p>
          </contentWrap>
        </div>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">02</span>
          <contentWrap>
            <PageTitle :level="3">Turn the landing page into a dashboard</PageTitle>
            <p>
              It is important for livestock farmers that they can see at a glance how their livestock is doing. That is why the landing page has become a dashboard with all the necessary information for the farmer.
            </p>
            <p>
              The use of pointing tooltips has resulted in less cognitive load. This is very important within a complex application such as EGAM.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1">
          <img class="shadow-2xl" src="/portfolio/vsmautomatisering/dashboard.jpg" alt="EGAM livestock dashboard" loading="lazy" decoding="async" />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">03</span>
          <contentWrap>
            <PageTitle :level="3">Guide data entry step by step</PageTitle>
            <p>
              It is important for the user that they can enter their animals within the system. Various data is collected here about the welfare of the animal, but also the actions on the animal.
            </p>
            <p>
              A clear step-by-step plan has been chosen to guide the user through the complex system. After testing the prototype, it turned out that the user likes the option to add multiple actions at the same time.
            </p>
          </contentWrap>
        </div>
        <div class="case-screens case-screens-2">
          <figure><img class="shadow-2xl" src="/portfolio/vsmautomatisering/invoer1.jpg" alt="EGAM data entry, step 1" loading="lazy" decoding="async" /></figure>
          <figure><img class="shadow-2xl" src="/portfolio/vsmautomatisering/invoer2.jpg" alt="EGAM data entry, step 2" loading="lazy" decoding="async" /></figure>
        </div>
        <div class="case-screens case-screens-2">
          <figure><img class="shadow-2xl" src="/portfolio/vsmautomatisering/invoer3.jpg" alt="EGAM data entry, step 3" loading="lazy" decoding="async" /></figure>
          <figure><img class="shadow-2xl" src="/portfolio/vsmautomatisering/invoer4.jpg" alt="EGAM data entry, step 4" loading="lazy" decoding="async" /></figure>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow">
          <img class="shadow-2xl" src="/portfolio/vsmautomatisering/invoer5.jpg" alt="EGAM data entry with multiple actions" loading="lazy" decoding="async" />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">04</span>
          <contentWrap>
            <PageTitle :level="3">Let users create lists from raw data</PageTitle>
            <p>
              It is important for the user to be able to make lists with raw data. As livestock farmers, they are obliged to share certain parts of the data with the government.
            </p>
            <p>
              In this way the emissions are measured and, for example, the registration of an animal if it was born or died.
            </p>
            <p>
              In addition, this way the user can compare his animals on values that they determine themselves.
            </p>
          </contentWrap>
        </div>
        <div class="case-screens case-screens-2">
          <figure><img class="shadow-2xl" src="/portfolio/vsmautomatisering/groep1.jpg" alt="Creating lists, step 1" loading="lazy" decoding="async" /></figure>
          <figure><img class="shadow-2xl" src="/portfolio/vsmautomatisering/groep2.jpg" alt="Creating lists, step 2" loading="lazy" decoding="async" /></figure>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow">
          <img class="shadow-2xl" src="/portfolio/vsmautomatisering/groep3.jpg" alt="Creating lists with raw data" loading="lazy" decoding="async" />
        </figure>
        <div class="case-screens case-screens-2">
          <figure><img class="shadow-2xl" src="/portfolio/vsmautomatisering/lijstenmaken.jpg" alt="List overview in EGAM" loading="lazy" decoding="async" /></figure>
          <figure><img class="shadow-2xl" src="/portfolio/vsmautomatisering/lijstenmaken1.jpg" alt="List detail with selected values" loading="lazy" decoding="async" /></figure>
        </div>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">05</span>
          <contentWrap>
            <PageTitle :level="3">Replace repeated selection with dynamic groups</PageTitle>
            <p>
              It is important for the user that they can use groups when creating lists. In the current system it is not possible to create groups. This causes the user to select and re-enter approximately 200 animals at a time for each operation.
            </p>
            <p>
              It was decided to create groups based on the data we have. The user can sort on all values available about the animal. In this way the user can create a dynamic group and make his own queries by selecting filters.
            </p>
            <p>
              The various choices that have been made are the result of a/b testing and contact with stakeholders and users within the focus groups.
            </p>
          </contentWrap>
        </div>
        <div class="case-screens case-screens-2">
          <figure><img class="shadow-2xl" src="/portfolio/vsmautomatisering/groepmaken1.jpg" alt="Creating a dynamic group, step 1" loading="lazy" decoding="async" /></figure>
          <figure><img class="shadow-2xl" src="/portfolio/vsmautomatisering/groepmaken2.jpg" alt="Creating a dynamic group, step 2" loading="lazy" decoding="async" /></figure>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow">
          <img class="shadow-2xl" src="/portfolio/vsmautomatisering/groepmaken3.jpg" alt="Creating a dynamic group, step 3" loading="lazy" decoding="async" />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">06</span>
          <contentWrap>
            <PageTitle :level="3">Hand over a style guide to the development team</PageTitle>
            <p>
              During my graduation I was the only UI &amp; UX Designer within this project. For this reason I have chosen to make a style guide for the web development team. In addition, I have worked out several pages with StencilJS. With StencilJS you can create web components that have a certain generic styling.
            </p>
            <p>
              In addition, you can adjust these web components by adding properties. In this way the design remains consistent and within the style frameworks that have been determined.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1">
          <img class="shadow-2xl" src="/portfolio/vsmautomatisering/stijlgids.jpg" alt="EGAM style guide for the development team" loading="lazy" decoding="async" />
        </figure>
      </article>
    </section>

    <!-- The result -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The result</p>
        <contentWrap>
          <PageTitle :level="3">Groups made a big difference for farmers</PageTitle>
          <p>
            During the research I found out that making groups makes a big difference for farmers. Through the using groups, the farmer needs about 60% less time when entering the animals and the underlying administration.
          </p>
          <p>
            I also introduced a UI library. It helped the company create more consistent work across all of its products.
          </p>
        </contentWrap>
      </div>
    </section>
  </SectionDetail>
</template>

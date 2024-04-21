<script setup>
import BackButton from "@/components/global/BackButton.vue";
import { onMounted } from "vue";
import Animations from "@/functions/Animations";
import Title from "@/components/global/Title.vue";
import SectionDetail from "@/components/global/SectionDetail.vue";
import contentWrap from "@/components/global/contentWrap.vue";
import textWrap from "@/components/global/textWrap.vue";

onMounted(() => {
  Animations();
});
</script>

<template>
  <div class="project">
    <div class="menu-wrap">
      <BackButton />
      <Logo variant="small" />
    </div>
    <SectionDetail :extraSpacing="true">
      <div
        id="hero"
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title anim"
      >
        <Title :level="1">VSM Automatisering</Title>
        <Title :level="3">UI UX design &amp; Front-end development</Title>
      </div>
      <div class="o-wrapper">
        <textWrap>
          <Title :level="3">EGAM</Title>
          <p>
            During my graduation internship at VSM Automatisering I researched
            the customer's needs regarding EGAM.
          </p>
          <p>
            EGAM is a software package that helps farmers manage their
            livestock.
          </p>
          <p>
            During the investigation it soon became clear that the user lacks
            information about his herd.
          </p>
          <p>
            During the various discussions, a dashboard was therefore discussed,
            in which the livestock farmer can monitor his animals, import,
            remove and also medically monitor the animals.
          </p>
          <p>
            At the analysis phase of the project we used best practice, a/b
            testing, focus groups and literature research to gather the
            information need to fill the dashboard. During this process we also
            look at data visualization and tested this with the user.
          </p>
          <p>
            Within the goat sector, data is collected 6 times a day about the
            welfare of the animal. With this you can think of:
          </p>
          <ul>
            <li>The health of the animal</li>
            <li>When the goat enters lactation</li>
            <li>Milk production and milk levels</li>
            <li>What the animal ate and the amount</li>
            <li>The number of steps a goat takes per day</li>
          </ul>
          <p>
            This means that there is a lot of data available from which we can
            form an analysis. I have therefore opted for a design in which the
            user can analyse, compare and monitor his various animals.
          </p>
          <p>
            In addition, together with the IT team, I discussed the options for
            linking the milk values ​​to the amount of feed. In this way, the
            livestock farmer can use about 40% of his feed better, resulting in
            less nitrogen emissions and better performance of the animals.
          </p>
          <p>
            After my presentation of the concept to the livestock farmers,
            everyone was very satisfied and curious about the effect of the
            product. After giving this presentation, I immediately started
            working on the prototype and testing the prototype with the user.
          </p>
          <p>
            This was done as early as possible because there is little knowledge
            of computers and related equipment within the agricultural sector.
            The testing and the process was therefore quite a challenge.
          </p>
          <p>
            In addition, the target group was very large and generic. From an
            employee of the livestock farmer to the vet who wants to view and
            assess the data of the livestock farmer. The target group therefore
            varies greatly in education level and type of work.
          </p>
          <p>
            During this process, tests were carried out 3 times a week and these
            tests were discussed within the focus group.
          </p>
        </textWrap>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_16-9">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/dashboard.jpg"
              alt="Voorpagina smclaren.nl"
            />
          </figure>
        </div>
      </div>
      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_16-9">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/dashboard.jpg"
              alt="Voorpagina smclaren.nl"
            />
          </figure>
        </div>
        <textWrap>
          <Title :level="3">Dashboard</Title>
          <p>
            It is important for livestock farmers that they can see at a glance
            how their livestock is doing. That is why the landing page has
            become a dashboard with all the necessary information for the
            farmer.
          </p>
          <p>
            The use of pointing tooltips has resulted in less cognitive load.
            This is very important within a complex application such as EGAM.
          </p>
        </textWrap>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title spacer anim"
      >
        <Title :level="1">Input of different values</Title>
      </div>
      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_9-16">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/invoer1.jpg"
              alt="Invoer"
            />
          </figure>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_9-16">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/invoer2.jpg"
              alt="Invoer"
            />
          </figure>
        </div>
      </div>
      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_9-16">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/invoer3.jpg"
              alt="Invoer"
            />
          </figure>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_9-16">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/invoer4.jpg"
              alt="Invoer"
            />
          </figure>
        </div>
      </div>
      <div class="o-wrapper">
        <div data-duration=".5s" data-delay=".3s" class="content_text anim">
          <div class="c-wrap">
            <Title :level="3">Enter data</Title>
            <p>
              It is important for the user that they can enter their animals
              within the system. Various data is collected here about the
              welfare of the animal, but also the actions on the animal.
            </p>
            <p>
              A clear step-by-step plan has been chosen to guide the user
              through the complex system. After testing the prototype, it turned
              out that the user likes the option to add multiple actions at the
              same time.
            </p>
          </div>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_9-16">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/invoer5.jpg"
              alt="Blogpagina"
            />
          </figure>
        </div>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title spacer anim"
      >
        <Title :level="3">Create lists</Title>
      </div>
      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_9-16">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/groep1.jpg"
              alt="groepen maken 1"
            />
          </figure>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_9-16">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/groep2.jpg"
              alt="groepen maken 2"
            />
          </figure>
        </div>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title spacer anim"
      >
        <Title :level="1">Create lists</Title>
      </div>
      <div class="o-wrapper">
        <div data-duration=".5s" data-delay=".3s" class="content_text anim">
          <contentWrap>
            <Title :level="3">Create lists</Title>
            <p>
              It is important for the user to be able to make lists with raw
              data. As livestock farmers, they are obliged to share certain
              parts of the data with the government.
            </p>
            <p>
              In this way the emissions are measured and, for example, the
              registration of an animal if it was born or died.
            </p>
            <p>
              In addition, this way the user can compare his animals on values
              ​​that they determine themselves.
            </p>
          </contentWrap>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_9-16">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/groep3.jpg"
              alt="groepen maken 1"
            />
          </figure>
        </div>
      </div>
      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_11-9">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/lijstenmaken.jpg"
              alt="groepen maken 1"
            />
          </figure>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_11-9">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/lijstenmaken1.jpg"
              alt="groepen maken 2"
            />
          </figure>
        </div>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title spacer anim"
      >
        <Title :level="1">Create groups</Title>
      </div>
      <div class="o-wrapper">
        <div data-duration=".5s" data-delay=".3s" class="content_text anim">
          <contentWrap>
            <Title :level="3">Create groups</Title>
            <p>
              It is important for the user that they can use groups when
              creating lists. In the current system it is not possible to create
              groups. This causes the user to select and re-enter approximately
              200 animals at a time for each operation.
            </p>
            <p>
              It was decided to create groups based on the data we have. The
              user can sort on all values ​​available about the animal. In this
              way the user can create a dynamic group and make his own queries
              by selecting filters.
            </p>
            <p>
              During the research I found out that making groups makes a big
              difference for farmers. Through the Using groups, the farmer needs
              about 60% less time when entering the animals and the underlying
              administration.
            </p>
            <p>
              The various choices that have been made are the result of a/b
              testing and contact with stakeholders and users within the focus
              groups.
            </p>
          </contentWrap>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_12-14">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/groepmaken1.jpg"
              alt="groepen maken 1"
            />
          </figure>
        </div>
      </div>
      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_12-14">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/groepmaken2.jpg"
              alt="groepen maken 2"
            />
          </figure>
        </div>
        <div class="content_image-small">
          <figure class="figure_12-14">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/groepmaken3.jpg"
              alt="groepen maken 3"
            />
          </figure>
        </div>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title spacer anim"
      >
        <Title :level="1">Style Guide</Title>
      </div>
      <div class="o-wrapper">
        <div class="content_text sticky">
          <contentWrap>
            <Title :level="3">Style Guide</Title>
            <p>
              During my graduation I was the only UI &amp; UX Designer within
              this project. For this reason I have chosen to make a style guide
              for the web development team. In addition, I have worked out
              several pages with StencilJS. With StencilJS you can create web
              components that have a certain generic styling.
            </p>
            <p>
              In addition, you can adjust these web components by adding
              properties. In this way the design remains consistent and within
              the style frameworks that have been determined.
            </p>
          </contentWrap>
        </div>
        <div class="content_image-small">
          <figure class="figure_65-9">
            <img
              class="e-shadow"
              src="/portfolio/vsmautomatisering/stijlgids.jpg"
              alt="groepen maken 3"
            />
          </figure>
        </div>
      </div>
    </SectionDetail>
  </div>
</template>

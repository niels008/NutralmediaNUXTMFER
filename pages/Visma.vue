<script setup>
import BackButton from "@/components/global/BackButton.vue";
import { onMounted } from "vue";
import Animations from "@/functions/Animations";
import Title from "@/components/global/Title.vue";
import SectionDetail from "@/components/global/SectionDetail.vue";
import contentWrap from "@/components/global/contentWrap.vue";

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
    <SectionDetail>
      <div
        id="hero"
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title anim"
      >
        <Title :level="1">Visma | Visionplanner</Title>
        <Title :level="3">User Experience design &amp; Designsystems</Title>
      </div>
      <div class="o-wrapper">
        <iframe
          style="
            height: 71vh;
            display: flex;
            flex: 1;
            border: 1px solid rgba(0, 0, 0, 0.1);
          "
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FUShdGyxIhDfBsfs32gfZWA%2FWayfinder---Design-System%3Ftype%3Ddesign%26node-id%3D1%253A3%26mode%3Ddesign%26t%3DTUOxn20FhJwJnUlD-1"
          allowfullscreen
        ></iframe>
      </div>
      <div class="o-wrapper">
        <div data-duration=".5s" data-delay=".15s" class="content_text anim">
          <contentWrap>
            <Title :level="3">Wayfinder</Title>
            <p>
              During my time at Visionplanner I have worked on the
              implementation and building of the designsystem called Wayfinder.
              Visionplanner is in the accountancy space and has products that
              help the user make their yearly mandetory documents for their
              clients.
            </p>
            <p>
              The goal of the application is to be efficient and respected by
              the accountancy world. The problem was that the user did not
              understand why we had multiple styles within every single product.
            </p>
            <p>
              To improve trust in the application we defined one designsystem to
              replace them all. Wayfinder acts as a singular designsystem for
              the whole product portfolio of Visionplanner and we moved the
              product strategy to a platform as a service.
            </p>
          </contentWrap>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_12-14">
            <img
              class="e-shadow"
              src="/portfolio/visma/Cover.png"
              alt="Wayfinder designsystem"
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
          <figure class="figure_39-9">
            <img
              class="e-shadow"
              src="/portfolio/visma/Styleguide - Colors & Basics.png"
              alt="Wayfinder designsystem"
            />
          </figure>
        </div>
        <div
          data-duration=".5s"
          data-delay=".15s"
          class="sticky content_text anim"
        >
          <contentWrap>
            <Title :level="3">The colors & brand basics</Title>
            <p>
              First we started by defining the style guide together with
              marketing to see if the brand identity and the style in the
              product was matching. This to provide a singular style throughout
              the applications, websites and outings towards customers.
            </p>
            <p>
              And in the end gain their trust and show the user group we take
              their point of view into account.
            </p>
          </contentWrap>
        </div>
      </div>

      <div class="o-wrapper">
        <div class="content_text sticky">
          <contentWrap>
            <Title :level="3">Grids & Spacing</Title>
            <p>
              To make the spacing more consistant we made sure we used a system.
            </p>
          </contentWrap>
        </div>
        <div class="content_image-small">
          <figure class="figure_9dot3-9">
            <img
              class="e-shadow"
              src="/portfolio/visma/Styleguide - Grids & Spacing.png"
              alt="groepen maken 3"
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
          <figure class="figure_26-9">
            <img
              class="e-shadow"
              src="/portfolio/visma/Styleguide - Typography.png"
              alt="Wayfinder designsystem"
            />
          </figure>
        </div>
        <div
          data-duration=".5s"
          data-delay=".15s"
          class="sticky content_text anim"
        >
          <contentWrap>
            <Title :level="3">Typography and Figma Styles</Title>
            <p>
              For each font and each situation the font was displayed we defined
              a style and semantic variable to help the designers pick the right
              font and style based on our consistant design system.
            </p>
            <p>
              The same fonts would also be used by the Marketing team to keep
              the graphic design parts and product design parts more aligned.
            </p>
          </contentWrap>
        </div>
      </div>
      <div class="o-wrapper">
        <div class="content_text sticky">
          <contentWrap>
            <Title :level="3">Icons</Title>
            <p>
              The moment we as product designers got to the company the product
              owners would still be making all the icons. To improve their way
              of working and teach them the right way we provided them with a
              example of how icons should be made.
            </p>
            <p>
              In a later stage of the the designsystem we decided to start using
              the material desing icons because most of the icons we made where
              simular and the time spend to make a good icon was not of allot of
              value for the customer.
            </p>
          </contentWrap>
        </div>
        <div class="content_image-small">
          <figure class="figure_73-9">
            <img
              class="e-shadow"
              src="/portfolio/visma/Styleguide - Icons.png"
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
        <Title :level="1">Atomic design</Title>
      </div>
      <div class="o-wrapper" style="align-items: start">
        <div class="content_text">
          <contentWrap>
            <p style="font-weight: 700">Atoms</p>
            <p>
              Atoms are the basic building blocks of UI design. These are the
              smallest, indivisible elements such as buttons, input fields,
              labels, icons, etc.
            </p>

            <p style="font-weight: 700">Molecules</p>
            <p>
              Molecules are combinations of atoms that work together as a single
              unit. For example, a search bar (composed of an input field and a
              button) or a navigation menu (composed of menu items).
            </p>

            <p style="font-weight: 700">Organisms</p>
            <p>
              Organisms are groups of molecules functioning together to form a
              more complex component that serves a specific purpose within a UI.
              Examples include a header (composed of a logo, navigation, and
              search bar) or a sidebar (composed of various widgets).
            </p>
          </contentWrap>
        </div>
        <div class="content_text">
          <contentWrap>
            <p style="font-weight: 700">Templates</p>
            <p>
              Templates represent the layout or structure of a page or section
              of a UI. They define the arrangement and composition of organisms
              and molecules within a specific context.
            </p>

            <p style="font-weight: 700">Pages</p>
            <p>
              Pages are instances of templates filled with actual content. They
              represent the final stage where all the components are combined to
              create a fully functional UI.
            </p>

            <p>
              By breaking down UI design into these smaller, more manageable
              components, atomic design promotes modularity, reusability, and
              scalability. It also facilitates collaboration among designers and
              developers since components are standardized and can be easily
              shared and reused across projects. Additionally, it encourages
              consistency and maintainability by enforcing a structured approach
              to UI design.
            </p>
          </contentWrap>
        </div>
      </div>
      <div class="big-img-wrapper">
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image vijftigprocent anim"
        >
          <figure class="figure_9-16">
            <img
              src="/portfolio/visma/atomicelements.png"
              alt="Wayfinder designsystem"
            />
          </figure>
        </div>
      </div>
    </SectionDetail>
  </div>
</template>

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
              During my tenure at Visionplanner, I spearheaded the
              implementation and development of Wayfinder, our comprehensive
              design system. Operating within the accountancy sector,
              Visionplanner specializes in crafting essential yearly
              documentation for clients.
            </p>
            <p>
              The primary objective of the Wayfinder application is to
              streamline processes and uphold a reputable stance within the
              accountancy industry. Initially, a key challenge revolved around
              users grappling with the multitude of styles present across our
              product range.
            </p>
            <p>
              To foster greater user confidence and cohesion, we embarked on a
              mission to consolidate disparate styles into a unified design
              system. Wayfinder emerged as the singular solution, harmonizing
              the entire product portfolio of Visionplanner. This strategic move
              also involved transitioning our product strategy to a
              platform-as-a-service model.
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
              src="/portfolio/visma/Styleguide-ColorsBasics.png"
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
            <Title :level="3"
              >Establishing Brand Consistency: Colors and Basics</Title
            >
            <p>
              Our journey began with a collaborative effort between our team and
              the marketing department to establish a cohesive style guide. This
              involved aligning the brand identity with the product's visual
              elements to ensure consistency across applications, websites, and
              customer interactions.
            </p>
            <p>
              Ultimately, our aim was twofold: to instill trust among our users
              and to demonstrate our commitment to incorporating their
              perspectives into our design decisions.
            </p>
          </contentWrap>
        </div>
      </div>

      <div class="o-wrapper">
        <div class="content_text sticky">
          <contentWrap>
            <Title :level="3">Optimizing Layouts: Grids & Spacing</Title>
            <p>
              Achieving consistent spacing was a priority, and to accomplish
              this, we implemented a systematic approach.
            </p>
          </contentWrap>
        </div>
        <div class="content_image-small">
          <figure class="figure_9dot3-9">
            <img
              class="e-shadow"
              src="/portfolio/visma/Styleguide-GridsSpacing.png"
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
              src="/portfolio/visma/Styleguide-Typography.png"
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
            <Title :level="3"
              >Crafting Consistent Typography with Figma Styles</Title
            >
            <p>
              We meticulously defined styles and semantic variables for each
              font and context in which it was used. This provided designers
              with clear guidelines for selecting the appropriate font and style
              from our cohesive design system.
            </p>
            <p>
              Furthermore, by utilizing the same fonts across both marketing and
              product design endeavors, we ensured alignment between graphic
              design elements and product interfaces.
            </p>
          </contentWrap>
        </div>
      </div>
      <div class="o-wrapper">
        <div class="content_text sticky">
          <contentWrap>
            <Title :level="3">Streamlining Iconography</Title>
            <p>
              Upon joining the company as product designers, we observed that
              product owners were primarily responsible for creating icons.
              Recognizing an opportunity to enhance their workflow and promote
              best practices, we provided them with a standardized example of
              icon creation.
            </p>
            <p>
              As our design system matured, we opted to integrate Material
              Design icons into our repertoire. This decision stemmed from the
              realization that many of the icons we required were similar in
              nature, and in
            </p>
          </contentWrap>
        </div>
        <div class="content_image-small">
          <figure class="figure_73-9">
            <img
              class="e-shadow"
              src="/portfolio/visma/Styleguide-Icons.png"
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
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title spacer anim"
      >
        <Title :level="1">Wayfinder designsystem</Title>
      </div>
      <div class="o-wrapper">
        <iframe
          style="
            height: 71vh;
            display: flex;
            flex: 1;
            border: 1px solid rgba(0, 0, 0, 0.1);
          "
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Foeapwga43mHRqouUxrEYOH%2FDS-dont-remove%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DTx3TC8OkPMV0pNw0-1"
          allowfullscreen
        ></iframe>
      </div>
    </SectionDetail>
  </div>
</template>

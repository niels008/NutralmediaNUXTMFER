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
    <SectionDetail :extraSpacing="true">
      <div
        id="hero"
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title anim"
      >
        <Title :level="1">Visma | Raet</Title>
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
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_12-14">
            <img
              src="/portfolio/visma/visionplanner.png"
              alt="Visionplanner, Wayfinder and Compilation expert"
            />
          </figure>
        </div>
        <div data-duration=".5s" data-delay=".15s" class="content_text anim">
          <contentWrap>
            <Title :level="3">Wayfinder</Title>
            <p>
                During my time at Visionplanner, I contributed to the implementation and development of Wayfinder, a comprehensive design system. Visionplanner operates in the accountancy sector, focusing on providing essential yearly documentation for clients.
            </p>
            <p>
                The primary goal of the Wayfinder designsystem was to streamline processes and strengthen our trust within the accountancy industry. One of the key challenges we addressed was the lack of consistency across the styles used in our product range, which impacted the user experience and trust.
            </p>
            <p>
                To improve user confidence and create a more cohesive experience, we worked on consolidating these varied styles into a unified design system. The Wayfinder design system became the central solution, ensuring alignment across Visionplanner’s product portfolio. As part of this initiative, we also began transitioning towards a platform-as-a-service (PaaS) model to support our evolving product strategy.
            </p>
          </contentWrap>
        </div>
      </div>
      <div class="o-wrapper">
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
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_39-9">
            <img
              class="shadow-2xl"
              src="/portfolio/visma/Styleguide-ColorsBasics.png"
              alt="Wayfinder designsystem"
            />
          </figure>
        </div>
      </div>
      <div class="o-wrapper">
        <div class="content_image-small">
          <figure class="figure_9dot3-9">
            <img
              class="shadow-2xl"
              src="/portfolio/visma/Styleguide-GridsSpacing.png"
              alt="groepen maken 3"
            />
          </figure>
        </div>
        <div class="content_text sticky">
          <contentWrap>
            <Title :level="3">Optimizing Layouts: Grids & Spacing</Title>
            <p>
              Achieving consistent spacing was a priority, and to accomplish
              this, we implemented a systematic approach.
            </p>
          </contentWrap>
        </div>
      </div>
      <div class="o-wrapper">
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
              We defined styles and semantic variables for each
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
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_26-9">
            <img
              class="shadow-2xl"
              src="/portfolio/visma/Styleguide-Typography.png"
              alt="Wayfinder designsystem"
            />
          </figure>
        </div>
      </div>
      <div class="o-wrapper">
        <div class="content_image-small">
          <figure class="figure_73-9">
            <img
              class="shadow-2xl"
              src="/portfolio/visma/Styleguide-Icons.png"
              alt="groepen maken 3"
            />
          </figure>
        </div>
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
              Design icons into our designsystem. This decision stemmed from the
              realization that many of the icons we required were similar in
              nature.
            </p>
          </contentWrap>
        </div>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title spacer anim"
      >
        <Title :level="1">Atomic design</Title>
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


    <div
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title spacer anim"
      >
        <Title :level="1">Visionplanner Compilation</Title>

      </div>

      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_12-14">
            <img
              src="/portfolio/visma/visionplanner.png"
              alt="Visionplanner, Wayfinder and Compilation expert"
            />
          </figure>
        </div>
        <div data-duration=".5s" data-delay=".15s" class="content_text anim">
          <contentWrap>
            <Title :level="3">Visionplanner Compilation</Title>
            <p>
                After having a clearly defined UI kit called Wayfinder we started working on Visionplanner Compilation. A new application that would help the accountant within his day to day work. The application helps the user by adding information and automation to his dayly work.
            </p>

          </contentWrap>
        </div>
      </div>

    </SectionDetail>
  </div>
</template>

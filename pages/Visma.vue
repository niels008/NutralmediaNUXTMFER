<script setup>
definePageMeta({ layout: "projects" });

useSeoMeta({
  title: "Visma Visionplanner design system",
  description:
    "User experience design and design systems at Visma Visionplanner: building Wayfinder, from colors, grids, typography and icons to Visionplanner Compilation.",
  ogTitle: "Visma Visionplanner design system | Niels de Bont",
  ogDescription:
    "User experience design and design systems at Visma Visionplanner: building Wayfinder, from colors, grids, typography and icons to Visionplanner Compilation.",
  ogImage: "/portfolio/visma/visionplanner.png",
  ogType: "website",
});

const facts = [
  { label: "Role", value: "Product designer" },
  { label: "Timeline", value: "A few months" },
  { label: "Platform", value: "Visionplanner" },
];
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <CaseIntro
      client="Visma | Visionplanner"
      project="User Experience design & Designsystems"
      outcome="Turned a product range with inconsistent styles into Wayfinder, one design system that went on to power Visionplanner Compilation."
    />

    <CaseAtAGlance :facts="facts" />

    <!-- The problem -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The problem</p>
        <contentWrap>
          <PageTitle :level="3">Inconsistent styles were costing users' trust</PageTitle>
          <p>
            Visionplanner operates in the accountancy sector, focusing on providing essential yearly documentation for clients.
          </p>
          <p>
            One of the key challenges we addressed was the lack of consistency across the styles used in our product range, which impacted the user experience and trust.
          </p>
        </contentWrap>
      </div>
      <figure class="case-screens case-screens-1">
        <img
          src="/portfolio/visma/visionplanner.png"
          alt="Visionplanner product screens using Wayfinder"
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
            <PageTitle :level="3">Start from the brand, together with marketing</PageTitle>
            <p>
              Our journey began with a collaborative effort between our team and the marketing department to establish a cohesive style guide, aligning the brand identity with the product's visual elements across applications, websites, and customer interactions.
            </p>
            <p>
              Ultimately, our aim was twofold: to instill trust among our users and to demonstrate our commitment to incorporating their perspectives into our design decisions.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow case-screens-scroll" tabindex="0" aria-label="Colors and basics style guide, scroll to see all">
          <img src="/portfolio/visma/Styleguide-ColorsBasics.png" alt="Wayfinder style guide: colors and basics" loading="lazy" decoding="async" />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">02</span>
          <contentWrap>
            <PageTitle :level="3">Make spacing and type a system, not a choice per screen</PageTitle>
            <p>
              Achieving consistent spacing was a priority, and to accomplish this, we implemented a systematic approach.
            </p>
            <p>
              We defined styles and semantic variables for each font and context in which it was used, giving designers clear guidelines. Using the same fonts across marketing and product kept graphic design and product interfaces aligned.
            </p>
          </contentWrap>
        </div>
        <div class="case-screens case-screens-2">
          <figure><img class="shadow-2xl" src="/portfolio/visma/Styleguide-GridsSpacing.png" alt="Wayfinder style guide: grids and spacing" loading="lazy" decoding="async" /></figure>
          <figure class="case-screens-scroll" tabindex="0" aria-label="Typography style guide, scroll to see all"><img src="/portfolio/visma/Styleguide-Typography.png" alt="Wayfinder style guide: typography" loading="lazy" decoding="async" /></figure>
        </div>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">03</span>
          <contentWrap>
            <PageTitle :level="3">Adopt Material icons instead of drawing our own</PageTitle>
            <p>
              Product owners were primarily responsible for creating icons, so we first gave them a standardized example of icon creation.
            </p>
            <p>
              As our design system matured, we integrated Material Design icons, since many of the icons we required were similar in nature.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow case-screens-scroll" tabindex="0" aria-label="Iconography style guide, scroll to see all">
          <img src="/portfolio/visma/Styleguide-Icons.png" alt="Wayfinder style guide: iconography" loading="lazy" decoding="async" />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">04</span>
          <contentWrap>
            <PageTitle :level="3">Structure the kit with atomic design</PageTitle>
            <p>
              Breaking the UI into atoms, molecules, organisms, templates and pages promotes modularity, reusability, and scalability, and lets designers and developers share standardized components across projects.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1">
          <img src="/portfolio/visma/atomicelements.png" alt="Atomic design elements in Wayfinder" loading="lazy" decoding="async" />
        </figure>
        <dl class="case-atoms">
          <div><dt>Atoms</dt><dd>The smallest, indivisible elements such as buttons, input fields, labels and icons.</dd></div>
          <div><dt>Molecules</dt><dd>Atoms working together as a single unit, like a search bar or a navigation menu.</dd></div>
          <div><dt>Organisms</dt><dd>Groups of molecules forming a complex component, like a header or a sidebar.</dd></div>
          <div><dt>Templates</dt><dd>The layout of a page or section: how organisms and molecules are arranged.</dd></div>
          <div><dt>Pages</dt><dd>Templates filled with actual content: the final, fully functional UI.</dd></div>
        </dl>
      </article>
    </section>

    <!-- The result -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The result</p>
        <contentWrap>
          <PageTitle :level="3">Wayfinder became the base for Visionplanner Compilation</PageTitle>
          <p>
            With Wayfinder in place, we began developing Visionplanner Compilation, a new application that supports accountants in their daily tasks by integrating helpful information and automation into their routine processes.
          </p>
          <p>
            Wayfinder evolved from a simple UI kit into a fully-fledged design system, with reusable patterns and accessibility guidelines, as Visionplanner moved towards a platform-as-a-service model.
          </p>
          <p>
            The biggest result was trust. Users no longer wanted to talk to the UX designers who came before us. After we won that trust back by making the application look and feel the same everywhere, they let us into their business and talked with us about the future of the product.
          </p>
        </contentWrap>
      </div>
      <figure class="case-screens case-screens-1">
        <img class="shadow-2xl" src="/portfolio/visma/VisionplannerCompilation.png" alt="Visionplanner Compilation application screens" loading="lazy" decoding="async" />
      </figure>
      <div class="case-figma">
        <iframe
          title="Wayfinder design system in Figma"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FUShdGyxIhDfBsfs32gfZWA%2FWayfinder---Design-System%3Ftype%3Ddesign%26node-id%3D1%253A3%26mode%3Ddesign%26t%3DTUOxn20FhJwJnUlD-1"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </SectionDetail>
</template>

<style lang="scss">
.case-label {
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #f69c2a;
  margin-bottom: 0.75rem;
}
.case-label-center { text-align: center; }
.case-block,
.case-steps {
  width: 100%;
  max-width: 1280px;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.case-block_head,
.case-step_head {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  align-items: start;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
  .c-wrap { max-width: 640px; }
  .c-wrap p { max-width: 640px; }
  .c-wrap h3 { max-width: 640px; }
}
.case-block_head { grid-template-columns: 1fr; }
.case-block_head .c-wrap h3 { font-size: 1.6rem; }
.case-steps { gap: 5rem; }
.case-step {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
.case-step_num {
  font-family: "Bitter", serif;
  font-size: 3rem;
  line-height: 1;
  color: #f69c2a;
}
.case-step_head .c-wrap h3 { font-size: 1.6rem; }
.case-screens {
  margin: 0;
  img { width: 100%; height: auto; display: block; }
}
.case-screens-scroll {
  max-height: 720px;
  overflow-y: auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  img { width: 100%; height: auto; display: block; }
}
.case-block > .case-screens-1 { max-width: 960px; }
.case-screens-narrow { max-width: 640px; margin-left: calc(33.333% + 0.7rem); @media (max-width: 600px) { margin-left: 0; } }
.case-screens-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
}
.case-atoms {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.5rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
  dt { font-family: "Bitter", serif; font-weight: 700; margin-bottom: 0.25rem; }
  dd { font-family: "Open Sans", sans-serif; font-size: 0.9rem; line-height: 1.6; color: #333333; }
}
.case-figma iframe {
  width: 100%;
  height: 71vh;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>

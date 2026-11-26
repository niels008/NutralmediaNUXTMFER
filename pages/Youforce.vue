<script setup>
definePageMeta({ layout: "projects" });

useSeoMeta({
  title: "Youforce",
  description:
    "Youforce case study: UX design and design system work on the HR and payroll platform of Visma | Raet, used by Dutch employers and their employees.",
  ogTitle: "Youforce | Niels de Bont",
  ogDescription:
    "UX design and design system work on Youforce, the HR and payroll platform of Visma | Raet.",
  ogImage: "/portfolio/youforce/hrcycle-jaargesprek.png",
  ogType: "website",
});

const facts = [
  { label: "Role", value: "UX design and strategy for HR Cycle" },
  { label: "Timeline", value: "Half a year" },
  { label: "Platform", value: "Youforce" },
];
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <CaseIntro
      client="Youforce"
      project="HR & payroll platform"
      outcome="Replaced Learning Management with HR Cycle, a form builder that keeps the attention on the yearly conversation instead of the form."
    />

    <CaseAtAGlance :facts="facts" />

    <!-- The problem -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The problem</p>
        <contentWrap>
          <PageTitle :level="3">A mandatory conversation nobody wanted to have</PageTitle>
          <p>
            Youforce is the HR and payroll platform of Visma | Raet. Employers,
            HR professionals, managers and employees use it for their payroll
            administration and HR processes. I worked on several products
            within the platform. The first one below is HR Cycle.
          </p>
          <p>
            HR Cycle replaces an older product called Learning Management. User
            research showed that it did not close the gap its users actually
            had, so people worked around it. The yearly conversations were
            written down in Word documents or on paper in the office.
          </p>
          <p>
            These conversations are mandatory, but the people having them did
            not want to do them. That set the goal for the whole product: make
            something people have to do as easy as possible.
          </p>
        </contentWrap>
      </div>
      <!--
        Only use anonymised screenshots here: no real employee data, salary
        figures, BSN or bank details in any image on this page.
      -->
      <figure class="case-screens case-screens-1 case-screens-narrow">
        <img
          class="shadow-2xl"
          src="/portfolio/youforce/hrcycle-jaargesprek.png"
          alt="HR Cycle annual review form in Youforce Talent management, with a rating scale and written answers"
          width="1087"
          height="1280"
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
            <PageTitle :level="3">Put the conversation first, the form second</PageTitle>
            <p>
              The conversation is the most important part, not the form around
              it. Everything in the product is built to keep the attention on
              the people talking to each other.
            </p>
            <p>
              So HR Cycle became a form builder that is simple to build and
              simple to configure. HR administrators get the flexibility to
              shape their own cycle, without the product turning into a
              configuration project.
            </p>
          </contentWrap>
        </div>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">02</span>
          <contentWrap>
            <PageTitle :level="3">Design for mobile as well as desktop</PageTitle>
            <p>
              The product was designed for mobile as well as desktop, so a form
              can be filled in on the move instead of back at a desk.
            </p>
            <p>
              Healthcare is where this pays off most. Those teams are rarely
              behind a computer, so filling in a form on a phone while on the
              move fits their day better than sitting down at a desk for it.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow">
          <img
            class="shadow-2xl"
            src="/portfolio/youforce/hrcycle-mobiel-jaargesprek.png"
            alt="HR Cycle annual review form on a phone, with the rating scale stacked as full width options"
            width="413"
            height="906"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">03</span>
          <contentWrap>
            <PageTitle :level="3">Borrow patterns administrators already know</PageTitle>
            <p>
              HR administrators build the forms themselves. We looked closely
              at Google Forms and the Microsoft tools while designing this
              part. The research told us this user group already works with
              those products and understands them, so borrowing patterns they
              recognise meant far less to explain.
            </p>
            <p>
              The screen is a general information section at the top, with one
              section per question below it. Every question is shown the way
              the employee will see it, so an administrator can tell what they
              are making without a separate preview mode.
            </p>
            <p>
              Every question an administrator writes is kept in a library. They
              can pick it up again in another form instead of writing the same
              question twice.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow">
          <img
            class="shadow-2xl"
            src="/portfolio/youforce/hrcycle-formulier-bouwen.png"
            alt="HR Cycle form builder: form information, a question library and a question with a rating scale"
            width="1361"
            height="1839"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">04</span>
          <contentWrap>
            <PageTitle :level="3">Scope the first phase for the sunset deadline</PageTitle>
            <p>
              The old product was being sunset, and that date set our
              deadline. For the first phase we descoped a lot to make it.
            </p>
            <p>
              The section per question was the decision that made this
              affordable. It gave us room to add removing and repositioning
              questions in a later stage, without having to redraw the page.
            </p>
          </contentWrap>
        </div>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">05</span>
          <contentWrap>
            <PageTitle :level="3">Add 360 degree feedback to the conversation</PageTitle>
            <p>
              We also introduced 360 degree feedback. Next to the conversation
              itself, an employee can ask several people around them for
              feedback, so the conversation is based on more than one point of
              view.
            </p>
            <p>
              The result view shows how many of the people asked have answered,
              then the answers per question. The screenshot shows the question
              types side by side: a five point scale as a bar chart, a yes or
              no question as a ring, a ten point score, and the open answers
              below them.
            </p>
          </contentWrap>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow">
          <img
            class="shadow-2xl"
            src="/portfolio/youforce/hrcycle-360-feedback.png"
            alt="360 degree feedback results in HR Cycle: response progress, a five point scale, a yes or no question, a ten point score and open answers"
            width="1200"
            height="2337"
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
          <PageTitle :level="3">Reporting shipped in the first release</PageTitle>
          <p>
            Administrators create the forms and the questions themselves, and
            the answers are available in reporting. Overviews are built with
            Power BI. Reporting shipped in the first release, even though a lot
            else was descoped to make the deadline.
          </p>
          <p>
            How much the reporting can show depends on the question types. Two
            point questions, five point questions and scoring questions all
            return values, so an administrator who wants more data in view can
            lean on those rather than open text.
          </p>
          <p>
            89% of the users who were part of the gap analysis for this product now use HR Cycle.
          </p>
        </contentWrap>
      </div>
    </section>
  </SectionDetail>
</template>

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
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <div
      id="hero"
      data-duration=".5s"
      data-delay=".3s"
      class="detail_title anim"
    >
      <PageTitle :level="1">Youforce</PageTitle>
      <PageTitle :level="3">HR &amp; payroll platform</PageTitle>
    </div>
    <div class="o-wrapper yf-row">
      <div data-duration=".5s" data-delay=".3s" class="content_text anim">
        <contentWrap>
          <PageTitle :level="3">The platform</PageTitle>
          <p>
            Youforce is the HR and payroll platform of Visma | Raet. Employers,
            HR professionals, managers and employees use it for their payroll
            administration and HR processes. I worked on several products
            within the platform. The first one below is HR Cycle.
          </p>
        </contentWrap>
      </div>
      <!--
        Only use anonymised screenshots here: no real employee data, salary
        figures, BSN or bank details in any image on this page.
      -->
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="content_image-small vijftigprocent anim"
      >
        <img
          class="shadow-2xl"
          src="/portfolio/youforce/hrcycle-jaargesprek.png"
          alt="HR Cycle annual review form in Youforce Talent management, with a rating scale and written answers"
          width="1087"
          height="1280"
          fetchpriority="high"
        />
      </div>
    </div>

    <div data-duration=".5s" data-delay=".15s" class="detail_title anim">
      <PageTitle :level="1">HR Cycle</PageTitle>
      <PageTitle :level="3">A conversation first, a form second</PageTitle>
    </div>

    <div class="o-wrapper yf-row" style="align-items: flex-start">
      <div data-duration=".5s" data-delay=".15s" class="content_text anim">
        <contentWrap>
          <PageTitle :level="3">What the research showed</PageTitle>
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
      <div data-duration=".5s" data-delay=".15s" class="content_text anim">
        <contentWrap>
          <PageTitle :level="3">The strategy</PageTitle>
          <p>
            The conversation is the most important part, not the form around
            it. Everything in the product is built to keep the attention on the
            people talking to each other.
          </p>
          <p>
            So HR Cycle became a form builder that is simple to build and
            simple to configure. HR administrators get the flexibility to shape
            their own cycle, without the product turning into a configuration
            project.
          </p>
        </contentWrap>
      </div>
    </div>

    <div class="o-wrapper yf-row">
      <div data-duration=".5s" data-delay=".15s" class="content_text anim">
        <contentWrap>
          <PageTitle :level="3">Mobile and desktop</PageTitle>
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
      <div
        data-duration=".5s"
        data-delay=".15s"
        class="content_image-small anim"
        style="max-width: 300px"
      >
        <img
          class="shadow-2xl"
          src="/portfolio/youforce/hrcycle-mobiel-jaargesprek.png"
          alt="HR Cycle annual review form on a phone, with the rating scale stacked as full width options"
          width="413"
          height="906"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    <div class="o-wrapper yf-row">
      <div data-duration=".5s" data-delay=".15s" class="content_text anim">
        <contentWrap>
          <PageTitle :level="3">The admin side</PageTitle>
          <p>
            HR administrators build the forms themselves. We looked closely at
            Google Forms and the Microsoft tools while designing this part. The
            research told us this user group already works with those products
            and understands them, so borrowing patterns they recognise meant
            far less to explain.
          </p>
          <p>
            The screen is a general information section at the top, with one
            section per question below it. Every question is shown the way the
            employee will see it, so an administrator can tell what they are
            making without a separate preview mode.
          </p>
        </contentWrap>
      </div>
      <div
        data-duration=".5s"
        data-delay=".15s"
        class="content_image-small vijftigprocent anim"
      >
        <img
          class="shadow-2xl"
          src="/portfolio/youforce/hrcycle-formulier-bouwen.png"
          alt="HR Cycle form builder: form information, a question library and a question with a rating scale"
          width="1361"
          height="1839"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    <div class="o-wrapper yf-row" style="align-items: flex-start">
      <div data-duration=".5s" data-delay=".15s" class="content_text anim">
        <contentWrap>
          <PageTitle :level="3">Scoping for a deadline</PageTitle>
          <p>
            The old product was being sunset, and that date set our deadline.
            For the first phase we descoped a lot to make it.
          </p>
          <p>
            The section per question was the decision that made this
            affordable. It gave us room to add removing and repositioning
            questions in a later stage, without having to redraw the page.
          </p>
        </contentWrap>
      </div>
      <div data-duration=".5s" data-delay=".15s" class="content_text anim">
        <contentWrap>
          <PageTitle :level="3">A question library</PageTitle>
          <p>
            Every question an administrator writes is kept in a library. They
            can pick it up again in another form instead of writing the same
            question twice.
          </p>
        </contentWrap>
      </div>
    </div>

    <div class="o-wrapper yf-row" style="align-items: flex-start">
      <div data-duration=".5s" data-delay=".15s" class="content_text anim">
        <contentWrap>
          <PageTitle :level="3">360 degree feedback</PageTitle>
          <p>
            We also introduced 360 degree feedback. Next to the conversation
            itself, an employee can ask several people around them for
            feedback, so the conversation is based on more than one point of
            view.
          </p>
          <p>
            The result view shows how many of the people asked have answered,
            then the answers per question. The screenshot shows the question
            types side by side: a five point scale as a bar chart, a yes or no
            question as a ring, a ten point score, and the open answers below
            them.
          </p>
        </contentWrap>
        <contentWrap>
          <PageTitle :level="3">Reporting</PageTitle>
          <p>
            Administrators create the forms and the questions themselves, and
            the answers are available in reporting. Overviews are built with
            Power BI. Reporting shipped in the first release, even though a
            lot else was descoped to make the deadline.
          </p>
          <p>
            How much the reporting can show depends on the question types. Two
            point questions, five point questions and scoring questions all
            return values, so an administrator who wants more data in view can
            lean on those rather than open text.
          </p>
        </contentWrap>
      </div>
      <div
        data-duration=".5s"
        data-delay=".15s"
        class="content_image-small anim"
        style="max-width: 420px"
      >
        <img
          class="shadow-2xl"
          src="/portfolio/youforce/hrcycle-360-feedback.png"
          alt="360 degree feedback results in HR Cycle: response progress, a five point scale, a yes or no question, a ten point score and open answers"
          width="1200"
          height="2337"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

  </SectionDetail>
</template>

<style lang="postcss">
/* Youforce case: every row shares one left text edge and one right image edge */
.o-wrapper.yf-row {
  justify-content: space-between;
  gap: 4rem;
  padding: 0 1rem;
  > .content_text {
    flex: 1 1 0;
    max-width: none;
    margin: 1rem 0;
    align-items: flex-start;
  }
  > .content_image-small {
    flex: 0 1 auto;
    margin: 1rem 0;
    justify-content: flex-end;
  }
}
</style>

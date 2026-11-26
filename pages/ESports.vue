<script setup>
definePageMeta({ layout: "projects" });

useSeoMeta({
  title: "E-Sports branding",
  description:
    "Branding for e-sports teams and streamers: logos, corporate identities and t-shirts, plus livestream overlays and scenes for Twitch streamer Panetelaa.",
  ogTitle: "E-Sports branding | Niels de Bont",
  ogDescription:
    "Branding for e-sports teams and streamers: logos, corporate identities and t-shirts, plus livestream overlays and scenes for Twitch streamer Panetelaa.",
  ogImage: "/portfolio/esports/dragonsunfold_tshirt_huisstijl.png",
  ogType: "website",
});

const facts = [
  { label: "Role", value: "Graphic designer" },
  { label: "Platform", value: "Twitch and esports venues" },
];
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <CaseIntro
      client="E-Sports"
      project="Branding for teams and streamers"
      outcome="Logos, corporate identities and t-shirts for a large number of teams, plus a livestream layout with a new face for the brand of Twitch streamer Panetelaa."
    />

    <CaseAtAGlance :facts="facts" />

    <!-- The problem -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The problem</p>
        <contentWrap>
          <PageTitle :level="3">Dragons Unfold: teams needed an identity</PageTitle>
          <p>
            In my childhood I was engaged in playing games. During the various
            LAN parties I visited, I came into contact with graphic design. I
            have designed logos, corporate identities and t-shirts for a large
            number of teams.
          </p>
        </contentWrap>
      </div>
      <figure class="case-screens case-screens-1">
        <img
          class="shadow-2xl"
          src="/portfolio/esports/dragonsunfold_tshirt_huisstijl.png"
          alt="Dragons Unfold t-shirt and brand identity"
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
            <PageTitle :level="3">Give the Panetelaa livestream a playful new layout</PageTitle>
            <p>
              The livestream is mainly about the game Fortnite and in addition,
              the streamer connects gamers with problems to a community that can
              help them with depression, anxiety and learn to deal with
              uncomfortable situations. Find it at Twitch.tv/panetelaa.
            </p>
            <p>
              At the time, I was asked to create a new layout for the livestream
              in a playful and childlike way. Unfortunately I was not allowed to
              change the logo and the various texts around it, but I did add a
              new face to this brand: “the pan man”.
            </p>
            <p>
              The design is adjusted seasonally with a day and night scene that
              I work out with Adobe Illustrator and Adobe XD.
            </p>
          </contentWrap>
        </div>
        <div class="case-screens case-screens-2">
          <figure>
            <img
              class="shadow-2xl"
              src="/portfolio/esports/panetela_offline.png"
              alt="Panetelaa livestream offline screen"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure>
            <img
              class="shadow-2xl"
              src="/portfolio/esports/panetela_livestream_webcamandchat.png"
              alt="Panetelaa livestream webcam and chat overlay"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <figure class="case-screens case-screens-1 case-screens-narrow">
          <img
            class="shadow-2xl"
            src="/portfolio/esports/panetela_brb.png"
            alt="Panetelaa be right back screen"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </article>

      <article class="case-step anim" data-duration=".5s" data-delay=".15s">
        <div class="case-step_head">
          <span class="case-step_num">02</span>
          <contentWrap>
            <PageTitle :level="3">Design logos for teams and streamers, where it all started</PageTitle>
            <p>
              Logos were where it all started. These are some of the logos and
              artwork I made for e-sports teams and streamers.
            </p>
          </contentWrap>
        </div>
        <div class="logo_display">
          <div class="content_image">
            <figure data-delay=".1s" data-duration="1s" class="figure_16-16 anim">
              <img
                src="/portfolio/esports/logos/vortex.png"
                alt="Vortex e-sports logo"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div class="content_image">
            <figure data-delay=".3s" data-duration="1s" class="figure_16-16 anim">
              <img
                src="/portfolio/esports/logos/vindico.png"
                alt="Vindico e-sports logo"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div class="content_image">
            <figure data-delay=".5s" data-duration="1s" class="figure_16-16 anim">
              <img
                src="/portfolio/esports/logos/dash.png"
                alt="Dash e-sports logo"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div class="content_image">
            <figure data-delay=".1s" data-duration="1s" class="figure_16-16 anim">
              <img
                src="/portfolio/esports/logos/harrycasteleijns.png"
                alt="Harry Casteleijns streamer logo"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div class="content_image">
            <figure data-delay=".3s" data-duration="1s" class="figure_9-16 anim">
              <img
                src="/portfolio/esports/logos/kerstpromo.png"
                alt="Christmas promo artwork"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div class="content_image">
            <figure data-delay=".5s" data-duration="1s" class="figure_16-16 anim">
              <img
                src="/portfolio/esports/logos/eclipse.png"
                alt="Eclipse e-sports logo"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </article>
    </section>

    <!-- The result -->
    <section class="case-block anim" data-duration=".5s" data-delay=".15s">
      <div class="case-block_head">
        <p class="case-label">The result</p>
        <contentWrap>
          <PageTitle :level="3">Branding that gives something back to the community</PageTitle>
          <p>
            At the moment I only do branding for major streamers and also for
            e-sports clubs and organizations that help gamers achieve their
            dreams. I do this to contribute to the community that has also
            supported me.
          </p>
          <p class="case-placeholder">
            [Placeholder: measurable outcome, for example audience growth or
            feedback from the streamers and teams]
          </p>
        </contentWrap>
      </div>
    </section>
  </SectionDetail>
</template>

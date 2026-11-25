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
</script>

<template>
  <SectionDetail :extraSpacing="true">
    <div
      id="hero"
      data-delay=".1s"
      data-duration=".5s"
      class="detail_title anim"
    >
      <PageTitle :level="1">E-Sports</PageTitle>
      <PageTitle :level="3">My hobbies</PageTitle>
    </div>
    <div class="o-wrapper">
      <div class="content_text">
        <div data-delay=".1s" data-duration=".5s" class="c-wrap anim">
          <PageTitle :level="3">Dragons Unfold</PageTitle>
          <p>
            In my childhood I was engaged in playing games. During the various
            LAN parties I visited, I came into contact with graphic design. I
            have designed logos, corporate identities and t-shirts for a large
            number of teams.
          </p>
          <p>
            At the moment I only do branding for major streamers and also for
            e-sports clubs and organizations that help gamers achieve their
            dreams. I do this to contribute to the community that has also
            supported me.
          </p>
        </div>
      </div>
      <div
        data-delay=".1s"
        data-duration=".5s"
        class="content_image vijftigprocent anim"
      >
        <figure class="figure_12-16">
          <img
            class="shadow-2xl"
            src="/portfolio/esports/dragonsunfold_tshirt_huisstijl.png"
            alt="Dragons Unfold t-shirt and brand identity"
            fetchpriority="high"
          />
        </figure>
      </div>
    </div>
    <div data-delay=".1s" data-duration=".5s" class="detail_title anim">
      <PageTitle :level="1">Panetelaa</PageTitle>
      <PageTitle :level="2">Livestream overlay and logo</PageTitle>
    </div>
    <div class="o-wrapper">
      <div data-delay=".1s" data-duration=".5s" class="content_image anim">
        <figure class="figure_9-16">
          <img
            class="shadow-2xl"
            src="/portfolio/esports/panetela_offline.png"
            alt="Panetelaa livestream offline screen"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
    <div class="o-wrapper spacer">
      <div data-delay=".1s" data-duration=".5s" class="content_text anim">
        <contentWrap>
          <PageTitle :level="3">Twitch.tv/panetelaa</PageTitle>
          <p>
            The livestream is mainly about the game Fortnite and in addition,
            the streamer connects gamers with problems to a community that can
            help them with depression, anxiety and learn to deal with
            uncomfortable situations.
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
      <div
        data-delay=".1s"
        data-duration=".5s"
        class="content_image vijftigprocent anim"
      >
        <figure class="figure_9-16">
          <img
            class="shadow-2xl"
            src="/portfolio/esports/panetela_livestream_webcamandchat.png"
            alt="Panetelaa livestream webcam and chat overlay"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
    <div class="o-wrapper spacer">
      <div data-delay=".1s" data-duration=".5s" class="content_image anim">
        <figure class="figure_9-16">
          <img
            class="shadow-2xl"
            src="/portfolio/esports/panetela_brb.png"
            alt="Panetelaa be right back screen"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
    <div data-delay=".1s" data-duration=".5s" class="detail_title anim">
      <PageTitle class="spacer" :level="1">Logo's</PageTitle>
      <PageTitle :level="3">Where it all started</PageTitle>
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
  </SectionDetail>
</template>

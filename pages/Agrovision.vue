<script setup>
import BackButton from "@/components/global/BackButton.vue";
import { onMounted } from "vue";
import Animations from "@/functions/Animations";
import Title from "@/components/global/Title.vue";
import Footer from "@/components/global/Footer.vue";
import BacktoTopButton from "@/components/global/BacktoTopButton.vue";
import SectionDetail from "@/components/global/SectionDetail.vue";
import Content from "@/components/global/Content.vue";
import contentWrap from "@/components/global/contentWrap.vue";
import Project from "@/components/global/Project.vue";
import detailMenu from "@/components/global/detailMenu.vue";

onMounted(() => {
  Animations();
});
</script>

<template>
  <Project>
    <detailMenu />
    <SectionDetail>
      <div
        id="hero"
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title anim"
      >
        <Title :level="1">Agrovision</Title>
        <Title :level="2">Product design</Title>
      </div>
      <div class="o-wrapper">
        <div data-duration=".5s" data-delay=".15s" class="content_text anim">
          <contentWrap>
            <Title :level="3">My Agrovision</Title>
            <p>
              During my time at Agrovision the focus was mainly on the following
              topics:
            </p>
            <ul>
              <li>
                Defining and desinging a new product to manage and navigate to
                other products
              </li>
              <li>Big datavisualisation with Agrovision Insights</li>
              <li>
                Farm management system specificly for pig farming called
                Agrovision Growers
              </li>
              <li>
                Rebranding and changing the identity of the Agrovision product
                portfolio
              </li>
            </ul>
          </contentWrap>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small sticky vijftigprocent anim"
        >
          <figure class="figure_12-16">
            <img
              class="e-shadow"
              src="/portfolio/agrovision/MAV-MyApps.png"
              alt="My agrovision apps"
            />
          </figure>
        </div>
      </div>
      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small sticky anim"
        >
          <figure class="figure_19-9">
            <img
              src="/portfolio/agrovision/permissions.png"
              alt="Voorpagina smclaren.nl"
            />
          </figure>
        </div>

        <div data-duration=".5s" data-delay=".3s" class="content_text anim">
          <contentWrap>
            <Title :level="3">
              Permissions & <br />
              Relations management
            </Title>
            <p>
              As a farmer you work together with allot of stakeholders and
              people that rely on you.
            </p>
            <p>
              With this reason we build a solution that shows the permission you
              give to a stakeholder and what demographic information relates to
              the stakeholder.
            </p>
          </contentWrap>
        </div>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title spacer anim"
      ></div>
      <div class="o-wrapper">
        <div data-duration=".5s" data-delay=".3s" class="content_text anim">
          <contentWrap>
            <Title :level="3">My settings</Title>
            <p>
              To handle all personal information we use a profile page to get
              the information we need and also share this information within the
              pages shown in permissions to a specific person.
            </p>
          </contentWrap>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_12-16">
            <img
              class="e-shadow"
              src="/portfolio/agrovision/MAV-MySettings.png"
              alt="mysettings"
            />
          </figure>
        </div>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title spacer anim"
      >
        <Title :level="1">Organisation</Title>
      </div>
      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_12-16">
            <img
              class="e-shadow"
              src="/portfolio/agrovision/MAV-ManageEmployees.png"
              alt="Diensten"
            />
          </figure>
        </div>
        <Content>
          <contentWrap>
            <Title :level="3">Organisation management</Title>
            <p>
              During the making of the product de productmanagers needed a way
              to regulate the permissions for employee's and there for need a
              screen that could manage this.
            </p>
            <p>
              This part also plays a big role in the management of the
              permissions for all applications in a general space.
            </p>
            <p>
              Within their organisation they can also choose a color that will
              be represented within the whole my.agrovision domain. This color
              is also used to provide the user branding to Agrovision Insights.
              So the company can do personalized advise with the products we
              deliver to them.
            </p>
          </contentWrap>
        </Content>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title spacer anim"
      >
        <Title :level="1">Analytics</Title>
      </div>
      <div class="o-wrapper">
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small anim"
        >
          <figure class="figure_32-9">
            <img
              src="/portfolio/agrovision/AgrovisionInsights.png"
              alt="Diensten"
            />
          </figure>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_text sticky anim"
        >
          <contentWrap>
            <Title :level="3">Pigs analytics</Title>
            <p>
              Is a layer on top of Power BI reports that provides Agrovision an
              easy way to produce allot of reports in a small amount of time.
            </p>
            <p>
              The styling and components for these reports are made in Angular
              and Figma. They are exported to json files to made in to a editor
              where the user can build their own report with just a few clicks.
            </p>
            <p>I can't show allot on this topic because of certain rules.</p>
          </contentWrap>
        </div>
      </div>
      <div
        data-duration=".5s"
        data-delay=".3s"
        class="detail_title spacer anim"
      >
        <Title :level="1">Dashboards</Title>
      </div>
      <div class="o-wrapper">
        <div data-duration=".5s" data-delay=".3s" class="content_text anim">
          <contentWrap>
            <Title :level="3">Reporting tool</Title>
            <p>
              To the right you see one of the prove of concepts made for
              dashboarding. At the end of this project we had 4 concepts and
              this was one of them. I can't show the final version due to legal
              reasons.
            </p>
          </contentWrap>
        </div>
        <div
          data-duration=".5s"
          data-delay=".3s"
          class="content_image-small vijftigprocent anim"
        >
          <figure class="figure_4-4">
            <img src="/portfolio/agrovision/dashboard.png" alt="mysettings" />
          </figure>
        </div>
      </div>
    </SectionDetail>
  </Project>
</template>

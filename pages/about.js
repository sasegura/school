import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import AboutOne from "@/components/about-one";
import CallToActionOne from "@/components/call-to-action-one";
import TeamCarousel from "@/components/team-carousel";
import VideoOne from "@/components/video-one";
import SubscribeForm from "@/components/subscribe-form";
import FeatureTabOne from "@/components/feature-tab-1";
import HeaderOne from "@/components/header-one";
// import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import CustomPageBanner from "@/components/custom-page-banner";
import imageBanner from "@/images/bg/about_banner.jpg";
import ImageGalleries from "@/components/gallery-image";

const AboutPage = () => {
  return (
    <MenuContextProvider>
        <Layout PageTitle="Conócenos">
          <HeaderOne />
          <CustomPageBanner title="" name="Conocenos" image={imageBanner} />
          <AboutOne />
          <ImageGalleries />
          <TeamCarousel />
          <SubscribeForm />
          <VideoOne />
          <FeatureTabOne />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
    </MenuContextProvider>
  );
};

export default AboutPage;

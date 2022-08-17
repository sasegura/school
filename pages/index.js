import React from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/call-to-action-one";
import Footer from "@/components/footer";
import BlogHome from "@/components/blog-home";
import ParallaxOne from "@/components/parallax-1";
import TeamCarousel from "@/components/team-carousel";
import PortfolioHome from "@/components/portfolio-home";
import SubscribeForm from "@/components/subscribe-form";
import ServiceTwo from "@/components/service-two";
import VideoTwo from "@/components/video-two";
import HeaderOne from "@/components/header-one";
// import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import SliderOne from "@/components/slider-one";
import FeatureTwo from "@/components/feature-two";
import ServiceHomeTwo from "@/components/service-home-two";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      {/*<SearchContextProvider>*/}
        <Layout PageTitle="Inicio">
          <HeaderOne />
          <SliderOne />
          <ServiceTwo />
          <FeatureTwo />

          <PortfolioHome />
          <VideoTwo />
          <SubscribeForm />
          <TeamCarousel />

          {/*<FunfactOne />*/}
          {/*<TrustedClient />*/}

          <ParallaxOne />
          {/* <BlogHome /> */}
          <ServiceHomeTwo />

          <CallToActionOne extraClassName="ready" />
          {/* <ClientCarouselOne /> */}

          <Footer />
        </Layout>
      {/*</SearchContextProvider>*/}
    </MenuContextProvider>
  );
};

export default HomeOne;

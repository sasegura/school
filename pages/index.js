import React from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/call-to-action-one";
import Footer from "@/components/footer";
import BlogHome from "@/components/blog-home";
import ParallaxOne from "@/components/parallax-1";
import ClientCarouselOne from "@/components/client-carousel-one";
import TeamCarousel from "@/components/team-carousel";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/trusted-client";
import PortfolioHome from "@/components/portfolio-home";
import SubscribeForm from "@/components/subscribe-form";
import ServiceTwo from "@/components/service-two";
import AboutTwo from "@/components/about-two";
import VideoTwo from "@/components/video-two";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import SliderOne from "@/components/slider-one";
import FeatureTwo from "@/components/feature-two";

//import FloatingWhatsApp from "react-floating-whatsapp";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Coder Crack School Inicio">
          <HeaderOne />
          <SliderOne />
          <ServiceTwo />
          <FeatureTwo/>
          <AboutTwo />
          <VideoTwo />
          <SubscribeForm />          
          <PortfolioHome />
          {/* <div style={{left:20}}><FloatingWhatsApp 
            phoneNumber="34640672424" 
            styles={{zIndex:300}} 
            accountName={"Coder Crack"} 
            statusMessage={"Responde en menos de 1 hora"}
            chatMessage={"Hola, ¿cómo puedo ayudarte?"}
            placeholder={"Escribe un mensaje"}
            allowClickAway={true}
            allowEsc={true}
            className={"whatsApp"}
            notification={true}

          /></div> */}
          <FunfactOne />
          <TrustedClient />
          <TeamCarousel />
          <ClientCarouselOne />          
          <ParallaxOne />
          <BlogHome />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;

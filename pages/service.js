import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import ServiceOne from "@/components/service-one";
import ServiceTwo from "@/components/service-two";
import ServiceThree from "@/components/service-three";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/trusted-client";
import ClientCarouselOne from "@/components/client-carousel-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import PortfolioOne from "@/components/portfolio-one";
import imageBanner from "@/images/bg/apply_banner.jpg";
import CustomPageBanner from "@/components/custom-page-banner";

const ServicePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Services Page">
          <HeaderOne />
          <CustomPageBanner title="Services" name="Services" image={imageBanner}/>
          <ServiceTwo />
          <PortfolioOne />
          {/* <ServiceOne /> */}
          
          {/* <ServiceThree /> */}
          {/* <FunfactOne /> */}
          {/* <TrustedClient extraClassName="pb_120" /> */}
          {/* <ClientCarouselOne /> */}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServicePage;

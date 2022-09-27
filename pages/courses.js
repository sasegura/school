import React from "react";
import Footer from "../components/footer";
import Layout from "../components/layout";
import ServiceTwo from "../components/service-two";
import MenuContextProvider from "../context/menu-context";
// import SearchContextProvider from "@/context/search-context";
import HeaderOne from "../components/header-one";
import PortfolioOne from "../components/portfolio-one";
import imageBanner from "../assets/images/bg/apply_banner.jpg";
import CustomPageBanner from "../components/custom-page-banner";

const ServicePage = () => {
  return (
    <MenuContextProvider>
        <Layout PageTitle="Cursos">
          <HeaderOne />
          <CustomPageBanner title="Cursos" name="Cursos" image={imageBanner}/>
          <ServiceTwo />
          <PortfolioOne />
          <Footer />
        </Layout>
    </MenuContextProvider>
  );
};

export default ServicePage;

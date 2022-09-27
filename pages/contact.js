import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
// import ContactInfos from "@/components/contact-infos";
// import GoogleMap from "@/components/google-map";
import ContactForm from "@/components/contact-form";
// import SearchContextProvider from "context/search-context";
import MenuContextProvider from "context/menu-context";
import HeaderOne from "@/components/header-one";
import imageBanner from "@/images/bg/contact_banner.jpg";
import CustomPageBanner from "@/components/custom-page-banner";

const ContactPage = () => {
  return (
    <MenuContextProvider>
      {/*<SearchContextProvider>*/}
        <Layout PageTitle="Contáctanos">
          <HeaderOne />
          <CustomPageBanner title="Contáctanos" name="Contáctanos"  image={imageBanner}/>
          <ContactForm />
          {/* <GoogleMap extraClass="contact-page" />
          <ContactInfos /> */}
          <Footer />
        </Layout>
      {/*</SearchContextProvider>*/}
    </MenuContextProvider>
  );
};

export default ContactPage;

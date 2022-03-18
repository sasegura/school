import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceDetails from "@/components/service-details";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";

const ServiceDetailsPage = ({id}) => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Service Details Page">
          <HeaderOne />
          <PageBanner title={`${id}Service Details`} name="Service" />
          <ServiceDetails />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

ServiceDetailsPage.getInitialProps = async ({ query }) => {
  const {id} = query
  return {id}
}

export default ServiceDetailsPage;

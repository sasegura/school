import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceDetails from "@/components/service-details";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import FeatureTabCourse from "@/components/feature-tab-course";
import { CoursesList } from "@/courses";
import ServiceTwo from "@/components/service-two";
import PortfolioHome from "@/components/portfolio-home";

const ServiceDetailsPage = ({id}) => {
  const courses=CoursesList?.courses
  const course=courses.find((courseItem)=>courseItem.id==id)
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle={`Curso-${course?.name}`}>
          <HeaderOne />
          <PageBanner title={`${course?.name}`} name="Curso" />
          
          <ServiceDetails data={course}/>
          <PortfolioHome />
          
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

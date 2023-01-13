import React from 'react';
import Footer from '@/components/footer';
import Layout from '@/components/layout';
import ServiceDetails from '@/components/course-details';
import CallToActionOne from '@/components/call-to-action-one';
// import SearchContextProvider from "@/context/search-context";
import HeaderOne from '@/components/header-one';
import { CoursesList } from '@/courses';
import ServiceTwo from '@/components/service-two';
import CustomPageBanner from '@/components/custom-page-banner';

const ServiceDetailsPage = ({ id }) => {
  const courses = CoursesList?.courses;
  const course = courses.find((courseItem) => courseItem.id == id);
  return (
    <Layout PageTitle={`Curso-${course?.name}`}>
      <HeaderOne />
      <CustomPageBanner
        title={`${course?.name}`}
        name="Curso"
        image={course?.bannerImg}
      />

      <ServiceDetails data={course} />

      <ServiceTwo colorWhite={true} />
      <CallToActionOne extraClassName="ready" />
      <Footer />
    </Layout>
  );
};

ServiceDetailsPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default ServiceDetailsPage;

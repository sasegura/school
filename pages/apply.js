import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import AboutOne from "@/components/about-one";
import CallToActionOne from "@/components/call-to-action-one";
import TeamCarousel from "@/components/team-carousel";
import VideoOne from "@/components/video-one";
import SubscribeForm from "@/components/subscribe-form";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";
import FeatureTabOne from "@/components/feature-tab-1";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import { CoursesList } from "@/courses";
import ApplyForm from "@/components/apply-form";
import CustomPageBanner from "@/components/custom-page-banner";
import imageBanner from "@/images/bg/apply_banner.jpg";

const ApplyPage = ({cid, eid}) => {
  const courses=CoursesList?.courses;
  const editions = CoursesList?.editions;
  const course = courses.find((courseItem) => courseItem.id == cid);
  const edition = editions.find((editionItem) => editionItem.id == eid);

  return (
    <MenuContextProvider>
    <SearchContextProvider>
      <Layout PageTitle="Aplicar">
        <HeaderOne />
        <CustomPageBanner title="Aplicar" name="Contáctanos" image={imageBanner}/>
        <ApplyForm course={course} edition={edition} courseList={courses} editionList={editions}/>
        <Footer />
      </Layout>
    </SearchContextProvider>
  </MenuContextProvider>
  );
};
ApplyPage.getInitialProps = async ({ query }) => {
  const {course, edition} = query
  return {cid: course, eid: edition}
}
export default ApplyPage;

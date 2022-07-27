import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
// import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import { CoursesList } from "@/courses";
import ApplyForm from "@/components/apply-form";
import CustomPageBanner from "@/components/custom-page-banner";
import imageBanner from "@/images/bg/apply_banner.jpg";
import {useRouter} from "next/router";

const ApplyPage = () => {
  const router = useRouter();
  const {course: cid, edition: eid} = router.query;
  const courses = CoursesList?.courses;
  const editions = CoursesList?.editions;
  const course = courses.find((courseItem) => courseItem.id == cid);
  const edition = editions.find((editionItem) => editionItem.id == eid);

  return (
    <MenuContextProvider>
    {/*<SearchContextProvider>*/}
      <Layout PageTitle="Aplicar">
        <HeaderOne />
        <CustomPageBanner title="Aplicar" name="Contáctanos" image={imageBanner}/>
        <ApplyForm course={course} edition={edition} courseList={courses} editionList={editions}/>
        <Footer />
      </Layout>
    {/*</SearchContextProvider>*/}
  </MenuContextProvider>
  );
};
export default ApplyPage;

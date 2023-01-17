import React, { Fragment, useContext, useEffect } from 'react';
import ServiceDetails from '@/components/course-details';
import CallToActionOne from '@/components/call-to-action-one';
// import SearchContextProvider from "@/context/search-context";
import { CoursesList } from '@/courses';
import Courses from 'containers/courses';
import CustomPageBanner from '@/components/custom-page-banner';
import { AppContext } from '@/context/app-context';

const ServiceDetailsPage = ({ id }) => {
  const courses = CoursesList?.courses;
  const course = courses.find((courseItem) => courseItem.id == id);
  const { setLayoutTitle } = useContext(AppContext);

  useEffect(() => {
    setLayoutTitle(`Curso-${course?.name}`);
  }, []);

  return (
    <Fragment>
      <CustomPageBanner
        title={`${course?.name}`}
        name="Curso"
        image={course?.bannerImg}
      />
      <ServiceDetails data={course} />
      <Courses colorWhite={true} />
      <CallToActionOne extraClassName="ready" />
    </Fragment>
  );
};

ServiceDetailsPage.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default ServiceDetailsPage;

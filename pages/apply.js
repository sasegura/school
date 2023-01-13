import React, { Fragment, useContext, useEffect } from 'react';
import { CoursesList } from '@/courses';
import ApplyForm from '@/components/apply-form';
import CustomPageBanner from '@/components/custom-page-banner';
import imageBanner from '@/images/bg/apply_banner.jpg';
import { useRouter } from 'next/router';
import { AppContext } from '@/context/app-context';

const ApplyPage = () => {
  const router = useRouter();
  const { course: cid, edition: eid } = router.query;
  const courses = CoursesList?.courses;
  const editions = CoursesList?.editions;
  const course = courses.find((courseItem) => courseItem.id == cid);
  const edition = editions.find((editionItem) => editionItem.id == eid);

  const { setLayoutTitle } = useContext(AppContext);

  useEffect(() => {
    setLayoutTitle('Aplicar');
  }, []);

  return (
    <Fragment>
      <CustomPageBanner
        title="Aplicar"
        name="Contáctanos"
        image={imageBanner}
      />
      <ApplyForm
        course={course}
        edition={edition}
        courseList={courses}
        editionList={editions}
      />
    </Fragment>
  );
};
export default ApplyPage;

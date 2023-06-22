import React, { Fragment, useContext, useEffect } from 'react';
import Courses from 'containers/courses';
import imageBanner from '@/images/bg/4.svg';
import CustomPageBanner from '@/components/custom-page-banner';
import { AppContext } from '@/context/app-context';
import PortfolioHome from 'containers/portfolio-home';

const ServicePage = () => {
  const { setLayoutTitle } = useContext(AppContext);

  useEffect(() => {
    setLayoutTitle('Cursos');
  }, []);

  return (
    <Fragment>
      <CustomPageBanner title="Cursos" name="Cursos" image={imageBanner} />
      <Courses />
      <PortfolioHome />
    </Fragment>
  );
};

export default ServicePage;

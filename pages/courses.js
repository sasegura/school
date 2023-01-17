import React, { Fragment, useContext, useEffect } from 'react';
import Courses from 'containers/courses';
// import SearchContextProvider from "@/context/search-context";
import HeaderOne from '@/components/header-one';
import PortfolioOne from '@/components/portfolio-one';
import imageBanner from '@/images/bg/apply_banner.jpg';
import CustomPageBanner from '@/components/custom-page-banner';
import { AppContext } from '@/context/app-context';

const ServicePage = () => {
  const { setLayoutTitle } = useContext(AppContext);

  useEffect(() => {
    setLayoutTitle('Cursos');
  }, []);

  return (
    <Fragment>
      <CustomPageBanner title="Cursos" name="Cursos" image={imageBanner} />
      <Courses />
      <PortfolioOne />
    </Fragment>
  );
};

export default ServicePage;

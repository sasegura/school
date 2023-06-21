import React, { Fragment, useContext, useEffect } from 'react';
import Courses from 'containers/courses';
// import SearchContextProvider from "@/context/search-context";
import HeaderOne from '@/components/header-one';
import PortfolioOne from '@/components/portfolio-one';
import imageBanner from '@/images/bg/apply_banner.svg';
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
      {/* <div className='timeline'>
          <iframe loading="lazy" className='timeLineIframe'
            src="https://www.canva.com/design/DAFj0JomYw4/view?embed" >
          </iframe>
        </div>   */}
        <PortfolioHome />
        
    </Fragment>
  );
};

export default ServicePage;

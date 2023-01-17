import React, { Fragment, useContext, useEffect } from 'react';

import CallToActionOne from '@/components/call-to-action-one';
import ParallaxOne from '@/components/parallax-1';
import TeamCarousel from 'containers/team-carousel';
import PortfolioHome from 'containers/portfolio-home';
import SubscribeForm from '@/components/subscribe-form';
import Courses from 'containers/courses';
import AboutUsIndex from 'containers/about-us-index';
import SliderOne from '@/components/slider-one';
import WhyUs from 'containers/why-us';
import JobOffers from '@/components/job-offers';
import { AppContext } from '@/context/app-context';

const HomeOne = () => {
  const { setLayoutTitle } = useContext(AppContext);

  useEffect(() => {
    setLayoutTitle('Inicio');
  }, []);

  return (
    <Fragment>
      <SliderOne />
      <Courses />
      <WhyUs />
      <PortfolioHome />
      <AboutUsIndex />
      <SubscribeForm />
      <TeamCarousel />
      <ParallaxOne />
      <JobOffers />
      <CallToActionOne extraClassName="ready" />
    </Fragment>
  );
};

export default HomeOne;

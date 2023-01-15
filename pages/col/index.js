import React, { Fragment, useContext, useEffect } from 'react';

import CallToActionOne from '@/components/call-to-action-one';
import ParallaxOne from '@/components/parallax-1';
import TeamCarousel from '@/components/team-carousel';
import PortfolioHome from '@/components/portfolio-home';
import SubscribeForm from '@/components/subscribe-form';
import ServiceTwo from '@/components/service-two';
import VideoTwo from '@/components/video-two';
import SliderOne from '@/components/slider-one';
import FeatureTwo from '@/components/feature-two';
import ServiceHomeTwo from '@/components/service-home-two';
import { AppContext } from '@/context/app-context';

const HomeOne = () => {
  const { setLayoutTitle } = useContext(AppContext);

  useEffect(() => {
    setLayoutTitle('Inicio');
  }, []);

  return (
    <Fragment>
      <SliderOne />
      <ServiceTwo />
      <FeatureTwo />
      <PortfolioHome />
      <VideoTwo />
      <SubscribeForm />
      <TeamCarousel />
      <ParallaxOne />
      <ServiceHomeTwo />
      <CallToActionOne extraClassName="ready" />
    </Fragment>
  );
};

export default HomeOne;

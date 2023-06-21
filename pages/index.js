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
import Comments from '@/components/comments';
import RelatedPortfolio from '@/components/related-portfolio';
import PortfolioOne from '@/components/portfolio-one';
import CommentCard from '@/components/comment-card';
import Steps from '@/components/steps';

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
      <CallToActionOne extraClassName="ready" />
      <AboutUsIndex />
      <Steps />
      <SubscribeForm />
      <TeamCarousel />
      <ParallaxOne />
      <JobOffers />

    </Fragment>
  );
};

export default HomeOne;

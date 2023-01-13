import React from 'react';
import Layout from '@/components/layout';
import CallToActionOne from '@/components/call-to-action-one';
import Footer from '@/components/footer';
import ParallaxOne from '@/components/parallax-1';
import TeamCarousel from '@/components/team-carousel';
import PortfolioHome from '@/components/portfolio-home';
import SubscribeForm from '@/components/subscribe-form';
import ServiceTwo from '@/components/service-two';
import VideoTwo from '@/components/video-two';
import HeaderOne from '@/components/header-one';
import SliderOne from '@/components/slider-one';
import FeatureTwo from '@/components/feature-two';
import ServiceHomeTwo from '@/components/service-home-two';

const HomeOne = () => {
  return (
    <Layout PageTitle="Inicio">
      <HeaderOne />
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
      <Footer />
    </Layout>
  );
};

export default HomeOne;

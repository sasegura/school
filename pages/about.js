import React, { Fragment, useContext, useEffect } from 'react';
import AboutOne from '@/components/about-one';
import CallToActionOne from '@/components/call-to-action-one';
import TeamCarousel from '@/components/team-carousel';
import VideoOne from '@/components/video-one';
import SubscribeForm from '@/components/subscribe-form';
import FeatureTabOne from '@/components/feature-tab-1';
// import SearchContextProvider from "@/context/search-context";
import CustomPageBanner from '@/components/custom-page-banner';
import imageBanner from '@/images/bg/about_banner.jpg';
import ImageGalleries from '@/components/gallery-image';
import { AppContext } from '@/context/app-context';

const AboutPage = () => {
  const { setLayoutTitle } = useContext(AppContext);

  useEffect(() => {
    setLayoutTitle('Conócenos');
  }, []);

  return (
    <Fragment>
      <CustomPageBanner title="" name="Conocenos" image={imageBanner} />
      <AboutOne />
      <ImageGalleries />
      <TeamCarousel />
      <SubscribeForm />
      <VideoOne />
      <FeatureTabOne />
      <CallToActionOne extraClassName="ready" />
    </Fragment>
  );
};

export default AboutPage;

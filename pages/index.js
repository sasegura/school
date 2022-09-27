import React, { useRef } from "react";
// import dynamic from 'next/dynamic'
// import { Suspense } from 'react'
// import Layout from "../components/layout";
import CallToActionOne from "../components/call-to-action-one";
import Footer from "../components/footer";
import ParallaxOne from "../components/parallax-1";
import TeamCarousel from "../components/team-carousel";
import PortfolioHome from "../components/portfolio-home";
import SubscribeForm from "../components/subscribe-form";
import ServiceTwo from "../components/service-two";
import VideoTwo from "../components/video-two";
import HeaderOne from "../components/header-one";
// const TeamCarousel = dynamic(() => import("../components/team-carousel"), {
//   suspense: true,
// })
import MenuContextProvider from "../context/menu-context";
// const PortfolioHome = dynamic(() => import("../components/portfolio-home"), {
//   suspense: true,
// })
import SliderOne from "../components/slider-one";
// const CallToActionOne = dynamic(() => import("../components/call-to-action-one"), {
//   suspense: true,
// })
import FeatureTwo from "../components/feature-two";
// const ParallaxOne = dynamic(() => import("../components/parallax-1"), {
//   suspense: true,
// })
// const ServiceHomeTwo = dynamic(() => import("../components/service-home-two"), {
//   suspense: true,
// })
import ServiceHomeTwo from "../components/service-home-two";


import { useState, useEffect } from "react";
import Layout from "../components/layout";
const useOnScreen = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        );
       if (ref.current) {
           observer.observe(ref.current);
        }
    }, [])
    return isIntersecting;
}
const Spinner=()=>(
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)

const LazyLoadComponent=({component,reference,show})=>(
  <div ref={reference}>    
    {show ? component : Spinner()}
  </div>
)

const HomeOne = () => {

  const teamCarouselRef = useRef();
  const teamCarouselRefValue = useOnScreen(teamCarouselRef);
  const [isTeamCarouselRef, setIsTeamCarouselRef] =  useState(false);
  useEffect(() => {
    if (!isTeamCarouselRef)
    setIsTeamCarouselRef(teamCarouselRefValue);
  }, [teamCarouselRef])

  const child3Ref = useRef();
  const child3RefValue = useOnScreen(child3Ref);
  const [isChild3Ref, setIsChild3Ref] =  useState(false);
  useEffect(() => {
    if (!isChild3Ref)
        setIsChild3Ref(child3RefValue);
  }, [child3RefValue])

  const serviceHomeTwoRef = useRef();
  const serviceHomeTwoRefValue = useOnScreen(serviceHomeTwoRef);
  const [isServiceHomeTwoRef, setIsServiceHomeTwoRef] =  useState(false);
  useEffect(() => {
    if (!isServiceHomeTwoRef)
    setIsServiceHomeTwoRef(serviceHomeTwoRefValue);
  }, [serviceHomeTwoRef])

  const callToActionOneRef = useRef();
  const callToActionOneRefValue = useOnScreen(callToActionOneRef);
  const [isCallToActionOneRef, setIsCallToActionOneRef] =  useState(false);
  useEffect(() => {
    if (!isCallToActionOneRef)
    setIsCallToActionOneRef(callToActionOneRefValue);
  }, [callToActionOneRef])

  const subscribeFormRef = useRef();
  const subscribeFormRefValue = useOnScreen(subscribeFormRef);
  const [isSubscribeFormRef, setIsSubscribeFormRef] =  useState(false);
  useEffect(() => {
    if (!isSubscribeFormRef)
    setIsSubscribeFormRef(subscribeFormRefValue);
  }, [subscribeFormRef])
 
  const videoTwoRef = useRef();
  const videoTwoRefValue = useOnScreen(videoTwoRef);
  const [isVideoTwoRef, setIsVideoTwoRef] =  useState(false);
  useEffect(() => {
    if (!isVideoTwoRef)
    setIsVideoTwoRef(videoTwoRefValue);
  }, [videoTwoRef])

  const portfolioHomeRef = useRef();
  const portfolioHomeRefValue = useOnScreen(portfolioHomeRef);
  const [isPortfolioHomeRef, setIsPortfolioHomeRef] =  useState(false);
  useEffect(() => {
    if (!isPortfolioHomeRef)
    setIsPortfolioHomeRef(portfolioHomeRefValue);
  }, [portfolioHomeRef])

  const featureTwoRef = useRef();
  const featureTwoRefValue = useOnScreen(featureTwoRef);
  const [isFeatureTwoRef, setIsFeatureTwoRef] =  useState(false);
  useEffect(() => {
    if (!isFeatureTwoRef)
    setIsFeatureTwoRef(featureTwoRefValue);
  }, [featureTwoRef])

  return (
      <MenuContextProvider>
          <Layout PageTitle="Inicio">
            <HeaderOne />
            <SliderOne />
            <ServiceTwo />
           
            <FeatureTwo />
            {/* <LazyLoadComponent 
              component={<FeatureTwo />} 
              reference={featureTwoRef} 
              show={featureTwoRefValue}
            /> */}

            <PortfolioHome />
            {/* <LazyLoadComponent 
              component={<PortfolioHome />} 
              reference={portfolioHomeRef} 
              show={portfolioHomeRefValue}
            /> */}
            <VideoTwo />
            {/* <LazyLoadComponent 
              component={<VideoTwo />} 
              reference={videoTwoRef} 
              show={videoTwoRefValue}
            /> */}
            <SubscribeForm />
            {/* <LazyLoadComponent 
              component={<SubscribeForm />} 
              reference={subscribeFormRef} 
              show={subscribeFormRefValue}
            /> */}
            <TeamCarousel />
            {/* <LazyLoadComponent 
              component={<TeamCarousel />} 
              reference={teamCarouselRef} 
              show={teamCarouselRefValue}
            /> */}
            <ParallaxOne />
            {/* <LazyLoadComponent component={<ParallaxOne />} reference={child3Ref} show={child3RefValue}/> */}
            <ServiceHomeTwo />
            {/* <LazyLoadComponent component={<ServiceHomeTwo />} reference={serviceHomeTwoRef} show={serviceHomeTwoRefValue}/> */}
            <CallToActionOne extraClassName="ready" />
            {/* <LazyLoadComponent component={<CallToActionOne extraClassName="ready" />} reference={callToActionOneRef} show={callToActionOneRefValue}/> */}
            
            <Footer />
          </Layout>
      </MenuContextProvider>
  );
};

export default HomeOne;

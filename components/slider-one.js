import React, {useState} from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SliderOneData } from "@/data";
SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderOne = () => {
  const [animate, setAnimate] = useState(false);
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev"
    },
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="main-slider">
      <Swiper {...mainSlideOptions} onInit={() => setTimeout(() => setAnimate(true), 250)}>
        <div className={animate ? "swiper-slide-active" : ""} style={
          {
            position: "absolute",
            top: "0px",
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <p className={"main-slider__subtext"}>{SliderOneData[0].subTitle}</p>
                <h3 className={"main-slider__title"}>{SliderOneData[0].title}</h3>
                <Link href={SliderOneData[0].button.url}>
                  <a className={"common_btn"}>
                    <span>{SliderOneData[0].button.label}</span>
                  </a>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        {SliderOneData.map(({image}, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{backgroundImage: `url(${image})`}}
            />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </section>
  );
};

export default SliderOne;

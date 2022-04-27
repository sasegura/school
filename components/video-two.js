import React, { Fragment, useEffect, useState } from "react";
import { VideoTwoData } from "@/data";
//import ModalVideo from "react-modal-video";
import SectionTitle from "@/components/section-title";
//import "react-modal-video/css/modal-video.min.css";
import { Col, Container, Row } from "react-bootstrap";
import video02 from "@/images/home_1/3.gif";
import video03 from "@/images/home_1/3aa.gif";
import Link from "next/link";

const VideoTwo = () => {
  const [isOpen, setOpen] = useState(false);
  const [video, setVideo] = useState(false);

  const { sectionContent } = VideoTwoData;

  useEffect(() => {
    let x = window.matchMedia("(max-width: 700px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction);
  }, []);

  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      setVideo(video03);
    } else {
      setVideo(video02);
    }
  }

  return (
    <Fragment>
      <section className="commonSection what_wedo pb-0 border-bottom-0">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <SectionTitle data={sectionContent} />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="videoWrap mb-0">
                <Link href="/about">
                  <a>
                    <img src={video} alt="" />
                  </a>
                </Link>
                <a href="/about" className={`common_btn imageGif`}>
                  <span>Saber más</span>
                </a>
                {/* <div className="play_video">
                  <a
                    className="video_popup"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="#"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <h2>{"asdasd"}</h2>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default VideoTwo;

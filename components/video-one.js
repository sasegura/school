import React, { Fragment, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import { VideoOneData } from "@/data";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
//import ModalVideo from "react-modal-video";
//import "react-modal-video/css/modal-video.min.css";

const VideoOne = () => {
  //const [isOpen, setOpen] = useState(false);
  const { sectionContent, carrousel } = VideoOneData;
  const images = carrousel.map((image) => ({
    original: image,
    thumbnail: image,
  }));
  const galleryRef = useRef();

  const onGalleryClick = () => {
    galleryRef.current.fullScreen();
  };
  return (
    <Fragment>
      <section className="commonSection our_work">
        {/* <div className="videoWrap_2">
          
          {/* <div className="play_video">
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
              href="#"
              className="video_popup"
            >
              <i className="fa fa-play"></i>
            </a>
            <h2>{video.title}</h2>
          </div> 
        </div> */}
        <Row>
          <Col lg={6} sm={12}>
            <ImageGallery
              showThumbnails={false}
              showBullets={true}
              showIndex={false}
              autoPlay={true}
              items={images}
              ref={galleryRef}
              onClick={onGalleryClick}
            />
          </Col>
          <Col lg={6} sm={12} className="ab_detail_wrap_col">
            <div className="ab_detail_wrap">
              <SectionTitle data={sectionContent} />
            </div>
          </Col>
        </Row>
      </section>
      <div></div>
    </Fragment>
  );
};

export default VideoOne;

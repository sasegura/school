import React from "react";
import { AboutOneData } from "@/data";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from 'next/image'

const AboutOne = () => {
  const { sectionContent, gallery, carrousel } = AboutOneData;

  return (
    <section className="commonSection">
      <div className="container imagenSquare">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <h2 className="sec_title title_about">{sectionContent.title}</h2>
            <h4 className="sub_title sub_title_about">
              {sectionContent.subTitle}
            </h4>

          </div>
          <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
            <div className="agency_img1">
              <Image src={gallery[0]}
                width={530}
                height={464}
                alt="Picture of the author" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-md-6 col-xs-6">
            <div className="agency_img2">
              <Image src={gallery[1]}
                width={535}
                height={310}
                alt="Picture of the author" />
            </div>
            <div className="compay_date">
              {/* <h5>{counter.title}</h5>
              <h2>{counter.number}</h2> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;

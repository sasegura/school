import React from "react";
import { AboutOneData } from "@/data";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const ImageGalleries = () => {
  const { sectionContent, carrousel } = AboutOneData;

  const images = carrousel.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <section className="commonSection image_gallery_content">
      <div className="text-center col-lg-12">
        <h2 className="sec_title white">{sectionContent.subTitleGallery}</h2>
        {/* <h4 className="sub_title color_aaa">{sectionContent.subTitle}</h4> */}
      </div>
      <ImageGallery items={images} />
    </section>
  );
};

export default ImageGalleries;

import Image from "next/image";
import React from "react";

const CustomPageBanner = ({ title, image }) => {
  return (
    <section className="customPageBanner" style={{ background: `url(${image}) no-repeat center center / cover`, position: 'relative',  minHeight: '465px',paddingTop: '224px'}}>
      <Image src={image} layout='fill' alt='asda'/><div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner_content text-center">
              
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPageBanner;

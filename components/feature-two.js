import React from "react";
import { FeatureTwoData } from "../data";
import SectionTitle from "./section-title";
import Link from "next/link";
import Image  from "next/image";
import imageLoader from "../utils/ImageLoader";

const FeatureTwo = () => {
  const { sectionContent, posts, image } = FeatureTwoData;
  const zeroPad = (num, numZeros) => {
    var n = Math.abs(num);
    var zeros = Math.max(0, numZeros - Math.floor(n).toString().length);
    var zeroString = Math.pow(10, zeros).toString().substr(1);
    if (num < 0) {
      zeroString = "-" + zeroString;
    }

    return zeroString + n;
  };
  return (
    <section className="commonSection featured">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-12 col-md-12">
            <div className="features_content">
              <SectionTitle data={sectionContent} />
              {posts.map(({ title, text }, index) => {
                return (
                  <div className="singleFeature" key={index}>
                    <div className="f_count">{zeroPad(index + 1, 2)}</div>
                    <h3>{title}</h3>
                    <p className="featureText">
                      {text}
                      <Link href={"/about?tab=" + index + "#why_us"}>
                        <a className={"read-more learnM"}>ver más</a>
                      </Link>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-7 col-sm-12 col-md-12 noPaddingRight">
            <div className="features_img">
              <Image loader={imageLoader} src={image.path} alt="" />
              <div className="img_details">
                <h4>{image.text}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTwo;

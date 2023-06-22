import React, { Fragment, useEffect, useState } from 'react';
import { VideoTwoData } from '@/data';
import SectionTitle from '@/components/section-title';
import { Col, Container, Row } from 'react-bootstrap';
import image02 from '@/images/home_1/3.svg';
import image03 from '@/images/home_1/3.svg';
import Link from 'next/link';
import Image from 'next/image';

const AboutUsIndex = () => {
  const [image, setImage] = useState(image02);

  const { sectionContent } = VideoTwoData;

  useEffect(() => {
    let x = window.matchMedia('(max-width: 700px)');
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction);
  }, []);

  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      setImage(image03);
    } else {
      setImage(image02);
    }
  }

  return (
    <Fragment>
      <section className="commonSection what_wedo border-bottom-0">
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
                    <Image width={1170} height={551} src={image} alt="" />
                  </a>
                </Link>
                <a href="/about" className={`common_btn imageGif`}>
                  <span>Saber más</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default AboutUsIndex;

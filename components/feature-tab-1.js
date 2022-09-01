import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../components/section-title";
import { FeatureTabData } from "../data";
import {useRouter} from "next/router";
import Image from "next/image";
import imageLoader from "../utils/ImageLoader";

const FeatureTabOne = () => {
  const router = useRouter();
  const {tab} = router.query;
  let tabI = parseInt(tab) || 0;
  if ( tabI < 0 || tabI > 2) tabI = 0;
  const [active, setActive] = useState(tabI);
  const { sectionContent, posts } = FeatureTabData;
  return (
    <section className="commonSection chooseUs" id="why_us">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <div id="tabs">
          <Row>
            <Col lg={12}>
              <ul className="chooseUs_title">
                {posts.map(({ title }, index) => (
                  <li
                    key={index}
                    className={`${active === index ? "active" : " "}`}
                  >
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(index);
                      }}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <div className="tab-content">
            {posts.map((post, index) => {
              return index === active ? (
                <div
                  className="tab-pane fade show active animated fadeIn"
                  id={`tes_tab_${index}`}
                  key={index}
                >
                  <Row
                    className={`${
                      0 === index % 2 ? " " : "flex-lg-row-reverse"
                    }`}
                  >
                    <Col lg={7}>
                      <div className="wh_choose">
                        <p>{post.content}</p>
                        <ul>
                          {post.lists.map(({ item }, index) => (
                            <li key={index}>
                              <i className="fa fa-check-square"></i> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                    <Col lg={5}>
                      <div className="chose_img">
                        <Image loader={imageLoader} src={post.image} alt={`chose_img-${index}`} />
                      </div>
                    </Col>
                  </Row>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeatureTabOne;

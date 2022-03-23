import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import { FeatureTabData } from "@/data";
import { CoursesList } from "@/courses";

const FeatureTabCourse = ({course}) => {
  const {tabs}=CoursesList
  const [active, setActive] = useState(1);
  const { sectionContent, posts } = FeatureTabData;
  return (
    <section className="commonSection chooseUs">
      <Container>
        <div id="tabs">
          <Row>
            <Col lg={12}>
              <ul className="chooseUs_title">
                {tabs.map(({ name }, index) => (
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
                      {name}
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
                        <img src={post.image} alt={`chose_img-${index}`} />
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

export default FeatureTabCourse;

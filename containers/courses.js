import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

import { ServicePostTwoData } from '@/data';
import { CoursesList } from '@/courses';

const Courses = (props) => {
  const { sectionContent, posts } = ServicePostTwoData;
  const { courses } = CoursesList;
  const { title, subTitle, text } = sectionContent;
  const { colorWhite } = props;

  return (
    <section
      className={`commonSection ${
        colorWhite ? 'courseWhiteSection' : 'service_section'
      } `}
    >
      <Container>
        {!colorWhite && (
          <Row>
            <Col lg={12} className="text-center">
              <h4 className="sub_title red_color">{subTitle}</h4>
              <h2 className="sec_title white">{title}</h2>
              <p className="sec_desc color_aaa">{text}</p>
            </Col>
          </Row>
        )}
        <Row className="custom_column">
          {courses.map(({ url, iconName, title, id } = data, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <Link href={{ pathname: url, query: { id: id } }}>
                <a className="icon_box_1 text-center">
                  <div className="flipper">
                    <div className={`front ${colorWhite && 'frontBlue'}`}>
                      <i className={iconName}></i>
                      <h3>{title}</h3>
                    </div>
                    <div className="back">
                      <i className={iconName}></i>
                      <h3>{title}</h3>
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ServicePostTwoData } from "@/data";
import ServiceCardTwo from "@/components/service-card-two";

const ServiceTwo = (props) => {
  const { sectionContent, posts } = ServicePostTwoData;
  const { title, subTitle, text } = sectionContent;
  const { colorWhite } = props;

  return (
    <section
      className={`commonSection ${
        colorWhite ? "courseWhiteSection" : "service_section"
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
          {posts.map((data, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <ServiceCardTwo data={data} colorWhite={colorWhite} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceTwo;

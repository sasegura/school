import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from '../components/section-title';
import PortfolioCard from '@/components/portfolio-card';
import { PortfolioHomeData } from '@/data';
import VisibilitySensor from 'react-visibility-sensor';
import { PortfolioData } from '@/courses';

const PortfolioHome = () => {
  const { sectionContent } = PortfolioHomeData;
  return (
    <section className="commonSection porfolio">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <Row id="Grid">
          <div className="custom">
            <Row>
              {PortfolioData.map((post, index) => (
                <VisibilitySensor
                  key={index}
                  // onChange={() => console.log(8)}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <Col lg={4} md={6} sm={12} key={index}>
                    <PortfolioCard key={index} data={post} />
                  </Col>
                </VisibilitySensor>
              ))}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioHome;

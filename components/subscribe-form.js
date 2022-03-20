import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubscribeFormData } from "@/data";

const SubscribeForm = () => {
  const { sectionContent } = SubscribeFormData;
  const [subscription, setSubscription] = useState(false)

  const onChangeSubscription = () => {
    //HAcer petición a la API de subcripción
    setSubscription(true)
  }

  return (
    <section className="commonSection subscribe">
      <Container>
        <Row>
        {subscription && <Col lg={12}>
            <h4 className="sub_title">{sectionContent.subTitleSUb}</h4>
            <h2 style={{marginLeft:20}} className="sec_title">{sectionContent.titleSub}</h2>
          </Col> }
          {!subscription && 
          <><Col lg={4}>
            <h4 className="sub_title">{sectionContent.subTitle}</h4>
            <h2 className="sec_title">{sectionContent.title}</h2>
          </Col>          
          <Col lg={8}>
            <form className="subscribefrom">
              <input type="email" placeholder="Introduce tu email" name="email" />
              <button onClick={onChangeSubscription} className="common_btn red_bg" type="submit" name="submit">
                <span>Suscríbete ahora</span>
              </button>
            </form>
          </Col></> }
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeForm;

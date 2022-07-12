import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubscribeFormData } from "@/data";
import {sendEmailSubscription} from "../connection/Api";

const SubscribeForm = () => {
  const { sectionContent } = SubscribeFormData;
  const [subscription, setSubscription] = useState(false)
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {email};

    try {
      setSubscription(true);
      const response = await sendEmailSubscription({ payload: data });
      // if (200 <= response.status < 300) {
      //   console.log(data);
      // }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <section className="commonSection subscribe">
      <Container>
        <Row>
        {subscription && <Col lg={12}>
            <h4 className="sub_title">{sectionContent.subTitleSUb}</h4>
          <h2 style={{marginLeft: 20}} className="sec_title">
            {sectionContent.titleSub}
            <span style={{width: "25px", display: "inline-block"}}/>
            <i className="fa fa-refresh"
               style={{fontSize: "1.5rem", cursor: "pointer"}}
               onClick={() => setSubscription(false)}
            />
            </h2>


          </Col> }
          {!subscription && 
          <><Col lg={4}>
            <h4 className="sub_title">{sectionContent.subTitle}</h4>
            <h2 className="sec_title">{sectionContent.title}</h2>
          </Col>          
          <Col lg={8}>
            <form className="subscribefrom">
              <input type="email" placeholder="Introduce tu email" name="email"
                     onChange={(e)=>{setEmail(e.currentTarget.value);}}
              />
              <button onClick={onSubmit} className="common_btn red_bg" type="submit" name="submit">
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

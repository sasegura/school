import React from "react";
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const WhatsappLink = () => {
  
  return (
    <WhatsAppWidget phoneNumber='34652415109' />    
    // <section className="commonSection funfact">
    //   <Container>
    //     <Row>
    //       {FunfactData.map(({ title, countNumber }, index) => (
    //         <Col lg={3} md={6} sm={12} key={index}>
    //           <div className="singlefunfact text-center">
    //             <h1 className="timer">
    //               <span className="countSpan"></span>
    //               <VisibilitySensor
    //                 onChange={onVisibilityChange}
    //                 offset={{ top: 10 }}
    //                 delayedCall
    //               >
    //                 <CountUp end={counter.startCounter ? countNumber : 0} />
    //               </VisibilitySensor>
    //             </h1>
    //             <h3>{title}</h3>
    //           </div>
    //         </Col>
    //       ))}
    //     </Row>
    //   </Container>
    // </section>
  );
};

export default WhatsappLink;

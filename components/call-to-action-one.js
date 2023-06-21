import React from "react";
import FormularioCRM from "./formularioCRM";

const CallToActionOne = ({ extraClassName }) => {
  return (
    <section className={`${extraClassName}`}>
      <div className="container">
        <div className="text-center col-lg-12">
          <h4 className="sub_title"></h4>
          <h2 className="sec_title">Pongamos en marcha tu destino! Escríbenos!</h2>
          <p className="sec_desc">Ponte en contacto con nosotros, da el primer paso para iniciar en este nuevo mundo</p>
        </div>
        <FormularioCRM />

      </div>
    </section>
  );
};

export default CallToActionOne;

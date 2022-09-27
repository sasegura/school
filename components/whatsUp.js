import { coderCrackInfo } from "../data/information";
import React, { Fragment } from "react";

const WhatsUp = () => {
  return (
    <Fragment>
      <a
        href={`https://api.whatsapp.com/send?phone=+34${coderCrackInfo.phone}&text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20Coder%20Crack`}
        className="botonWhatsUp"
        target={"_blank"}
        rel='noreferrer'
      ><div className="botonWhatsUpBack"></div></a>
      {/*<div className="botonWhatsUpBack"></div>*/}
    </Fragment>
  );
};

export default WhatsUp;

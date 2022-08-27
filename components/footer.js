import React from "react";
import { LogoImage } from "@/data";
import { coderCrackInfo } from "@/information";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-5 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
                Bienvenidos a nuestra escuela de desarrollo de aplicaciones web.
                Podrás desarrollarte en un mundo lleno de nuevas oportunidades.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 col-7">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">Contáctanos</h3>
              <p>
                Avenida de la ALbufera 321, Vallecas
                <br />
                Madrid, España
              </p>
              <p>+34 {coderCrackInfo.phoneLabel}</p>
              <p> codercrackschool@gmail.com </p>
            </aside>
          </div>          
        </div>        
      </div>
    </footer>
  );
};

export default Footer;

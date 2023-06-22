import React from 'react';
import { LogoImage } from '@/data';
import { coderCrackInfo } from '@/information';
import Image from 'next/image';

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-5 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <Image width={281} height={84} src={light} alt="" />
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
                Avenida de la Albufera 321, Vallecas
                <br />
                Madrid, España
              </p>
              <p>+34 {coderCrackInfo.phoneLabel}</p>
              <p> {coderCrackInfo.email} </p>
            </aside>
          </div>
          <div className="col-lg-2 col-sm-2">
            <div className="popUp_social">
              <ul>
                <li>
                  <a target="_blank" href={coderCrackInfo.twitter}>
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a target="_blank" href={coderCrackInfo.facebook}>
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                {/* <li>
                    <a href="#">
                      <i className="fa fa-youtube-play"></i>Youtube
                    </a>
                  </li> */}
                <li>
                  <a
                    target="_blank"
                    href={coderCrackInfo.instagram}
                  >
                    <i className="fa fa-instagram"></i>Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

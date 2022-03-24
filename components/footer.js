import React from "react";
import { LogoImage } from "@/data";

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
                {/* Welcome to our web design agency. Lorem ipsum is simply free
                text dolor sit amet consectetur adipisicing elit. Tempore
                corrupti temporibus fuga earum asperiores, alias excepturi sit
                mpedit fugit laudantium. */}
                Bienvenidos a nuestra escuela de desarrollo de aplicaciones web.
                Podrás desarrollarte en un mundo lleno de nuevas oportunidades.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4 col-7">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">Contáctanos</h3>
              <p>
                Avenida de la ALbufera, Vallecas
                <br />
                Madrid, España
              </p>
              <p>+34 652 415 109</p>
              <p>
                <a href="#">codercrack@gmail.com</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-3 col-md-3 col-4">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              <a href="#">Layerdrops.com</a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect, useContext } from "react";
import { LogoImage, NavLinks } from "../data";
import { Col, Container, Row } from "react-bootstrap";
import { MenuContext } from "../context/menu-context";
import Link from "next/link";
import Image  from "next/image";
import imageLoader from "../utils/ImageLoader";

const HeaderOne = () => {
  const [sticky, setSticky] = useState(false);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header
      className={`header_01 ${
        true === sticky ? "fixedHeader animated flipInX" : null
      }`}
      id="header"
    >
      <Container fluid>
        <Row className="justify-content-between">
          <Col className="col-6" lg={2} md={3} sm={3}>
            <div className="logo">
              <Link href="/">
                <a>
                  <Image loader={imageLoader} src={LogoImage.light} alt="" />
                </a>
              </Link>
            </div>
          </Col>
          <Col lg={8} sm={8} md={7} className="d-none d-lg-block ">
            <nav className="mainmenu text-center">
              <ul>
                {NavLinks.map((links, index) => {
                  return (
                    <li
                      key={index}
                      className={`${
                        undefined !== links.subItems
                          ? "menu-item-has-children"
                          : ""
                      }`}
                    >
                      <Link href={links.url}>
                        <a>{links.name}</a>
                      </Link>
                      {undefined !== links.subItems ? (
                        <ul className="sub-menu">
                          {links.subItems.map((subLinks, index) => (
                            <li key={index}>
                              <Link
                                href={{
                                  pathname: subLinks.url,
                                  query: { id: subLinks.id },
                                }}
                              >
                                <a>{subLinks.name}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Col>
          <Col lg={2} md={2} sm={4} className="col-6 d-lg-none">
            <div className="navigator text-right">
              <a
                id="open-overlay-nav"
                className="menu hamburger"
                onClick={handleMenuClick}
                href="#"
              >
                <i className="mei-menu"/>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderOne;

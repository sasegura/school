import React, { Fragment, useContext, useState, useEffect } from "react";
import Head from "next/head";
import { SearchContext } from "@/context/search-context";
import { MenuContext } from "@/context/menu-context";
import SearchPopup from "@/components/search-popup";
import PopupMenu from "@/components/popup-menu";
import { Link as ScrollLink } from "react-scroll";
import WhatsUp from "./whatsUp";
// import LogoFb from "@/images/LogoFb.jpg";

const Layout = ({ PageTitle, children }) => {
  const { searchStatus } = useContext(SearchContext);
  const { menuStatus } = useContext(MenuContext);
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  const getUrl = () => {
    return window.location.href;
  }

  return (
    <Fragment>
      <Head>
        <title>{PageTitle} - Coder Crack </title>
        <meta name="description" content="escuela europea de programación web"/>
        <meta property="og:title" content="Coder Crack School" />
        <meta property="og:url" content={getUrl()} />
        <meta property="og:description" content="escuela europea de programación web" />
        <meta property="og:image" content={"/_next/static/images/LogoFb.jpg"} />
      </Head>
      <div id="wrapper">{children}</div>
      <WhatsUp />
      {true === searchStatus ? <SearchPopup /> : null}
      {true === menuStatus ? <PopupMenu /> : null}

      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top showit"
        >
          <i className="fa fa-angle-double-up"></i>
        </ScrollLink>
      ) : null}
    </Fragment>
  );
};

export default Layout;

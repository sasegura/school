import React from "react";
import Link from "next/link";

const ServiceCardOne = ({ data }) => {
  const { title, text, iconName, url1, url2, url3 } = data;
  return (
    <div className="icon_box_2 text-center">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="iconWrap">
        <i className={iconName}></i>
      </div>
      
      <Link href={url1}>
        <a>Linkedin</a>
      </Link>
      <Link href={url2}>
        <a>Tecnoempleo</a>
      </Link>
      <Link href={url3}>
        <a>Indeed</a>
      </Link>
    </div>
  );
};

export default ServiceCardOne;

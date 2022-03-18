import React from "react";
import Link from "next/link";

const ServiceCardTwo = ({ data }) => {
  const { url, iconName, title, id } = data;
  return (
    <Link href={{pathname: url, query: { id: id }}}>
      <a className="icon_box_1 text-center">
        <div className="flipper">
          <div className="front">
            <i className={iconName}></i>
            <h3>{title}</h3>
          </div>
          <div className="back">
            <i className={iconName}></i>
            <h3>{title}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
};



export default ServiceCardTwo;

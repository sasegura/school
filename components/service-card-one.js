import React, {useRef} from "react";
import Link from "next/link";

const ServiceCardOne = ({data}) => {
  const {title, text, iconName, url1, url2, url3} = data;
  const linkRef = useRef();
  return <>
    <a href={url1} target={"_blank"} hidden ref={linkRef}/>
    <div className="icon_box_2 text-center" onClick={
      () => {
        linkRef.current.click();
      }
    }>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="iconWrap">
        <i className={iconName}></i>
      </div>

      <Link href={url1}>
        <a target="_blank">Linkedin</a>
      </Link>
      <Link href={url2}>
        <a target="_blank">Tecnoempleo</a>
      </Link>
      <Link href={url3}>
        <a target="_blank">Indeed</a>
      </Link>
    </div>
  </>;
};

export default ServiceCardOne;

import React from "react";
import Link from "next/link";

const PortfolioCard = ({ data }) => {
  const { image, title, categories, url } = data;

  return (
    <Link href={`${url}`}>
      <div className={`singlefolio`} >
        <img src={image} alt={title} />
        <div className="folioHover">
          <p className="cate" href="#">
            {categories?.map((cat) => cat + "")}
          </p>
          <h4>
            <a>{title}</a>
          </h4>
        </div>


      </div>
    </Link>
  );
};




export default PortfolioCard;

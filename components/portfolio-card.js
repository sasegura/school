import React from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioCard = ({ data }) => {
  const { image, title, categories, url, id, edition } = data;

  return (
    <div className={`singlefolio`}>
      <Image src={image} alt={title} />
      <div className="folioHover">
        <p className="cate" href="#">
          {categories.map((cat) => cat + "")}
        </p>
        <h4>
          <Link href={`${url}?course=${id}&edition=${edition}`}>
            <a>{title}</a>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default PortfolioCard;

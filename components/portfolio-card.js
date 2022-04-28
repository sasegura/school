import React from "react";
const PortfolioCard = ({ data }) => {
  const { image, title, categories, url, id } = data;

  return (
    <div className={`singlefolio`}>
      <img src={image} alt={title} />
      <div className="folioHover">
        <p className="cate" href="#">
          {categories.map((cat) => cat + "")}
        </p>
        <h4>
          <a href={`${url}?id=${id}`}>{title}</a>
        </h4>
      </div>
    </div>
  );
};

export default PortfolioCard;

import React from "react";
const PortfolioCard = ({ data }) => {
  const { image, title, categories, url, id, edition } = data;

  return (
    <div className={`singlefolio`}>
      <img src={image} alt={title} />
      <div className="folioHover">
        <p className="cate" href="#">
          {categories.map((cat) => cat + "")}
        </p>
        <h4>
          <a href={`${url}?course=${id}&edition=${edition}`}>{title}</a>
        </h4>
      </div>
    </div>
  );
};

export default PortfolioCard;

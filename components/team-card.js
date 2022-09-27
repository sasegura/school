import React from "react";
import Image  from "next/image";

const TeamCard = ({ data }) => {
  const { image, name, designation, url, socials } = data;
  return (
    <div className="singleTM">
      <div className="tm_img">
        <Image src={image} alt={name} />
        {/* <div className="tm_overlay">
          <div className="team_social">
            {socials.map(({ name, url }, index) => (
              <a key={index} href={url} target="_blank">
                <span>{name}</span>
              </a>
            ))}
          </div>
          {/* <a href={url} target="_blank" className="common_btn">
            <span>learn more</span>
          </a> 
        </div> */}
      </div>
      <div className="detail_TM">
        <h5>{name}</h5>
        <h6>{designation}</h6>
      </div>
    </div>
  );
};

export default TeamCard;

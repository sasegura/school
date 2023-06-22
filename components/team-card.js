import React from 'react';
import Image from 'next/image';


const TeamCard = ({ data }) => {
  const { image, name, designation, url, socials } = data;
  return (
    <div className="singleTM">
      <div className="tm_img">
        <Image width={350} height={414} src={image} alt={name} />
      </div>
      <div className="detail_TM">
        <h5>{name}</h5>
        <h6>{designation}</h6>
      </div>
    </div>
  );
};

export default TeamCard;

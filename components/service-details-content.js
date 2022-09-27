// import Image from "next/image";
import React from "react";
import serviceS1 from "../assets/images/s1.jpg";
import serviceS2 from "../assets/images/s2.jpg";
import Image from "../utils/ImageLoader";
import FeatureTabCourse from "./feature-tab-course";

const ServiceDetailsContent = ({data}) => {
  return (
    <div className="serviceArea">
      
      <p>
        {data?.description}
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <Image src={data?.image} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h4>Requisitos de acceso y material necesario.</h4>
          <ul>
            {data?.requirements?.map((requirement,index)=>(
              <li key={index}>
                <i className="fa fa-check-square"></i>{requirement}
            </li>
            ))}
            
          </ul>
        </div>
      </div>
      {data?.secondDescription?.map((description, index)=>
        <div key={index}>{description}</div>
      )}      
    </div>
  );
};

export default ServiceDetailsContent;

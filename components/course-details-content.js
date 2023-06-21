import React from "react";
import { PortfolioData } from '@/courses';
import PortfolioCard from "./portfolio-card";
import VisibilitySensor from 'react-visibility-sensor';

const ServiceDetailsContent = ({ data }) => {
  console.log(data)
  console.log(PortfolioData)
  data.url = "/apply"
  return (
    <div className="serviceArea">

      <p>
        {data?.description}
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <VisibilitySensor
            key={data?.id}
            offset={{ top: 10 }}
            delayedCall
          >

            <PortfolioCard data={data} />
          </VisibilitySensor>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h4>Requisitos de acceso y material necesario.</h4>
          <ul>
            {data?.requirements?.map((requirement, index) => (
              <li key={index}>
                <i className="fa fa-check-square"></i>{requirement}
              </li>
            ))}

          </ul>
        </div>
      </div>
      {data?.secondDescription?.map((description, index) =>
        <div key={index}>{description}</div>
      )}
    </div>
  );
};

export default ServiceDetailsContent;

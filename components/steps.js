import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceSidebar from '@/components/service-sidebar';
import ServiceDetailsContent from '@/components/course-details-content';
import Link from 'react-scroll/modules/components/Link';
import ordenador from '@/images/steps/Pasos_matricular_ordenador.svg';
import movil from '@/images/steps/Pasos_matricular_movil.svg';


const Steps = ({ data }) => {
  return (
    <section className="steps">
      <img className="ordenadorStep" src={ordenador} alt="" />
      <img className="movilStep" src={movil} alt="" />

    </section>
  );
};

export default Steps;

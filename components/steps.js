import React from 'react';
import ordenadorImage from '@/images/steps/Pasos_matricular_ordenador.svg';
import movilImage from '@/images/steps/Pasos_matricular_movil.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';


const Steps = () => {

  const [ordenador, setOrdenador] = useState(true);


  useEffect(() => {
    let x = window.matchMedia('(max-width: 900px)');
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction);
  }, []);

  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      setOrdenador(false);
    } else {
      setOrdenador(true);
    }
  }

  return (
    <section className="steps container">
      {ordenador ? <Image width={1494} height={840} className="ordenadorStep" src={ordenadorImage} alt="" /> :
        <Image width={972} height={1728} className="movilStep" src={movilImage} alt="" />}

    </section>
  );
};

export default Steps;

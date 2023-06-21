import React, { Fragment, useEffect, useState } from "react";
import { coderCrackInfo } from "@/information";
import CountUp from "react-countup";
import { useRouter } from "next/router";

const ServiceSidebar = ({ data }) => {
  const [counter, setCounter] = useState(data?.price);
  const [checkedOnePay, setCheckedOnePay] = React.useState(false);
  const [checkedFriend, setCheckedFriend] = React.useState(false);
  const [checkedPriorKnowledge, setCheckedPriorKnowledge] =
    React.useState(false);
  const [showOnePay, setShowOnePay] = useState(false);
  const [showFriend, setShowFriend] = useState(false);
  const [showPriorKnowledge, setShowPriorKnowledge] = useState(false);
  const [checkedOnline, setcheckedOnline] = useState(false);


  useEffect(() => {
    const isOnePayOption = data?.discounts?.find(
      (discount) => discount === "onePay"
    );
    const isFriendOption = data?.discounts?.find(
      (discount) => discount === "friend"
    );
    const isPriorKnowledgeOption = data?.discounts?.find(
      (discount) => discount === "priorKnowledge"
    );

    setShowOnePay(!!isOnePayOption);
    setShowFriend(!!isFriendOption);
    setShowPriorKnowledge(!!isPriorKnowledgeOption);
    // if (isOnePayOption.length > 0) {
    //   setShowOnePay(true);
    // }
    // if (isFriendOption.length > 0) {
    //   setShowFriend(true);
    // }
    // if (isPriorKnowledgeOption.length > 0) {
    //   setShowPriorKnowledge(true);
    // }
  }, []);

  useEffect(() => {
    setCounter(data?.price);
    setCheckedOnePay(false);
    setCheckedFriend(false);
    setCheckedPriorKnowledge(false);
    setcheckedOnline(false);

  }, [data?.price]);

  const percent = (condition, discount, total) => {
    let count;
    if (condition) {
      count = counter + (total * discount) / 100;
    } else {
      count = counter - (total * discount) / 100;
    }
    return count;
  };

  const onChangeOnePay = () => {
    setCounter(() => percent(checkedOnePay, 10, data?.price));
    setCheckedOnePay(!checkedOnePay);
  };

  const onChangeFriend = () => {
    setCounter(() => percent(checkedFriend, 5, data?.price));
    setCheckedFriend(!checkedFriend);
  };

  const setonChangePriorKnowledge = () => {
    setCounter(() => percent(checkedPriorKnowledge, 10, data?.price));
    setCheckedPriorKnowledge(!checkedPriorKnowledge);
  };
  
  const router = useRouter();

  async function navigate() {
    await router.push(
      {
        pathname: "/apply",
        query: { course: data?.id },
      },
      undefined,
      { scroll: true }
    );
  }

  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Calculadora de precio</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            {showOnePay && (
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={checkedOnePay}
                    onChange={onChangeOnePay}
                    className={"marging-right-10"}
                  />
                  Descuento del 10% por pago único
                </label>
              </li>
            )}
            {showFriend && (
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={checkedFriend}
                    onChange={onChangeFriend}
                    className={"marging-right-10"}
                  />
                  Descuento del 5% por traer un amigo
                </label>
              </li>
            )}
            {showPriorKnowledge && (
              <li>
                <label>
                  <input
                    type="checkbox"
                    checked={checkedPriorKnowledge}
                    onChange={setonChangePriorKnowledge}
                    className={"marging-right-10"}
                  />
                  Descuento del 10% por tener conocimientos previos en
                  desarrollo web
                </label>
              </li>
            )}
            
          </ul>
          <h1 className="timerPrice">            
            <CountUp end={counter} />€
          </h1>
          <h1 className="timerPrice1">
            Online:&nbsp;
            <CountUp end={counter*0.6} />€
          </h1>
          <p className={'centerBlock'}>
            Contamos con opciones de financiación
          </p>
          {/* <span className={'red centerBlock'}> Paga cuando encuentres trabajo, contáctanos y te contamos cómo funciona.</span> */}
          <p/>
          <button className={`width100 common_btn red_bg`} onClick={() => navigate()}>
            <span>Aplicar</span>
          </button>
          {/* <a href={`/apply?id=${data?.id}` } >
              
                <span>Aplicar</span>
                 
            </a>   */}
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>Puedes contactar con nosotros</h4>
          <p>
            Si prefieres hablar con personas antes de llenar el formulario
            puedes contactarnos y un miembro de nuestro equipo te ayudará.
          </p>
          <h2>
            <a
              style={{color:"white"}}
              href={`https://api.whatsapp.com/send?phone=+34${coderCrackInfo.phone}&text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20Coder%20Crack`}
              target={"_blank"}
            >
              {`${coderCrackInfo?.phoneCountryCode} ${coderCrackInfo?.phone}`}
            </a> 
          </h2> 
          
          <p><a
              style={{color:"#aaaaaa"}}
              href={`mailto:admision@codercrack.es`}
              target={"_blank"}
            >{`${coderCrackInfo?.email}`}</a></p>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;

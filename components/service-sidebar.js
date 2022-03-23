import React, { Fragment, useEffect, useState } from "react";
import { coderCrackInfo } from "@/information";
import CountUp from "react-countup";
import Link from "react-scroll/modules/components/Link";

const ServiceSidebar = ({data}) => {
  const [counter, setCounter] = useState(data?.price);
  const [checkedOnePay, setCheckedOnePay] = React.useState(false);
  const [checkedFriend, setCheckedFriend] = React.useState(false);
  const [checkedPriorKnowledge, setCheckedPriorKnowledge] = React.useState(false);
  const [showOnePay, setShowOnePay]=useState(false)
  const [showFriend, setShowFriend]=useState(false)
  const [showPriorKnowledge, setShowPriorKnowledge]=useState(false)

  useEffect(()=>{
    const isOnePayOption=data?.discounts?.find((discount)=>discount=='onePay')
    const isFriendOption=data?.discounts?.find((discount)=>discount=='friend')
    const isPriorKnowledgeOption=data?.discounts?.find((discount)=>discount=='priorKnowledge')

    if(isOnePayOption.length>0){
      setShowOnePay(true)
    }
    if(isFriendOption.length>0){
      setShowFriend(true)
    }
    if(isPriorKnowledgeOption.length>0){
      setShowPriorKnowledge(true)
    }
  },[])

  useEffect(()=>{
    setCounter(data?.price)
    setCheckedOnePay(false)
    setCheckedFriend(false)
    setCheckedPriorKnowledge(false)
  },[data?.price])

  const percent=(condition,discount)=>{
    let count=counter;
    if(condition){
      count=counter+(data?.price*discount/100)
    }else{
      count=counter-(data?.price*discount/100)
    }
    return count
  }

  const onChangeOnePay = () => {
    setCounter(()=>percent(checkedOnePay, 10))
    setCheckedOnePay(!checkedOnePay);
  };

  const onChangeFriend = () => {
    setCounter(()=>percent(checkedFriend,5))
    setCheckedFriend(!checkedFriend);
  };

  const setonChangePriorKnowledge = () => {
    setCounter(()=>percent(checkedPriorKnowledge,10))
    setCheckedPriorKnowledge(!checkedPriorKnowledge);
  };

  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Calculadora de precio</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            {showOnePay && 
            <li>
              <label>
                <input type="checkbox" checked={checkedOnePay} onChange={onChangeOnePay} className={'marging-right-10'} />
                Descuento del 10% por pago único
              </label>
            </li>}
            {showFriend && <li>
              <label>
                <input type="checkbox" checked={checkedFriend} onChange={onChangeFriend} className={'marging-right-10'}/>
                Descuento del 5% por traer un amigo
              </label>
            </li>}
            {showPriorKnowledge && <li>
              <label>
                <input type="checkbox" checked={checkedPriorKnowledge} onChange={setonChangePriorKnowledge} className={'marging-right-10'}/>
                Descuento del 10% por tener conocimientos previos
              </label>
            </li>}
          </ul>
          <h1 className="timer">
          Precio: <CountUp end={counter} />€</h1>

              <div className=" text-right padding10">
                  
                    <a href="/apply" className={`width100 common_btn`}>
                      <span>Aplicar</span>
                    </a>
                  
                </div>
        </div>
        
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>Puedes contactar con nosotros</h4>
          <p>
            Si prefieres hablar con personas antes de llenar el formulario puedes contactarnos y un miembro de nuestro equipo te ayudará.
          </p>
          <h2>{`${coderCrackInfo?.phoneCountryCode} ${coderCrackInfo?.phone}`}</h2>
          <p> {`${coderCrackInfo?.email}`}</p>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;

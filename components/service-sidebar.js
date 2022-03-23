import React, { Fragment, useEffect, useState } from "react";
import { coderCrackInfo } from "@/information";
import CountUp from "react-countup";

const ServiceSidebar = ({data}) => {
  const [counter, setCounter] = useState(data.price);
  const [checkedOnePay, setCheckedOnePay] = React.useState(false);
  const [checkedFriend, setCheckedFriend] = React.useState(false);
  const [showOnePay, setShowOnePay]=useState(false)
  const [showFriend, setShowFriend]=useState(false)

  useEffect(()=>{
    const isOnePayOption=data.discounts.find((discount)=>discount=='onePay')
    const isFriendOption=data.discounts.find((discount)=>discount=='friend')
    if(isOnePayOption.length>0){
      setShowOnePay(true)
    }
    if(isFriendOption.length>0){
      setShowFriend(true)
    }
  },[])

  useEffect(()=>{
    setCounter(data.price)
    setCheckedOnePay(false)
    setCheckedFriend(false)
  },[data.price])

  const percent=(condition)=>{
    let count=counter;
    if(condition){
      count=counter+(data.price*10/100)
    }else{
      count=counter-(data.price*10/100)
    }
    return count
  }

  const onChangeOnePay = () => {
    setCounter(()=>percent(checkedOnePay))
    setCheckedOnePay(!checkedOnePay);
  };

  const onChangeFriend = () => {
    setCounter(()=>percent(checkedFriend))
    setCheckedFriend(!checkedFriend);
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
                Traer un amigo, descuento del 10%
              </label>
            </li>}
            
          </ul>
          <h1 className="timer">
          Precio: <CountUp end={counter} />€</h1>
        </div>
        
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>Puedes contactar con nosotros</h4>
          <p>
            Si prefieres hablar con personas antes de llenar el formulario puedes contactarnos y un miembro de nuestro equipo te ayudará.
          </p>
          <h2>{`${coderCrackInfo.phoneCountryCode} ${coderCrackInfo.phone}`}</h2>
          <p> {`${coderCrackInfo.email}`}</p>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;

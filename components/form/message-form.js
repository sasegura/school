import React from "react";
import {sendMessage} from "../../connection/Api";


export const errorClass = (error) => {
  return (!!error ? " error": "");
}


export const MessageForm = ({formTitle, handleSubmit, reset, errors, children}) => {

  const {subTitle, title, description} = formTitle;

  const onSubmit = async data => {
    console.log(data);
    try {
      const response = await sendMessage({ payload: data });
      console.log(response);
      reset();
      if (200 <= response.status < 300)  console.log(data);
    } catch (e) {
      console.log(e.message)
    }
  };

  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <form onSubmit={handleSubmit(onSubmit)}
                  className="contactFrom"
                  id="contactForm"
            >
              <div className="row">
                {children}
                {Object.keys(errors).length !== 0 ?
                  <div className="col-lg-12 col-sm-12">
                    <p style={{color: "red"}}>
                      Por favor verifique que no existen campos vacíos o con errores.
                    </p>
                  </div> : null
                }
              </div>

              <button
                className="common_btn red_bg"
                type="submit"
                id="con_submit"
              >
                <span>Enviar mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


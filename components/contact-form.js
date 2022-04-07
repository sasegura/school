import React from "react";
import { ContactFormTitle } from "@/data";
import { useForm } from 'react-hook-form';
import { sendMessage } from "connection/Api";
const ContactForm = () => {
  const { subTitle, title, description } = ContactFormTitle;

  const { register, handleSubmit, formState: { errors } } = useForm();
  

  const onSubmit =async  data => {
    try {
      const response = await sendMessage({ payload: data });
      if (response.status === 200)  console.log(data);
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
          <form onSubmit={handleSubmit(onSubmit)}>

              <div className="row">
                <div className="col-lg-6 col-sm-6">
                <input type="text" className="input-form required" placeholder="Nombre" {...register("name", {required: true, maxLength: 80})} />
     
                </div>
                <div className="col-lg-6 col-sm-6">
                <input type="text" className="input-form required" placeholder="Apellidos" {...register("lastname", {required: true, maxLength: 100})} />

                </div>
                <div className="col-lg-6 col-sm-6">
                  <input type="text" className="input-form required" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
      
                </div>
                <div className="col-lg-6 col-sm-6">
                <input type="tel" className="input-form required" placeholder="Teléfono" {...register("phone", {required: true, minLength: 6, maxLength: 12})} />

                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                    className="input-form required"
                    {...register("message", {required: true, })}
                    placeholder="Escribe un mensaje"
                  ></textarea>
                </div>
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

export default ContactForm;

import React from "react";


const ContactFields = ({register, errorClass, errors}) => {
  return <>
    <div className="col-lg-6 col-sm-6">
      <input {...register("name", {required: true})}
             className={"input-form" + errorClass(errors.name)}
             type="text"
             id="f_name"
             placeholder="Nombre"
      />
    </div>
    <div className="col-lg-6 col-sm-6">
      <input {...register("lastname", {required: true})}
             className={"input-form" + errorClass(errors.lastname)}
             type="text"
             id="l_name"
             placeholder="Apellidos"
      />
    </div>
    <div className="col-lg-6 col-sm-6">
      <input {...register("email", {required: true})}
             className={"input-form" + errorClass(errors.email)}
             type="email"
             id="email"
             placeholder="Email"
      />
    </div>
    <div className="col-lg-6 col-sm-6">
      <input {...register("phone", {required: true})}
             className={"input-form" + errorClass(errors.phone)}
             type="text"
             id="phone"
             placeholder="Teléfono"
      />
    </div>
    <div className="col-lg-12 col-sm-12">
      <textarea {...register("message", {required: true})}
                className={"input-form" + errorClass(errors.message)}
                id="con_message"
                placeholder="Escribe un mensaje"
      />
    </div>
  </>
}

export default ContactFields;
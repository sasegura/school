import React from "react";
import { ApplyFormTitle } from "@/data";
import useApplyForm from "./useApplyForm";

const ApplyForm = ({courseList, editionList, course, edition}) => {
  
  const {selectedCourse, setSelectedCourse, selectedEdition, setSelectedEdition, handleSubmit, control,onSubmit}=useApplyForm({course, edition})

  const { subTitle, title, description } = ApplyFormTitle;
  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="white-space">{description}</p>
            
            {/*<h3 className="">Seleccione un curso</h3>*/}
            {/*<div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">*/}
            {/*  <select name="select" className="input-form">*/}
            {/*    {courses.map((cour)=><option value={cour?.id} selected={cour?.id===selectedCourse?.id?true:false}>{cour?.name}</option>)}*/}
            {/*  </select>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <form
              action="#"
              method="post"
              className="contactFrom"
              id="contactForm"
            >
              <div className="row">
                <div className="col-lg-8 col-sm-12">
                  {/*<h6 className="">Seleccione un curso</h6>*/}
                  <div className="input-form required">
                    <select name="select" className="input-form" >
                      <option value="" disabled selected> Curso </option>
                      {courseList.map((cour)=><option value={cour?.id} selected={cour?.id === selectedCourse?.id}>{cour?.name}</option>)}
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  {/*<h6 className="">Edición</h6>*/}
                  <div className="input-form required">
                    <select name="select" className="input-form">
                      <option value="" disabled selected> Edición </option>
                      {editionList.map((edit)=><option value={edit?.id} selected={edit?.id === selectedEdition?.id}>{edit?.name}</option>)}
                    </select>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="f_name"
                    id="f_name"
                    placeholder="Nombre"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="l_name"
                    id="l_name"
                    placeholder="Apellidos"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Teléfono"
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                    className="input-form required"
                    name="con_message"
                    id="con_message"
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

export default ApplyForm;

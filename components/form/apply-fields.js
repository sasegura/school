import React from "react";
import ContactFields from "@/components/form/contact-fields";


const ApplyFields = ({courseList, editionList, course, edition, register, errorClass, errors}) => {
  return <>
    <div className="col-lg-8 col-sm-12">
      <select className={"input-form" + errorClass(errors.course)}  {...register("course", {required: true})}>
        <option value="" disabled> Seleccione un Curso</option>
        {courseList.map((cour) => <option value={cour?.id}
                                          selected={cour?.id === course?.id}
                                          id={cour.name}>
          {cour?.name}
        </option>)}
      </select>
    </div>
    <div className="col-lg-4 col-sm-12">
      <select className={"input-form" + errorClass(errors.edition)} {...register("edition", {required: true})}>
        <option value="" disabled selected> Edición</option>
        {editionList.map((edit) => <option value={edit?.id}
                                           selected={edit?.id === edition?.id}
                                           id={edit.name}>
          {edit?.name}
        </option>)}
      </select>
    </div>
    <ContactFields register={register} errorClass={errorClass} errors={errors}/>
  </>
}

export default ApplyFields;
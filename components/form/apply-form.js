import React from "react";
import { ApplyFormTitle } from "@/data";
import { useForm } from "react-hook-form";
import { errorClass, MessageForm } from "@/components/form/message-form";
import ApplyFields from "@/components/form/apply-fields";
import TagManager from "react-gtm-module";
import FormularioCRM from "../formularioCRM";

const ApplyForm = ({ courseList, editionList, course, edition }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const tagManagerAction = () => {
    TagManager.dataLayer({ dataLayer: { event: "sendApplyForm" } });
  };
  return (
    <>
      {/* <MessageForm
        formTitle={ApplyFormTitle}
        handleSubmit={handleSubmit}
        errors={errors}
        reset={reset}
        tagManagerAction={tagManagerAction}
      >
         <ApplyFields
          errors={errors}
          register={register}
          errorClass={errorClass}
          courseList={courseList}
          editionList={editionList}
          course={course}
          edition={edition}
        /> 
      </MessageForm> */}



      <section className={`ready1 ready`}>
        <div className="container " m="5">
          <div className="text-center col-lg-12">
            <h4 className="sub_title"></h4>
            <h2 className="sec_title">{ApplyFormTitle.title}</h2>
            <p className="sec_desc">{ApplyFormTitle.description}</p>

          </div>
          <FormularioCRM />

        </div>
      </section>
    </>
  );
};


export default ApplyForm;

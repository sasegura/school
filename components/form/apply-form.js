import React from "react";
import { ApplyFormTitle } from "@/data";
import { useForm } from "react-hook-form";
import { errorClass, MessageForm } from "@/components/form/message-form";
import ApplyFields from "@/components/form/apply-fields";
import TagManager from "react-gtm-module";

const ApplyForm = ({ courseList, editionList, course, edition }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const tagManagerAction = () => {
    console.log("sendApplyForm");
    TagManager.dataLayer({ dataLayer: { event: "sendApplyForm" } });
  };
  return (
    <MessageForm
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
    </MessageForm>
  );
};

export default ApplyForm;

import React from "react";
import { ContactFormTitle } from "@/data";
import { useForm } from "react-hook-form";
import { errorClass, MessageForm } from "@/components/form/message-form";
import ContactFields from "@/components/form/contact-fields";
import TagManager from "react-gtm-module";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const tagManagerAction = () => {
    console.log("sendContactForm");
    TagManager.dataLayer({ dataLayer: { event: "sendContactForm" } });
  };
  return (
    <MessageForm
      formTitle={ContactFormTitle}
      handleSubmit={handleSubmit}
      errors={errors}
      reset={reset}
      tagManagerAction={tagManagerAction}
    >
      <ContactFields
        errors={errors}
        errorClass={errorClass}
        register={register}
      />
    </MessageForm>
  );
};

export default ContactForm;

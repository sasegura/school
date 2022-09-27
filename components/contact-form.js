import React from "react";
import { ContactFormTitle } from "@/data";
import { useForm } from 'react-hook-form';
import {errorClass, MessageForm} from "@/components/form/message-form";
import ContactFields from "@/components/form/contact-fields";


const ContactForm = () => {
  const {handleSubmit, register, reset, formState: {errors}} = useForm();
  return (
    <MessageForm formTitle={ContactFormTitle}
                 handleSubmit={handleSubmit}
                 errors={errors}
                 reset={reset}>
      <ContactFields errors={errors}
                     errorClass={errorClass}
                     register={register}/>
    </MessageForm>
  )
}

export default ContactForm;

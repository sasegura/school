import React, { Fragment, useContext, useEffect } from 'react';
import ContactForm from '@/components/contact-form';
import imageBanner from '@/images/bg/contact_banner.jpg';
import CustomPageBanner from '@/components/custom-page-banner';
import { AppContext } from '@/context/app-context';

const ContactPage = () => {
  const { setLayoutTitle } = useContext(AppContext);

  useEffect(() => {
    setLayoutTitle('Contáctanos');
  }, []);

  return (
    <Fragment>
      <CustomPageBanner
        title="Contáctanos"
        name="Contáctanos"
        image={imageBanner}
      />
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;

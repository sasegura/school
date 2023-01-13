import React from 'react';
import Footer from '@/components/footer';
import Layout from '@/components/layout';
import ContactForm from '@/components/contact-form';
import HeaderOne from '@/components/header-one';
import imageBanner from '@/images/bg/contact_banner.jpg';
import CustomPageBanner from '@/components/custom-page-banner';

const ContactPage = () => {
  return (
    <Layout PageTitle="Contáctanos">
      <HeaderOne />
      <CustomPageBanner
        title="Contáctanos"
        name="Contáctanos"
        image={imageBanner}
      />
      <ContactForm />
      <Footer />
    </Layout>
  );
};

export default ContactPage;

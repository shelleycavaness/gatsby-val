import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
// import Brands from '@sections/Brands';
// import Tea from '@sections/Tea';
 import Contact from '@sections/Contact';

import Expertises from '@sections/Expertises';
import English from '@sections/English'
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Faq />
    <Expertises />
  
    <Contact />
    <English />
    <Footer />
  </Layout>
);

export default IndexPage;

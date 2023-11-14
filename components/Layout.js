
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import ContactWhasapp from './ContacWhatsapp'

const Layout = ({ children, title = 'RedRaices', description = 'Agencia de marketing' }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/astro.favicon.ico" />
      </Head>
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
      <ContactWhasapp/>
    </div>
  );
};

export default Layout;



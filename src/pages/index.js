import React from "react";
import Galeria from "../../components/Galeria";
import CardPresentacion from "../../components/CardPresentacion";
import Layout from "../../components/Layout";
import FloatingShape from "../../components/FloatingShape";


const index = () => {
  return (
    <Layout>
    <section className=" min-h-screen">
      <div className="h-screen">
      <FloatingShape/>
      </div>
      <Galeria/>
    </section>
    </Layout>
  );
};

export default index;

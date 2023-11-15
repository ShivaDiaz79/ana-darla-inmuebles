import React from "react";
import Galeria from "../../components/Galeria";
import Layout from "../../components/Layout";
import FloatingShape from "../../components/FloatingShape/Index"

const Index = () => {
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

export default Index;

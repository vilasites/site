import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Sobre nós
          </h2>
          <p className="pb-5">
           Criamos para você um site completo e profissional para alavancar o seu negócio através da internet!
          </p>
          <p className="pb-5">
           Nossas criações são únicas e personalizadas, com foco no seu modelo e objetivo de negócio.
          </p>
          <p>
           Criamos sites institucionais, sites corporativos, sites para catálogo de produtos, sites OnePage (sites de uma página), sites para portais de conteúdo e notícias, criação de Landing Pages (LP’s) e sites personalizados para atender a demanda do cliente.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

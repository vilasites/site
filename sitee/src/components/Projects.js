import React from "react";
import celulares from "../assets/Ecommerce.PNG"
import pokemon from "../assets/Pokemon.PNG"
import astrodev from "../assets/Astrodev.png"

const Projects = () => {

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projetos
          </h2>

          <p className="pb-5">
            Aqui mostramos alguns projetos feitos por nós.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects">
            <div className="relative" >
              <img src={celulares} alt="celulares" />
            </div>
            <div className="relative" >
            <img src={pokemon} alt="pokemon" />
            </div>
            <div className="relative" >
            <img src={astrodev} alt="dragonBall" />
            </div>
      </div>
    </section>
  );
};

export default Projects;

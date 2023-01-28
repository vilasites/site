import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Ajudando empresas a conquistarem seu espaço na internet.
          </h1>

          <p className="py-5">
            Crie algo que as pessoas queiram compartilhar.
          </p>

          <div className="flex py-5 ">
            <a
              href="https://www.instagram.com/vilasites/"
              className="pr-4 inline-block text-accent hover:text-white"
              target={"_blank"}
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
            <a
              href="https://wa.me/5577991223833"
              className="pr-4 inline-block text-accent hover:text-white"
              target={"_blank"}
            >
              {" "}
              <AiOutlineWhatsApp size={40} />{" "}
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

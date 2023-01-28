import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header id="header" className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Vila Sites
      </a>

      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">Sobre</a>
          </li>
          <li>
            <a href="/#projects">Projetos</a>
          </li>
          <li>
            <a href="/#contact">Contato</a>
          </li>
        </ul>
      </nav>

      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul id="nav-mobile" className="flex flex-col">
          <li>
            <a href="/#about" onClick={handleToggle}>Sobre</a>
          </li>
          <li>
            <a href="/#projects" onClick={handleToggle}>Projetos</a>
          </li>
          <li>
            <a href="/#contact" onClick={handleToggle}>Contato</a>
          </li>
        </ul>
      </nav>

      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;

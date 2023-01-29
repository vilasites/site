import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contatos
        </h2>
        <p>
          Entre em contato conosco caso queira tirar dúvidas ou fazer um orçamento.
        </p>
        <p className="py-2">
          <span className="font-bold">Email:</span> vilasites1@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Telefone:</span> (77) 991223833
        </p>
      </div>
    </section>
  );
};

export default Contact;

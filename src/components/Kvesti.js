import React from "react";

const Kvesti = () => {
  return (
    <section
      id="about"
      className="w-screen h-screen flex items-center bg-black"
    >
      <div
        className="w-1/2 h-full bg-cover bg-no-repeat bg-left"
        style={{
          backgroundImage: "url('/assets/itemsall.png')", // Replace with your image path
        }}
      ></div>
      <div className="w-1/2 text-center text-white font-bold p-4">
        <div className="flex flex-col items-center justify-center h-full">
          <h1
            className="text-5xl font-bold mb-4 text-shadow-teal"
            style={{
              fontFamily: "Roboto, sans-serif",
            }}
          >
            TAVS LĒCIENS KVESTU PASAULĒ
          </h1>
          <p
            className="text-lg text-teal-200 mb-4"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Šosezon mums ir jau 5 aizraujošas Misijas
          </p>
          <button className="glowing-btn">
            <span className="glowing-txt">
              REZ<span className="faulty-letter">E</span>RVĀCIJA
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Kvesti;

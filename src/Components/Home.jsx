import React from "react";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll w-full">
      <SectionModel
        urlImg="bg-modelY"
        model="Model Y"
        subcopy="En savoir plus sur Tesla for Business"
        btnPrimary="Configuration personnalisé"
        btnSecondary="Essais"
        disclamer="5 étoiles au crash-test Euro NCAP"
      ></SectionModel>
      <SectionModel
        urlImg="bg-model3"
        model="Model 3"
        subcopy="Réservez votre essai"
        btnPrimary="Configuration personnalisée"
        btnSecondary="Découvrir nos véhicules disponibles"
        disclamer="A reçu la note maximale de 5 étoiles par Euro NCAP"
      ></SectionModel>
      <SectionModel
        urlImg="bg-modelX"
        model="Model X"
        // subcopy="En savoir plus sur Tesla for Business"
        btnPrimary="Configuration personnalisé"
        btnSecondary="En savoir plus"
        // disclamer="5 étoiles au crash-test Euro NCAP"
      ></SectionModel>
      <SectionModel
        urlImg="bg-powerwalls"
        model="Systèmes d'énergie solaire et Powerwalls"
        subcopy="De l’énergie pour tous vos besoins"
        btnPrimary="En savoir plus"
      ></SectionModel>
      <SectionModel
        urlImg="bg-accessoires"
        model="Accessoires"
        btnPrimary="Commander maintenant"
      ></SectionModel>
      <Footer />
    </div>
  );
};

export default Home;

const SectionModel = ({
  urlImg,
  model,
  subcopy,
  btnPrimary,
  btnSecondary,
  disclamer,
}) => {
  return (
    <section
      className={`${urlImg} snap-start h-[100vh]   bg-center bg-cover flex flex-col`}
    >
      <h1 className="text-4xl text-center text-[#171a20] font-bold mt-[calc(14vh+24px)] md:text-5xl ">
        {model}
      </h1>
      <p className="text-center py-3">
        <a
          href="/"
          className="border-b-[1px] border-[#171a20] text-[#171a20] hover:border-b-[2px] transition-all "
        >
          {subcopy}
        </a>
      </p>
      <div className="flex flex-col w-full flex-grow flex-shrink justify-end px-6 py-8 flex-nowrap">
        <div className="flex flex-col justify-center gap-4 mb-2 md:flex-row">
          <a
            href="/"
            className="bg-[#171a20cc] text-white backdrop-blur min-w-[calc(8px*33)] text-center py-2 px-6 rounded font-bold "
          >
            {btnPrimary}
          </a>

          {btnSecondary ? (
            <a
              href="/"
              className="bg-white text-[#171a20cc] backdrop-blur min-w-[calc(8px*33)] text-center py-2 px-6 rounded font-bold"
            >
              {btnSecondary}
            </a>
          ) : null}
        </div>
        <p className="text-[#171a20cc] text-center my-2 text-sm">{disclamer}</p>
        <div className="w-6 h-6 mb-6 mx-auto my-2 animate-bounce cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="fill"
            className="w-6 h-6 stroke-[#171a20]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

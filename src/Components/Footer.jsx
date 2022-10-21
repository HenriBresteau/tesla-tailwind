import React, { Children } from "react";

const Footer = () => {
  return (
    <div className=" pt-12 pb-20 px-6 snap-end flex flex-col justify-center items-center bg-white xl:flex-row xl:gap-12 xl:w-full ">
      <div className="disclaimer flex justify-center">
        <p className="text-[#6e7175] ">
          Pensez à covoiturer #SeDéplacerMoinsPolluer
        </p>
      </div>
      <ul className="flex flex-col justify-center items-center content-center  gap-2 py-2 md:flex-row md:gap-4 ">
        <LinkFooter>Tesla © 2022</LinkFooter>
        <LinkFooter>Mentions légales</LinkFooter>
        <LinkFooter>Contact</LinkFooter>
        <LinkFooter>Carrières</LinkFooter>
        <LinkFooter>Actualités</LinkFooter>
      </ul>
    </div>
  );
};

export default Footer;
const LinkFooter = ({ children }) => {
  return (
    <li className="text-[#5c5e62] cursor-pointer">
      <a> {children} </a>
    </li>
  );
};

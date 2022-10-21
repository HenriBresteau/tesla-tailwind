import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

const links = [
  { href: "/ModelS", label: "Model S" },
  { href: "/Model3", label: "Model 3" },
  { href: "/ModelX", label: "Model X" },
  { href: "/Powerwalls", label: "Powerwall" },
  { href: "/Accessoires", label: "Accessoires" },
];

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="fixed top-0 flex items-center w-[calc(100%-16px)] justify-between p-4 z-50  ">
      <a href="/" className="px-4">
        <svg
          className="w-[120px] fill-[#171a20]"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"></path>
        </svg>
      </a>

      <Menu as="div" className="md:hidden">
        <div>
          <Menu.Button
            className="inline-flex w-full justify-center px-4 py-2  rounded-md bg-[rgba(0,0,0,0.05)] text-[#171a20] backdrop-blur-lg hover:bg-[rgba(0,0,0,0.075)] text-sm             "
            onClick={() => setIsShowing((isShowing) => !isShowing)}
          >
            Menu
          </Menu.Button>
        </div>
        <Transition show={isShowing}>
          <Transition.Child
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute left-0 w-[50%]  h-screen top-0 bg-[rbga(0,0,0,.3)] backdrop-blur-sm"></div>
          </Transition.Child>

          <Transition.Child
            className="absolute right-0 w-[50%] bg-white h-screen top-0  shadow-[0 -8px 16px 0 rgba(0,0,0,.16)]"
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Menu.Items>
              <button
                className="p-2 bg-transparent hover:bg-[rgba(0,0,0,0.05)] transition rounded absolute right-6 top-6"
                onClick={() => setIsShowing((isShowing) => !isShowing)}
              >
                <img
                  src="/src/assets/asset_13.svg"
                  alt="close"
                  className="w-6"
                />
              </button>
              <div className="px-6 py-2 flex flex-col gap-3 mt-24 text-[#393c41] ">
                {links.map((link) => (
                  <Menu.Item key={link.href} as={Fragment}>
                    {({ active }) => (
                      <a
                        href={link.href}
                        className={`${
                          active ? "bg-[rgba(0,0,0,0.05)]" : "bg-transparent"
                        } py-1 px-4 rounded-md font-bold `}
                      >
                        {link.label}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition.Child>
        </Transition>
      </Menu>

      <div className="hidden md:flex">
        <ul className="flex px-6 py-2 gap-3 text-[#393c41] w-full">
          {links.map((link, index) => (
            <li
              key={index}
              className="bg-transparent rounded hover:bg-[rgba(0,0,0,0.05)] py-1 px-4 font-bold transition backdrop-blur"
            >
              <a href={link.href} className="">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

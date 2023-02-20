import React, { useEffect, useRef, useState } from "react";
import DownArrow from "./DownArrow";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import UpArrow from "./UpArrow";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const menuRef = useRef();
  const subMenuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    let handler = (e) => {
      if (!subMenuRef.current.contains(e.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const subMenu = (
    <>
      <a href="/" className="hover:text-gray-300">
        Fifth Link
      </a>
      <a href="/" className="hover:text-gray-300">
        Sixth Link
      </a>
      <a href="/" className="hover:text-gray-300">
        Seventh Link
      </a>
      <a href="/" className="hover:text-gray-300">
        Eighth Link
      </a>
      <a href="/" className="hover:text-gray-300">
        Ninth Link
      </a>
      <a href="/" className="hover:text-gray-300">
        Tenth Link
      </a>
    </>
  );

  const menu = (
    <>
      <a href="/" className="hover:text-gray-700">
        First Link
      </a>
      <a href="/" className="hover:text-gray-700">
        Second Link
      </a>
      <a href="/" className="hover:text-gray-700">
        Third Link
      </a>
      <p
        href="/"
        className="hover:text-gray-700 mx-auto relative cursor-pointer"
        ref={subMenuRef}
      >
        <span
          className="flex items-center"
          onClick={() => setVisible(!visible)}
        >
          Fourth Link <DownArrow />
        </span>
        {visible && (
          <span className="absolute z-50 mt-1 top-full right-1/2">
            <span className="flex flex-col gap-y-2 w-40 bg-white rounded-md mt-4 z-50 border p-4">
              <span className="absolute -top-1 right-0">
                <UpArrow />
              </span>
              {subMenu}
            </span>
          </span>
        )}
      </p>
    </>
  );

  return (
    <>
      <header className="text-gray-400 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <Logo />
          </a>
          <button className="relative flex ml-auto" ref={menuRef}>
            <Hamburger setOpen={setOpen} open={open} />
            {open && (
              <div className="absolute top-full right-1 mt-4 z-50 flex flex-col gap-y-2 justify-center bg-white border w-40 p-4 rounded-md">
                <span className="absolute -top-5 right-0">
                  <UpArrow />
                </span>
                {menu}
              </div>
            )}
          </button>
          <button className="inline-flex items-center border py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base ml-4">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

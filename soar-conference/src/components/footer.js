import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black rounded-lg shadow-sm m-4 block">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="\soar_logo.png"
              className="h-10"
              alt="Soar Footer Logo"
            />
            <span className="font-Jersey10 text-2xl whitespace-nowrap text-transparent transition-all grad bg-clip-text gradient-transition ">SOAR CONFERENCE</span>

          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline me-4 md:me-6">
                Contact
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3LHNEdavyBYa6OIKLjGsKk9L_T5kmEVL6G7D1KWvUsv_WnA/formResponse" target="_blank" className="hover:underline">
                Apply
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="/" className="hover:underline">
            SOAR CONFERENCE.
          </a>
        </span>
      </div>
    </footer>

    

    
  );
};

export default Footer; 

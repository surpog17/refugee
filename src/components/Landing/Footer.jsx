import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 font-Poppins py-12 px-32">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <a href="/" className="text-xl font-bold">
            ERHMS
          </a>
          <p className="text-gray-600">
            © 2024 Refugees.com All rights reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Work We Do
            </a>
            <a href="/" className="text-gray-600 hover:text-gray-900">
              About us
            </a>
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Get Involved
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Join Power Up Club
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

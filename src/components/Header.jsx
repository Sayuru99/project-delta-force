import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <div className="flex justify-between items-center">
      <h1 className="flex items-center text-xl font-semibold">
        <Icon icon="mdi:web" width="32" height="32" /> BPN
      </h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

import React from "react";
import { ShoppingCart, User } from "lucide-react";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="text-white body-font bg-indigo-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="ml-3 text-xl">Tech Store</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Telemóveis</a>
          <a className="mr-5 hover:text-gray-900">Tablets</a>
          <a className="mr-5 hover:text-gray-900">Portáteis</a>
        </nav>
        <button
          className="cursor-pointer flex mr-5"
          onClick={() => navigate("/sign-in")}
        >
          <User />
        </button>
        <button
          className="cursor-pointer flex"
          onClick={() => navigate("/cart")}
        >
          <ShoppingCart />
          <sup className="font-bold">0</sup>
        </button>
      </div>
    </header>
  );
}

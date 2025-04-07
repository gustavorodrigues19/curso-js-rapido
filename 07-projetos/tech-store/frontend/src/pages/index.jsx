import React from "react";
import Product from "../components/Product";

export default function ProductsPage() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Product />
        </div>
      </div>
    </section>
  );
}

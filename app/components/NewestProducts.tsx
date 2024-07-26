import React from "react";
import prisma from "../lib/db";
import Link from "next/link";
import ProductCard from "./ProductCart";

async function getData() {
  const data = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      category: true,
      smallDescription: true,
      images: true,
    },

    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
async function NewestProducts() {
  const data = await getData();
  return (
    <section className="mt-12">
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tighter">
          Newest Produts
        </h2>
        <Link
          className="text-sm hidden font-medium text-primary hover:text-primary/70 md:block"
          href="#"
        >
          All Products <span>&rarr;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 mt-4 gap-10">
        {data.map((product) => (
          <ProductCard
            images={product.images}
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            smallDescription={product.smallDescription}
          />
        ))}
      </div>
    </section>
  );
}

export default NewestProducts;

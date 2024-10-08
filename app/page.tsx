import Image from "next/image";
import NewestProducts from "./components/NewestProducts";
import { ProductRow } from "./components/ProductRow";
import { delay } from "@/lib/utils";

export default async function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
      <div className="max-w-3xl mx-auto text-2xl sm:text-5xl lg:text-6xl font-semibold text-center">
        <h1>Place Digital Products</h1>
        <h1 className="text-primary">Portfolios & Icons</h1>
        <p className="lg:text-lg text-muted-foreground mx-auto mt-5 w-[90%] font-normal text-base">
          Welcome to DigiMarket, your ultimate destination for high-quality
          digital products! At DigiMarket, we offer a wide array of
          professionally crafted digital assets.
        </p>
      </div>

      <ProductRow category="newest" />
      <ProductRow category="icons" />
      <ProductRow category="templates" />
      <ProductRow category="uikits" />
    </section>
  );
}

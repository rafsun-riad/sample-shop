import { Suspense } from "react";
import ProductCard from "./_components/ProductCard";
import Spinner from "./_components/spinner";
import { getProducts } from "./_service/apiService";

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="container mx-auto mb-10">
      <h2 className="text-3xl font-bold mt-5 mb-3">All Products</h2>
      <Suspense fallback={<Spinner />}>
        <ProductCard products={products} />
      </Suspense>
    </div>
  );
}

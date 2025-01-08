import ProductCard from "./_components/ProductCard";

export default function Home() {
  return (
    <div className="container mx-auto mb-10">
      <h2 className="text-3xl font-bold mt-5 mb-3">All Products</h2>
      <ProductCard />
    </div>
  );
}

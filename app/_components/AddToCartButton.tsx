"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store";

function AddToCartButton({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <Button size="lg" onClick={() => addToCart({ ...product, quantity: 1 })}>
      Add To Cart
    </Button>
  );
}

export default AddToCartButton;

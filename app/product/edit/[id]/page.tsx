"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useUserStore } from "@/store";
import { useRouter, useParams } from "next/navigation";
import { updateProduct, getProduct } from "@/app/_service/apiService";

export default function ProductEditPage() {
  const { user: userData } = useUserStore((state) => state);
  const [user, setUser] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const params = useParams();
  const { id } = params;
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    async function getProductById(id) {
      const product = await getProduct(id);
      setUser(product.userId);
      setProductName(product.name);
      setProductDescription(product.description);
      setPrice(product.price);
      setQuantity(product.quantity);
    }
    getProductById(id);
  }, [id]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("image", image || "");

    const product = await updateProduct(id, {
      userId: user,
      name: formData.get("name"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      quantity: Number(formData.get("quantity")),
    });
    router.push(`/product/${id}`);
  }

  if (!userData) {
    return (
      <h2 className="text-center text-2xl my-10">
        Please login to edit product.
      </h2>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow my-10"
    >
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

      <div className="space-y-2">
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          name="name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            name="price"
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            name="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="productImage">Product Image (Optional)</Label>
        <Input
          id="productImage"
          name="productImage"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500 "
        />
        {image && (
          <div className="mt-2">
            <p className="text-sm text-muted-foreground">
              Selected image: {image.name}
            </p>
            <img
              src={URL.createObjectURL(image)}
              alt="Selected product"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          </div>
        )}
      </div>

      <Button type="submit" className="w-full">
        Create Product
      </Button>
    </form>
  );
}

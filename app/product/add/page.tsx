"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useUserStore } from "@/store";
import { useRouter } from "next/navigation";
import { createProduct } from "@/app/_service/apiService";

export default function ProductAddPage() {
  const { user } = useUserStore((state) => state);
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("image", image || "");

    const product = await createProduct({
      userId: user.id,
      name: formData.get("name"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      quantity: Number(formData.get("quantity")),
    });
    router.push("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow my-10"
    >
      <h1 className="text-2xl font-bold mb-6">Create New Product</h1>

      <div className="space-y-2">
        <Label htmlFor="name">Product Name</Label>
        <Input id="name" name="name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" name="price" type="number" step="0.01" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input id="quantity" name="quantity" type="number" required />
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

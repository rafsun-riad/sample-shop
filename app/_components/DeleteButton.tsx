"use client";

import { Button } from "@/components/ui/button";
import { deleteProduct } from "../_service/apiService";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store";

function DeleteButton({ id }) {
  const { user } = useUserStore((state) => state);
  const router = useRouter();
  async function handleDelete() {
    if (!user) {
      alert("You need to be logged in to delete a product.");
      return;
    }
    const message = await deleteProduct(id);
    alert(message);
    router.push("/");
  }
  return (
    <Button variant="destructive" size="lg" onClick={handleDelete}>
      Delete Product
    </Button>
  );
}

export default DeleteButton;

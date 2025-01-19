"use client";

import { Button } from "@/components/ui/button";
import { deleteProduct } from "../_service/apiService";
import { useRouter } from "next/navigation";

function DeleteButton({ id }) {
  const router = useRouter();
  async function handleDelete() {
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

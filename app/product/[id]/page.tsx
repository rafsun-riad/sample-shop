import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function ProductDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <Image
                src="/placeholder-image.jpg"
                alt="Product image"
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Product 1 Title</h1>
            <p className="text-2xl font-bold text-red-500">${"17.00"}</p>
            <p className="text-lg text-gray-600">Available Quantity: 10</p>
          </div>

          <p className="text-gray-600">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ultrices.
          </p>

          <Button
            className={cn("w-full md:w-auto px-8 hover:bg-gray-700")}
            size="lg"
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
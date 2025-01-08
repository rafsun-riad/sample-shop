import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function ProductCard() {
  return (
    <div>
      <Card className={cn("max-w-80 overflow-hidden shadow-md")}>
        <CardContent className={cn("px-0 pb-0 relative")}>
          <Image
            src="/placeholder-image.jpg"
            alt="place holder"
            width={320}
            height={300}
            className="object-cover object-center max-h-56 rounded-t-lg hover:scale-105 duration-300 transition-all"
          />
          <div className="p-3 space-y-3">
            <p className="text-lg truncate">Sample Product Name</p>
            <p className="text-sm">Price: $100</p>
            <Button variant="outline" className={cn("w-full")} asChild>
              <Link href={`product/${1}`}>
                View Details <ArrowRight />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;

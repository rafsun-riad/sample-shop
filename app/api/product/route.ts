import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json({ products });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

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

export async function POST(request: NextRequest) {
  try {
    const { name, description, price, quantity, userId } = await request.json();
    const product = await prisma.product.create({
      data: { name, description, price, quantity, userId },
    });
    return NextResponse.json({ product }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

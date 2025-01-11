import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();
    const user = await prisma.user.create({ data: { name, email, password } });
    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

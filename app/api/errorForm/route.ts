import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const saved = await prisma.errorRecord.create({
      data,
    });

    return NextResponse.json({ success: true, data: saved }, { status: 201 });
  } catch (error) {
    console.error("POST /api/errorForm error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save data" },
      { status: 500 }
    );
  }
}

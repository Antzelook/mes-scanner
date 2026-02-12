import { NextResponse } from "next/server";
import { prisma } from "@/db/prisma";

export async function GET() {
  try {
    const errors = await prisma.errorRecord.findMany({
      orderBy: { date: "desc" },
      take: 10,
    });
    return NextResponse.json({ success: true, data: errors });
  } catch (error) {
    console.error("GET /api/history error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch data" });
  }
}

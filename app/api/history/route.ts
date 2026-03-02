import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/db/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const serialNumber: string | null = searchParams.get("serialNumber");

    const errors = await prisma.errorRecord.findMany({
      where: {
        serialNumber: {
          contains: serialNumber || "",
          mode: "insensitive",
        },
      },
      orderBy: { date: "desc" },
      take: 20,
    });

    return NextResponse.json({ success: true, data: errors });
  } catch (error) {
    console.error("GET /api/history error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}

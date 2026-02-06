import { NextResponse } from "next/server";
import { errorFormSchema } from "@/lib/validators";
import { prisma } from "@/lib/prisma";

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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = errorFormSchema.parse(body);

    const saved = await prisma.errorRecord.create({
      data: {
        date: new Date(),
        latitude: parsed.latitude,
        longitude: parsed.longitude,
        serialNumber: parsed.serialNumber,
        deveui: parsed.deveui,
        types: parsed.types ?? [],
        actions: parsed.actions ?? [],
        comment: parsed.comment || "",
      },
    });

    return NextResponse.json({ success: true, data: saved }, { status: 201 });
  } catch (error: unknown) {
    console.error("POST /api/errorForm error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to save data",
      },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const recordError = await request.json();

    const {
      date,
      latitude,
      longitude,
      serialNumber,
      deveui,
      types,
      actions,
      comment,
    } = recordError;

    const saved = await prisma.errorRecord.create({
      data: {
        date: date ? new Date(date) : undefined,
        latitude,
        longitude,
        serialNumber,
        deveui,
        types,
        actions,
        comment,
      },
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

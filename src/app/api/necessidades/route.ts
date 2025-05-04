import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const necessidades = await prisma.necessidade.findMany();
  return NextResponse.json(necessidades);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, item, quantidade } = body;

  const nova = await prisma.necessidade.create({
    data: {
      nome,
      item,
      quantidade: Number(quantidade),
    },
  });

  return NextResponse.json(nova, { status: 201 });
}

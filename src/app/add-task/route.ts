import { NextResponse } from "next/server";

import { prismaClient } from "../libs/prisma";

export async function POST(req: Request) {
  const { title, date } = await req.json();
  await prismaClient.$connect();
  const resp = await prismaClient.task.create({
    data: {
      title,
      completed: false,
      date,
    },
  });
  return NextResponse.json({ ...resp });
}

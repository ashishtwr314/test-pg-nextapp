// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    res.send({
      data: "GET METHID NOT CODED YET",
    });
  } else {
    const userCreated = await prisma.user.create({
      data: {
        firstName: "Ashish",
        lastName: "Tiwari",
        password: "123",
        email: "ash@ash.com",
      },
    });
    console.log(userCreated);

    res.status(200).send(userCreated);
  }
}

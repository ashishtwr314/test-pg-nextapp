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
    const domainCreated = await prisma.domains.create({
      data: {
        user_id: "5c0932e5-4d81-4959-9930-8ccc99475f16",
        domain_name: "New Domain",
      },
    });
    console.log(domainCreated);

    res.status(200).send(domainCreated);
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Workspaces } from "../dbConnection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const wrkspaces = await Workspaces.findAll();

  console.log(wrkspaces);
  res.send(wrkspaces);
}

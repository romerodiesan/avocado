// NextJS
import { NextApiRequest, NextApiResponse } from "next";

// Database: avos
import DB from '@database';

async function allAvos (_request: NextApiRequest, response: NextApiResponse) {
  const db = new DB();
  const avos = await db.getAll();

  const length = avos.length;
  const data = avos;

  response.status(200).json({ length, data });
}

export default allAvos;
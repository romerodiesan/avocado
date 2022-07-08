// Next.js Types
import { NextApiRequest, NextApiResponse } from 'next';

// Database: avos
import DB from '@database';

async function getAvocado(request: NextApiRequest, response: NextApiResponse) {
  const db = new DB()
  const { id }= request.query as { id: string }

  const data = await db.getById(id)

  response.status(200).json(data)
}

export default getAvocado;
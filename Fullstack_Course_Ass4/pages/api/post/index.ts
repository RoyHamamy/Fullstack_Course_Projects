import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import { csrf } from "../../../lib/csrf";



// POST /api/post
// Required fields in body: title
// Optional fields in body: content
const handle = async(req: NextApiRequest, res: NextApiResponse) => {
  const { title, content, email, mongoId} = req.body;

    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        video: mongoId,
        author: { connect: { email: email } },
      },
    });
    res.json(result);
}

export default csrf(handle);

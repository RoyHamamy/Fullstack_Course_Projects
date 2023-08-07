import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
const jwt = require("jsonwebtoken");

// PUT /api/publish/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id;
  let myCookieValue = req.cookies.myCookie;

  if(myCookieValue){
    let tokenValue = JSON.parse(myCookieValue);
    tokenValue = tokenValue.token; 
    jwt.verify(tokenValue, process.env.SECRET, (err:any, decoded:any) => {
      if (err) {
        // Token verification failed
        console.error('Token verification failed:', err);
        return;
      }
      // Token is valid
      // Extract the values from the decoded payload
      myCookieValue = decoded;     
    });
  }

  if (myCookieValue) {
    const post = await prisma.post.update({
      where: { id: Number(postId) },
      data: { published: true },
    });
    res.json(post);
  } else {
    res.status(401).send({ message: 'Unauthorized' })
  }
}

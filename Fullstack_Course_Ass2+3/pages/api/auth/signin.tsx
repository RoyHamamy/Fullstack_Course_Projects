import prisma from "../../../lib/prisma";
const jwt = require("jsonwebtoken");
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { password, email } = req.body;
  const result = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!result) {
    res.status(404).send({ message: "error: given email is not registered." });
    return null;
  }
  bcrypt.compare(password, result.password || "", (err, ans) => {
    if (ans) {
      // Passwords match
      const userForToken = {
        email: result.email,
        id: result.id,
        name: result.name,
      };
      const token = jwt.sign(userForToken, process.env.SECRET, {
        expiresIn: 60 * 60 * 8,
      });
      let userToken = {
        token,
        email: result.email,
        name: result.name,
        id: result.id,
        image: result.image || null,
      };
      res.setHeader(
        "Set-Cookie",
        `myCookie=${encodeURIComponent(
          JSON.stringify(userToken)
        )}; Max-Age=7200; Path=/;`
      );
      res.status(200).send(userToken);
    } else {
      // Passwords don't match
      res.status(400).send({
        message: "incorrect credentials",
      });
      return -1;
    }
  });
  return 1;
}

import prisma from "../../../lib/prisma";
const jwt = require("jsonwebtoken");
const loginRouter = require('express').Router()
import bcrypt from "bcrypt";

loginRouter.post('/', async (req, res) => {
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
        name: result.name,
        id: result.id,
        image: result.image || null,
      };
      const token = jwt.sign(userForToken, process.env.SECRET, {
        expiresIn: 60 * 60 * 8,
      });
      let userToken = {
        token
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
      res.status(500).send({
        message: "error: user's password does not match given password.",
      });
      return -1;
    }
  });
  return 1;
})

export default loginRouter;
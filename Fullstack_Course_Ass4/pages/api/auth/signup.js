import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";
import formidable from "formidable";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "dmavrozmb",
  api_key: "527255586394151",
  api_secret: "6v9qMbYhqq4NZ01koR__h-OUgWk",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).send({ message: "Error while processing form data." });
        return;
      }

      const { name, username, password, email } = fields;
      const photo = files.photo;

      const result = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (result) {
        res
          .status(403)
          .send({ message: "Forbidden: Email is already in use." });
        return;
      }

      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          res.status(500).send({ message: "Error while encrypting password." });
          return;
        }
        let photoUrl;
        if (photo) {
          const cloudinaryUploadResult = await new Promise(
            (resolve, reject) => {
              cloudinary.v2.uploader.upload(photo.filepath, (error, result) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(result);
                }
              });
            }
          );

          // Get the public URL of the uploaded photo from Cloudinary
          photoUrl = cloudinaryUploadResult.secure_url;
        }

        try {
          const newUser = await prisma.user.create({
            data: {
              name: name,
              username: username,
              password: hash,
              email: email,
              image: photoUrl,
            },
          });
          res.status(201).send({ message: "User created!" });
          return;
        } catch (error) {
          console.error("Error creating user:", error);
          res
            .status(500)
            .send({ message: "An error occurred. Please try again later." });
        }
      });
    });
    res.status(200);
    return;
  }
  if (req.method === "PUT") {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).send({ message: "Error while processing form data." });
        return;
      }

      const { email } = fields;
      const photo = files.photo;

      const cloudinaryUploadResult = await new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(photo.filepath, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });

      const photoUrl = cloudinaryUploadResult.secure_url;
      const result = await prisma.user.update({
        where: {
          email: email,
        },
        data: { image: photoUrl },
      });

      res.status(201).send({ message: "User Updated!" });
    });
  }
  if (req.method === "DELETE") {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).send({ message: "Error while processing form data." });
        return;
      }
      const { email } = fields;
      const result = await prisma.user.update({
        where: {
          email: email,
        },
        data: { image: null },
      });

      res.status(201).send({ message: "User Image Deleted!" });
    });
  }
}

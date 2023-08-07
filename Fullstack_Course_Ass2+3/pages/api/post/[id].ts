import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import metadata from "../../../data/models/metadata";
import { v2 as cloudinary } from "cloudinary";
import { IncomingForm } from "formidable";

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

// DELETE /api/post/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id;

  if (req.method === "DELETE") {
    const post = await prisma.post.delete({
      where: { id: Number(postId) },
    });
    if (post.video) {
      metadata
        .findOneAndDelete({ _id: post.video })
        .then((deletedMetadata: { postId: any }):any => {
          if (deletedMetadata) {
            const deletedPostId = deletedMetadata.postId;
            console.log(deletedPostId);
            cloudinary.uploader
              .destroy(deletedPostId)
              .then((cont) => {
                console.log(cont);
                console.log("Cloudinary file deleted successfully");
              })
              .catch((error: any) => {
                console.error("Error deleting Cloudinary file:", error);
              });
            console.log("Metadata deleted successfully");
          } else {
            console.log("Metadata not found");
          }
        })
        .catch((error: any) => {
          console.error("Error deleting Metadata:", error);
        });
    }
    res.json(post);
  } else if (req.method === "PUT") {
    const newId: any = req.query.id;
    const data: any = await new Promise((resolve, reject) => {
      const form = new IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });
    const file = data.fields.video;
    const post = await prisma.post.update({
      where: { id: Number(postId) },
      data: { video: file },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

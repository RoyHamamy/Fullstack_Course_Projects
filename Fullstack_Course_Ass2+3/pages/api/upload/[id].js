import cloudinary from "cloudinary";
import { IncomingForm } from "formidable";
import prisma from "../../../lib/prisma";
import metadata from "../../../data/models/metadata";

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

export default async (req, res) => {
  if (req.method === "DELETE") {
    const postId = req.query.id;
    const post = await prisma.post.findFirst({
      where: { id: Number(postId) },
    });
    if (post.video) {
      metadata
        .findOneAndDelete({ _id: post.video })
        .then((deletedMetadata) => {
          if (deletedMetadata) {
            const deletedPostId = deletedMetadata.postId;
            console.log(deletedPostId);
            cloudinary.uploader
              .destroy(deletedPostId)
              .then((cont) => {
                console.log(cont);
                console.log("Cloudinary file deleted successfully");
              })
              .catch((error) => {
                console.error("Error deleting Cloudinary file:", error);
              });
            console.log("Metadata deleted successfully");
          } else {
            console.log("Metadata not found");
          }
        })
        .catch((error) => {
          console.error("Error deleting Metadata:", error);
        });
    }
    const deleter = await prisma.post.update({
      where: { id: Number(postId) },
      data: {
        video: null,
      },
    });
    res.json(deleter);
  } else {
    const newId = req.query.id;
    const data = await new Promise((resolve, reject) => {
      const form = new IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });
    const file = data?.files[newId].filepath;
    try {
      const response = await cloudinary.v2.uploader.upload(file, {
        resource_type: "video",
        public_id: newId,
      });

      const obj = new metadata({
        user: data.fields.username,
        date: new Date().toISOString(),
        postId: response.public_id,
        link: response.secure_url,
      });

      const result = await obj.save();
      const savedMetadata = result._id;
      console.log("metadata saved!");
      return res.json({ savedMetadata });
    } catch (error) {
      console.log("Error", error);
      return res.json(error);
    }
  }
};

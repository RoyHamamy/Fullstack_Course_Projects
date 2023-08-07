import React, { useRef } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Router from "next/router";
import { PostProps } from "../../components/Post";
import prisma from "../../lib/prisma";
import metadata from "../../data/models/metadata";

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const myCookieValue = req.cookies.myCookie;
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  if (post?.video) {
    const response = await metadata.findById(post.video);
    post.video = response.link;
  }
  let photo;
  if(post){
    const user = await prisma.user.findUnique({
      where: { id: Number(post?.authorId) },
    });
    photo = user?.image;
  }
  
  return {
    props: {
      ...post,
      myCookieValue: myCookieValue || null,
      photo: photo,
    },
  };
};

interface ExtendedPostProps extends PostProps {
  myCookieValue: string | null;
  photo: string | null
}

async function publishPost(id: number): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/");
}

async function deletePost(id: number): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });
  await Router.push("/");
}

async function deleteVideo(id: number): Promise<void> {
  await fetch(`/api/upload/${id}`, {
    method: "DELETE",
  });
  await Router.push("/drafts");
}

async function uploadVideo(id: number, ref: any): Promise<void> {
  const formData = new FormData();
  const file = ref.current.files[0];
  formData.append(id.toString(), file);
  if (file) {
    try {
      const response = await fetch(`/api/upload/${id}`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      const formData2 = new FormData();
      formData2.append("video", data.savedMetadata);

      await fetch(`/api/post/${id}`, {
        method: "PUT",
        body: formData2,
      });
    } catch (error) {
      console.log("ERROR UPLOADING VIDEO");
    }
  }

  await Router.push("/drafts");
}

const Post: React.FC<ExtendedPostProps> = (props) => {
  let values;
  if (props.myCookieValue) {
    values = JSON.parse(props.myCookieValue);
  }
  const videoRef: any = useRef();
  let postBelongsToUser = false;
  const userHasValidSession = Boolean(props.myCookieValue);

  postBelongsToUser = values && values.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      {(props.published || (!props.published && postBelongsToUser)) && (
        <div>
          <h2>{title}</h2>
          <p>By {props?.author?.name || "Unknown author"}</p>
          {props.photo && <img src={props.photo} />}
          <ReactMarkdown children={props.content} />
          {props.video && <video muted controls src={props.video} />}
          {postBelongsToUser && props.video && (
            <button onClick={() => deleteVideo(props.id)}>Delete Video</button>
          )}

          {postBelongsToUser && !props.video && (
            <input type="file" accept=".mp4" ref={videoRef} />
          )}
          {postBelongsToUser && !props.video && (
            <button
              onClick={() => {
                if (videoRef.current.value) {
                  uploadVideo(props.id, videoRef);
                }
              }}
            >
              Upload Video
            </button>
          )}
          {postBelongsToUser && !props.video && (
            <div>
              <button
                style={{ margin: "1rem" }}
                onClick={(event) => {
                  event.preventDefault();
                  videoRef.current.value = null;
                }}
              >
                Reset video option
              </button>
            </div>
          )}

          {!props.published && userHasValidSession && postBelongsToUser && (
            <button onClick={() => publishPost(props.id)}>Publish</button>
          )}
          {userHasValidSession && postBelongsToUser && (
            <button onClick={() => deletePost(props.id)}>Delete</button>
          )}
        </div>
      )}
      <style jsx>{`
      img {
        max-width: 8rem;
        max-height: 8rem;
      }
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        video {
          margin-bottom: 3rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button:hover {
          background: gray;
          color: white;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
      {!props.published && !postBelongsToUser && <p>Error: could not find this post.</p>}
    </Layout>
  );
};

export default Post;

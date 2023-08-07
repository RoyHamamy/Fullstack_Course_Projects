import React from "react";
import type { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import Post, { PostProps } from "../../components/Post";
import prisma from "../../lib/prisma";

import InitialPageBar from "../../components/InitialPageBar";
import metadata from "../../data/models/metadata";
import { FaYoutube } from "react-icons/fa";
import Router from "next/router";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let id = params?.id;
  const size = await prisma.post.count({where:{published:true}});
  const feed = await prisma.post.findMany({
    skip: (Number(params?.id) - 1) * 10,
    take: 10,
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  for (let post of feed) {
    const user = await prisma.user.findUnique({
      where: { id: Number(post.authorId) },
    });
    post.image = user ? user.image : null;
    if (post?.video) {
      const response: any = await metadata.findById(post?.video.toString());
      post.video = response.link;
    }
  }
  return {
    props: { feed, id, size },
  };
};

type Props = {
  feed: PostProps[];
  id: Number;
  size: Number;
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        {props.feed.length > 0 && (
          <main>
            {props.feed.map((post) => (
              <div key={post.id} className="post">
                <div className="post-content">
                  <Post post={post} />
                </div>
                {post.video && (
                  <video className="video" muted controls src={post.video} />
                )}
                <div className="emoji">
                  {post.video && (
                    <FaYoutube
                      onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
                      style={{ fontSize: "3rem" }}
                    />
                  )}
                  {post.image && <img src={post.image} />}
                </div>
              </div>
            ))}
          </main>
        )}
      </div>
      <style jsx>{`
        img {
          max-width: 8rem;
          max-height: 8rem;
        }
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .post-content {
          flex: 1;
        }

        .video {
          max-width: 300px;
          align-self: center;
        }

        .emoji {
          margin-right: 4rem;
          align-self: center;
        }
        .emoji:hover {
          color: red;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
      `}</style>
      <InitialPageBar size={props.size} />
    </Layout>
  );
};

export default Blog;

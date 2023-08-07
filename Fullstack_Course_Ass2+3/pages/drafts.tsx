import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from "../lib/prisma";
import metadata from "../data/models/metadata";
import { FaYoutube } from "react-icons/fa";
import Router from "next/router";
const jwt = require("jsonwebtoken");

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  let email;
  let photo;
  let drafts;
  const myCookieValue = req.cookies.myCookie;
  if (myCookieValue) {
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
      email = decoded.email;     
    });
  const user = await prisma.user.findUnique({ where: { email: email } });
  photo = user?.image;
   drafts = await prisma.post.findMany({
    where: {
      author: { email: email },
      published: false,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  if (myCookieValue) {
    for (let post of drafts) {
      if (post?.video) {
        const response:any = await metadata.findById(post?.video.toString());
        post.video = response.link;
      }
    }
  }
}
  return {
    props: { drafts, myCookieValue, photo },
  };
};

type Props = {
  drafts: PostProps[];
  myCookieValue: string | null;
  photo: string | null;
};

const Drafts: React.FC<Props> = (props) => {
  if (!props.myCookieValue) {
    return (
      <Layout>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="page">
        <h1>My Drafts</h1>
        <main>
          {props.drafts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-content">
                <Post post={post} />
              </div>
              {post.video && <video className="video" muted src={post.video} />}
              {props.photo && <img src={props.photo} />}
              <div className="emoji">
                {post.video && (
                  <FaYoutube
                    onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
                    style={{ fontSize: "3rem" }}
                  />
                )}
              </div>
            </div>
          ))}
        </main>
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
    </Layout>
  );
};

export default Drafts;

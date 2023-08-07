import React, { useRef } from "react";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";
import Router from "next/router";
const jwt = require("jsonwebtoken");


interface userProps {
  myCookieValue: string | null;
  name: string;
  email: string;
  image: string;
  password: string;
  username?: string;
  id: number;
  emailId: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  let myCookieValue:any = req.cookies.myCookie;
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
      myCookieValue = decoded.email;     
    });
  }
  const user = await prisma.user.findUnique({
    where: {
      email: String(params?.email) || "",
    },
  });
  let id = String(params?.email);
  //   if (post?.video) {
  //     const response = await metadata.findById(post.video);
  //     post.video = response.link;
  //   }
  return {
    props: {
      ...user,
      myCookieValue: myCookieValue || null,
      emailId: id,
    },
  };
};

const Post: React.FC<userProps> = (props) => {
  const photoRef: any = useRef();

  const userHasValidSession = props.myCookieValue && props.myCookieValue === props.emailId;

  const formHandler = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("photo", photoRef.current.files[0]);
    formData.append("email", props.emailId);
    const result = await fetch("/api/auth/signup", {
      method: "PUT",
      body: formData,
    });   
    await Router.push("/");
  };

  const deleteHandler = async(event:any)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", props.emailId);
    const result = await fetch("/api/auth/signup", {
      method: "DELETE",
      body: formData,
    });   
    await Router.push("/");
  }

  return (
    <Layout>
      {userHasValidSession && (
        <div>
          <h1>This is {props.username}'s profile page</h1>
          {props.image && <img src={props.image} />}
          <h2>Name: {props.name}</h2>
          <h2>email: {props.email}</h2>
          <p>Click here to edit Profile Picture: </p>
          <input
            type="file"
            accept=".jpg, .png, .gif, .jpeg"
            ref={photoRef}
            onChange={formHandler}
          />
          {props.image && <button onClick={deleteHandler}>Delete Profile Picture</button>}
        </div>
      )}
      {!userHasValidSession && <p>Error: Not Authenticated.</p>}
      <style jsx>{`
        img {
          max-width: 16rem;
          max-height: 16rem;
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
    </Layout>
  );
};

export default Post;

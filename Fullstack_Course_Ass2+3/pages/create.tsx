import React, { useRef, useState, useEffect } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { PropagateLoader } from "react-spinners";
import { GetServerSideProps } from "next";
const jwt = require("jsonwebtoken");


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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

  return {
    props: {
      myCookieValue: myCookieValue || null,
    },
  };
};

type DraftProps = {
  myCookieValue: any | null;
};

const Draft: React.FC<DraftProps> = (props) => {
  let mongoId: any;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const focusRef: any = useRef(); // this is to focus on the title field' as requested in the assignment.
  const [publicId, setPublicId] = useState(() => {
    if (typeof window !== "undefined") {
      const storedPublicId = window.localStorage.getItem("publicId");
      return storedPublicId ? parseInt(storedPublicId) : 0;
    } else {
      // Fallback mechanism for Node.js environment
      return 0;
    }
  });
  const myCookieValue = props.myCookieValue;
  const videoRef: any = useRef();

  useEffect(() => {
    if (myCookieValue) focusRef.current.focus();
    if (typeof window !== "undefined") {
      window.localStorage.setItem("publicId", publicId.toString());
    }
  }, [publicId]);

  const videoReseter = (event: any) => {
    event.preventDefault();
    videoRef.current.value = null;
  };

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    let username;
    let email;
    const myCookieValue = props.myCookieValue;
    if (myCookieValue) {
      username = myCookieValue.name;
      email = myCookieValue.email;
    }
    try {
      setLoading(true);
      const formData = new FormData();
      const file = videoRef.current.files[0];
      formData.append(publicId.toString(), file);
      formData.append("username", username || "");
      if (file) {
        try {
          const response = await fetch(`/api/upload/${publicId}`, {
            method: "POST",
            body: formData,
          });
          const data = await response.json();
          mongoId = data.savedMetadata;
        } catch (error) {
          console.log("ERROR UPLOADING VIDEO");
        }
        const body = { title, content, email, mongoId };
        await fetch(`/api/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        setLoading(false);

        setPublicId((prevPublicId) => prevPublicId + 1);
      } else {
        const mongo = null;
        const body = { title, content, email, mongo };
        await fetch(`/api/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        setLoading(false);
      }
      await Router.push("/drafts");
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <Layout>
      {myCookieValue && (
        <div>
          <form onSubmit={submitData}>
            <h1>New Draft</h1>
            <input
              ref={focusRef}
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
            />
            <textarea
              cols={50}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              rows={8}
              value={content}
            />
            <input type="file" accept=".mp4, .mp3, .avi" ref={videoRef} />
            <div>
              <button onClick={videoReseter}>Reset video option</button>
            </div>
            {loading && (
              <div className="spinner">
                <PropagateLoader />
              </div>
            )}
            {!loading && (
              <input
                disabled={!content || !title}
                type="submit"
                value="Create"
                className="create"
              />
            )}
            {!loading && (
              <a className="back" href="#" onClick={() => Router.push("/")}>
                or Cancel
              </a>
            )}
          </form>
        </div>
      )}
      {!myCookieValue && <p>Error: not authenticated. Please log in.</p>}
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .create {
          margin-top: 1rem;
        }

        .create:hover {
          background: gray;
          color: white;
        }

        .back {
          margin-left: 1rem;
        }

        .spinner {
          margin: 2rem;
          padding-left: 3rem;
        }
      `}</style>
    </Layout>
  );
};

export default Draft;

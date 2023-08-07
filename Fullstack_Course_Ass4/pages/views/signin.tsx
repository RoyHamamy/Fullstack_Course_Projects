import React, { useRef, useState } from "react";
import Router from "next/router";
import Layout from "../../components/Layout";
import { setup } from "../../lib/csrf";

const Signin: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  const formHandler = async (event: any) => {
    event.preventDefault();
    if (
      emailRef.current.value.trim() == "" ||
      passwordRef.current.value.trim() == ""
    ) {
      setErrorMessage("one or more fields are empty, Please enter valid input");
      return;
    }
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    const body = { password, email };
    const result = await fetch("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (result.status == 404) {
      result.json().then((ans) => {
        setErrorMessage(ans.message);
      });
    }
    if (result.status == 400) {
      result.json().then((ans) => {
        setErrorMessage(ans.message);
      });
    } if(result.status == 200) {
      window.localStorage.setItem("userToken", JSON.stringify(result));
      Router.push("/");
    }
  };

  return (
    <Layout>
      <div>
        <h1>Log-in here :</h1>
        {errorMessage && <h2 data-testid="error-id" style={{color:"red"}}>{errorMessage}</h2>}
        <p>Please enter a valid email address: </p>
        <input type="text" data-testid="name-input" ref={emailRef} />
        <p>Please enter a valid password: </p>
        <input type="password" data-testid="password-input" ref={passwordRef} />
        <br />
        <br />
        <button onClick={formHandler}>Login</button>
      </div>
    </Layout>
  );
};

export const getServerSideProps = setup(async () => {
  return {
    props: {},
  };
 });

export default Signin;

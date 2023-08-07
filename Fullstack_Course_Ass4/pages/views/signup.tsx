import React, { useRef, useState } from "react";
import Router from "next/router";
import Layout from "../../components/Layout";

const Signup: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const nameRef: any = useRef();
  const userNameRef: any = useRef();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const photoRef: any = useRef();

  const formHandler = async (event: any) => {
    event.preventDefault();
    if (
      nameRef.current.value.trim() === "" ||
      userNameRef.current.value.trim() === "" ||
      emailRef.current.value.trim() === "" ||
      passwordRef.current.value.trim() === ""
    ) {
      setErrorMessage("One or more fields are empty. Please enter valid input.");
      return;
    }

    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("username", userNameRef.current.value);
    formData.append("password", passwordRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("photo", photoRef.current.files[0]);

    try {
      const result = await fetch("/api/auth/signup", {
        method: "POST",
        body: formData,
      });

      const data = await result.json();

      if (result.status === 403) {
        setErrorMessage(data.message);
      } else if (result.status === 201) {
        setErrorMessage(data.message);
        Router.push("/views/signin");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Layout>
      <div>
        <h1>Sign up here:</h1>
        {errorMessage && <h2 data-testid="error-id" style={{color:"red"}}>{errorMessage}</h2>}
        <form onSubmit={formHandler}>
          <p>Please enter your name:</p>
          <input name="name-input" type="text" data-testid="name-input" ref={nameRef} />
          <p>Please enter a valid username:</p>
          <input type="text" ref={userNameRef} />
          <p>Please enter a valid email address:</p>
          <input type="text" ref={emailRef} />
          <p>Please enter a valid password:</p>
          <input type="password" data-testid="password-input" ref={passwordRef} />
          <p>Please select a photo:</p>
          <input type="file" accept=".jpg, .png, .gif, .jpeg" ref={photoRef} />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
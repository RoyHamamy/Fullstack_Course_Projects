import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

let isLoggedIn: any;
const Header: React.FC = () => {

  let name;
  let email;
  const cookieData = Cookies.get("myCookie");
  if(cookieData){
    name = JSON.parse(cookieData);
    email = name.email;
    name = name.name;
  }
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  useEffect(() => {
    isLoggedIn = window.localStorage.getItem("userToken") && cookieData;
    if (isLoggedIn) setIsLogged(true);
  }, []);

  let left = (
    <div className="left">
      <Link href="/" legacyBehavior>
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
      {isLoggedIn && (
        <Link href="/drafts" legacyBehavior>
          <a
            onClick={() => {
              router.push({
                pathname: "/drafts",
                query: { userToken: isLoggedIn },
              });
            }}
            data-active={isActive("/drafts")}
          >
            My drafts
          </a>
        </Link>
      )}
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left a[data-active="true"] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );
  let right = (
    <div className="right">
      {/* <p>
          {session.user?.name} ({session.user?.email})
        </p> */}
      {!isLogged && (
        <Link href="/views/signin" legacyBehavior>
          <a data-active={isActive("/signup")}>Log in</a>
        </Link>
      )}
      {!isLogged && (
        <Link href="/views/signup" legacyBehavior>
          <a data-active={isActive("/signup")}>Sign up</a>
        </Link>
      )}
      {isLogged && <p>Hi, {name}</p>}
      {isLogged && (
        <Link href={`/profile/${email}`} legacyBehavior>
          <button>
            <a>My Profile</a>
          </button>
        </Link>
      )}
      {isLogged && (
        <Link href="/create" legacyBehavior>
          <button>
            <a>New post</a>
          </button>
        </Link>
      )}
      {isLogged && (
        <button
          onClick={() => {
            router.push("/");
            window.localStorage.removeItem("userToken");
            Cookies.remove("myCookie");
            setIsLogged(false);
          }}
        >
          <a>Log out</a>
        </button>
      )}
      <style jsx>{`
      img{
        max-width: 3rem;
        max-height: 3rem;
      }
        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        p {
          display: inline-block;
          font-size: 13px;
          padding-right: 1rem;
        }

        a + a {
          margin-left: 1rem;
        }

        .right {
          display: flex; /* Align elements inline */
          align-items: center; /* Align elements vertically */
          margin-left: auto;
        }

        .right a {
          border: 1px solid black;
          padding: 0.5rem 1rem;
          border-radius: 3px;
        }

        button {
          border: none;
        }
      `}</style>
    </div>
  );

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Header;

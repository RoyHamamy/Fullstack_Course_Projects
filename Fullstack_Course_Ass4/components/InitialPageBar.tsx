import Router from "next/router";
import React from "react";

const InitialPageBar = (props:any) => {
  const numOfPages = Math.ceil(props.size / 10);
  const getPageUrl = (page: number) => `/num/${page}`;
    return (
        <div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {[...Array(numOfPages)].map((_, index) => (
          <li key={index} style={{ display: "inline-block", padding: "0 3px" }}>
            <button
              onClick={() => {
                Router.push(getPageUrl(index + 1)); // Add 1 to index since page numbers start from 1
              }}
            >
              {index + 1}
            </button>
          </li>
        ))}
        </ul>
      </div>
    );
}

export default InitialPageBar;
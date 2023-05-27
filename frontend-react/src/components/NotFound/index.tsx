import React from "react";
import Navbar from "../Navbar";

function NotFound() {
  return (
    <body>
      <Navbar />
      <h1>NOT FOUND</h1>
      <h2>Welome to Eaty</h2>
      <footer className="footer">
        <p className="footer-by">
          A project by{" "}
          <a
            href=" "
            rel="noopener"
            className="small-link"
          >
             CodeAfterWork
          </a>
          <a
            href=" "
            rel="noopener"
            target="_blank"
            className="no-link icon-twitter"
            aria-label="Follow me on Twitter"
          ></a>
        </p>
      </footer>
    </body>
  );
}

export default NotFound;

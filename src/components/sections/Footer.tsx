import React from "react";

function Footer() {
  return (
    <div className=" border-t border-muted-foreground">
      <div className="container p-6 flex justify-center items-center">
        <p className="text-sm flex">
          Created by{" "}
          <a href="https://twitter.com/asofex" className="font-bold mx-1">
            Teyim.
          </a>
          <span className="mx-1">available on</span>
          <a
            href="https://github.com/teyim/237-logos"
            className="font-bold space-x-1 items-center flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>Github</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;

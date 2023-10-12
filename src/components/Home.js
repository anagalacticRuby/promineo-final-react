import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
export function Home() {
  //This component is all about the information and elements displayed on the 'home' screen of the website
  return (
    <>
      <main>
        <h1>Welcome!</h1>
        <p>
          Hello and welcome to my incredible website! I made this website using
          create-react-app (as opposed to vite or any alternatives), and it
          features styling using React-Bootstrap. React router is also used to
          enable the navigation between multiple pages.
        </p>
        <p>
          You can check out some games that I coded up in the Games page, or
          interact with with a form and a table featuring CRUD operations in the
          CRUD page. The last page, "References", has a list of websites I used as references in the making of this website.
        </p>
      </main>
    </>
  );
}

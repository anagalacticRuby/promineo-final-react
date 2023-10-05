import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
export function Home() {
  //This component is all about the information and elements displayed on the 'home' screen of the website
  return (
    <>
      <Header />
      <main>
        <h1>Welcome!</h1>
        <p>
          This website has blah blah blah this text will be replaced later for
          now its just boilerplate for display purposes.
        </p>
      </main>
      <Footer />
    </>
  );
}

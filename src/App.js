import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * References used to create and style this application:
 * https://www.youtube.com/watch?v=Ul3y1LXxzdU (Learn React Router v6 in 45 Minutes)
 * https://scrimba.com/learn/reactrouter6 (Scrimba, Learn React Router v6 Interactive Tutorial)
 * https://react-bootstrap.netlify.app/ (React Bootstrap official documentation site)
 *
 */

function App() {
  /**
   * All this code does is automatically redirect you to the 'home' page upon starting up the app
   * So that way I could potentially have access to features like state and context
   * But I have yet to figure out how to properly pass all the things I want down to specific pages
   * such as methods for CRUD operations to both the Crud page and the Games page
   */
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home", {});
    }, 1);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Outlet />
        <Footer />
      </header>
    </div>
  );
}

export default App;

//import logo from "./logo.svg";
import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  //useRouteMatch,
  useMatch,
} from "react-router-dom";

/**
 * References used to create and style this application:
 * https://www.youtube.com/watch?v=Ul3y1LXxzdU (Learn React Router v6 in 45 Minutes)
 * https://scrimba.com/learn/reactrouter6 (Scrimba, Learn React Router v6 Interactive Tutorial)
 * https://react-bootstrap.netlify.app/ (React Bootstrap official documentation site)
 * 
 */

export default function App() {
  const posts = [
    {
      id: 1,
      title: "My First Post",
      date: "4-7-2020",
      content: "This is my first post ever.",
    },
    {
      id: 2,
      title: "Post 2",
      date: "5-6-2021",
      content: "Wow dude post number two",
    },
    {
      id: 3,
      title: "Vacation 3",
      date: "4-9-2020",
      content: "Finaly time 2 head to our vacation spot",
    },
  ];

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/posts" element={<Posts posts={posts} />}>
            {/* <Posts posts={posts} /> */}
          </Route>
          <Route
            path="/friends"
            element={<Friends names={["Tom", "Sally", "Samantha"]} />}
          >
            {/* <Friends name={["Tom", "Sally", "Samantah"]} /> */}
          </Route>
          <Route path="/" element={<Home />}>
            {/* <Home /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Friends(props) {
  const { names } = props;
  console.log(props)
  return (
    <div>
      <ul>
        {names.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

function Posts({ posts }) {
  const match = useMatch();
  const findPostById = (id) => {
    return posts.filter((post) => post.id === id)[0];
  };
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        <li>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={`${match.url}/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
        </li>
      </ul>
      <Routes>
        <Route
          path={`${match.path}/:postId`}
          render={(props) => (
            <Post {...props} data={findPostById(props.match.params.postId)} />
          )}
        />
        <Route path={match.path}>
          <h3>Please Select a Post.</h3>
        </Route>
      </Routes>
    </div>
  );
}

function Post(props) {
  const { data } = props;
  return (
    <div>
      <h3>{data.title}</h3>
      <h4>{data.date}</h4>
      <p>{data.content}</p>
    </div>
  );
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

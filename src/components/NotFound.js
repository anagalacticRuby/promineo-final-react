import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  //When the user tries to visit a page that doesn't exist within the website
  //They will get sent to this 'Not Found' page and then be redirected back to the 'Home' page/
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home", {});
    }, 1000);
  }, []);

  return <h4>Page Not Found, Redirecting...</h4>;
}

import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Page is not found</h2>
      <NavLink to={"/"}>Go Home</NavLink>
    </>
  );
};

export default NotFoundPage;

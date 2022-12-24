import React, { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <p className="text-red-500">Something went wrong</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h4 className="text-3xl font-semibold">
        Please{" "}
        <Link className="underline" onClick={handleLogOut}>
          Log out
        </Link>{" "}
        or{" "}
        <Link className="underline" to="/">
          Go back home
        </Link>
      </h4>
    </div>
  );
};

export default DisplayError;

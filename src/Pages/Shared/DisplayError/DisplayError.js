import React, { useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged Out");
      })
      .catch((err) => console.log(err));
  };
  const error = useRouteError();
  return (
    <div>
      <p className="text-red-500">Something went wrong</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h4>
        Please{" "}
        <button className="btn btn-primary" onClick={handleLogOut}></button>
      </h4>
      <Toaster />
    </div>
  );
};

export default DisplayError;

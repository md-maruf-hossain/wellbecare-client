import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateCurrentUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState('')
  const handleLogin = (data) => {
    console.log(data);
    setSignupError('');
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Signup successful');

        const userInfo = {
          displayName: data.name,
        }
        updateCurrentUser(userInfo)
        .then(()=> {})
        .catch(err=> console.error(err))
      })
      .catch((err) => {
        console.error(err);
        setSignupError(err.message);
      });
  };
  return (
    <form className="py-6" onSubmit={handleSubmit(handleLogin)}>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <Link className="mx-auto inline-block">
                  <p className="text-primary text-4xl font-bold">Register</p>
                </Link>
              </div>

              <div className="mb-6">
                <input
                  {...register("name", {
                    required: "Name is required",
                    maxLength: { value: 20, message: "Your name should be in 20 characters" },
                  })}
                  type="text"
                  placeholder="Name"
                  className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-colorplaceholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
                {errors.name && <p className="text-red-500 pt-2 text-left">{errors.name?.message}</p>}
              </div>
              <Toaster />
              <div className="mb-6">
                <input
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  type="text"
                  placeholder="Email"
                  className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-colorplaceholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
                {errors.email && <p className="text-red-500 pt-2 text-left">{errors.email?.message}</p>}
              </div>

              <div className="mb-6">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Your password should be at least 6 characters" },
                  })}
                  type="password"
                  placeholder="Password"
                  className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-colorplaceholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
                {errors.password && <p className="text-red-500 pt-2 text-left">{errors.password?.message}</p>}
                {signupError && <p className="text-red-500 pt-2 text-left">{signupError}</p>}
              </div>
              <div className="mb-10">
                <input
                  type="submit"
                  value="Login"
                  className="bordder-primary btn btn-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                />
              </div>
              <p className="text-base text-[#adadad]">
                Already have an account?
                <Link to="/login" className="text-primary hover:underline">
                  Login
                </Link>
              </p>
              <div>
                <span className="absolute top-1 right-1">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1.39737" cy="38.6026" r="1.39737" transform="rotate(-90 1.39737 38.6026)" fill="#3056D3" />
                    <circle cx="1.39737" cy="1.99122" r="1.39737" transform="rotate(-90 1.39737 1.99122)" fill="#3056D3" />
                    <circle cx="13.6943" cy="38.6026" r="1.39737" transform="rotate(-90 13.6943 38.6026)" fill="#3056D3" />
                    <circle cx="13.6943" cy="1.99122" r="1.39737" transform="rotate(-90 13.6943 1.99122)" fill="#3056D3" />
                    <circle cx="25.9911" cy="38.6026" r="1.39737" transform="rotate(-90 25.9911 38.6026)" fill="#3056D3" />
                    <circle cx="25.9911" cy="1.99122" r="1.39737" transform="rotate(-90 25.9911 1.99122)" fill="#3056D3" />
                    <circle cx="38.288" cy="38.6026" r="1.39737" transform="rotate(-90 38.288 38.6026)" fill="#3056D3" />
                    <circle cx="38.288" cy="1.99122" r="1.39737" transform="rotate(-90 38.288 1.99122)" fill="#3056D3" />
                    <circle cx="1.39737" cy="26.3057" r="1.39737" transform="rotate(-90 1.39737 26.3057)" fill="#3056D3" />
                    <circle cx="13.6943" cy="26.3057" r="1.39737" transform="rotate(-90 13.6943 26.3057)" fill="#3056D3" />
                    <circle cx="25.9911" cy="26.3057" r="1.39737" transform="rotate(-90 25.9911 26.3057)" fill="#3056D3" />
                    <circle cx="38.288" cy="26.3057" r="1.39737" transform="rotate(-90 38.288 26.3057)" fill="#3056D3" />
                    <circle cx="1.39737" cy="14.0086" r="1.39737" transform="rotate(-90 1.39737 14.0086)" fill="#3056D3" />
                    <circle cx="13.6943" cy="14.0086" r="1.39737" transform="rotate(-90 13.6943 14.0086)" fill="#3056D3" />
                    <circle cx="25.9911" cy="14.0086" r="1.39737" transform="rotate(-90 25.9911 14.0086)" fill="#3056D3" />
                    <circle cx="38.288" cy="14.0086" r="1.39737" transform="rotate(-90 38.288 14.0086)" fill="#3056D3" />
                  </svg>
                </span>
                <span className="absolute left-1 bottom-1">
                  <svg width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.288" cy="25.9912" r="1.39737" transform="rotate(-90 2.288 25.9912)" fill="#3056D3" />
                    <circle cx="14.5849" cy="25.9911" r="1.39737" transform="rotate(-90 14.5849 25.9911)" fill="#3056D3" />
                    <circle cx="26.7216" cy="25.9911" r="1.39737" transform="rotate(-90 26.7216 25.9911)" fill="#3056D3" />
                    <circle cx="2.288" cy="13.6944" r="1.39737" transform="rotate(-90 2.288 13.6944)" fill="#3056D3" />
                    <circle cx="14.5849" cy="13.6943" r="1.39737" transform="rotate(-90 14.5849 13.6943)" fill="#3056D3" />
                    <circle cx="26.7216" cy="13.6943" r="1.39737" transform="rotate(-90 26.7216 13.6943)" fill="#3056D3" />
                    <circle cx="2.288" cy="38.0087" r="1.39737" transform="rotate(-90 2.288 38.0087)" fill="#3056D3" />
                    <circle cx="2.288" cy="1.39739" r="1.39737" transform="rotate(-90 2.288 1.39739)" fill="#3056D3" />
                    <circle cx="14.5849" cy="38.0089" r="1.39737" transform="rotate(-90 14.5849 38.0089)" fill="#3056D3" />
                    <circle cx="26.7216" cy="38.0089" r="1.39737" transform="rotate(-90 26.7216 38.0089)" fill="#3056D3" />
                    <circle cx="14.5849" cy="1.39761" r="1.39737" transform="rotate(-90 14.5849 1.39761)" fill="#3056D3" />
                    <circle cx="26.7216" cy="1.39761" r="1.39737" transform="rotate(-90 26.7216 1.39761)" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;

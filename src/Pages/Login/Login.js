import React from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,

    handleSubmit,
  } = useForm();

  return (
    <div className="w-11/12 mx-auto py-14">
      <h2 className="text-sky-500 text-3xl font-semibold py-5 text-center">
        Login
      </h2>
      <div className="mx-auto flex justify-center items-center  w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

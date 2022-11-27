import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [status, setStatus] = useState("Buyer");
  const navigate = useNavigate();

  const handleStatus = (event) => {
    event.preventDefault();
    const form = event.target;
    const status = form.status.value;
    console.log(status);
    setStatus(status);
  };

  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, status);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully.");

        saveUser(user.displayName, user.email, status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveUser = (name, email, status) => {
    const user = { name, email, status };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="w-11/12 mx-auto py-14">
      <h2 className="text-sky-500 text-3xl font-semibold py-5 text-center">
        Sign Up
      </h2>
      <form onSubmit={handleStatus} className="card-body">
        <select
          name="status"
          className="select select-bordered w-full lg:w-1/3 mx-auto"
        >
          <option value="Buyer" selected>
            Buyer
          </option>
          <option value="Seller">Seller</option>
        </select>
        <br />
        <input
          className="btn btn-accent w-full lg:w-1/3 mx-auto bg-sky-500 border-none"
          type="submit"
          value="Submit"
        />
      </form>
      <div className="mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
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
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <label className="label">
              <Link to="" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-sky-500 border-none">Sign Up</button>
          </div>
          <div>
            {signUpError && <p className="text-red-600 my-2">{signUpError}</p>}
          </div>
        </form>
        <div className="py-3 text-center">
          <p>
            Already have an account{" "}
            <Link className="text-secondary" to="/login">
              Please Login
            </Link>
          </p>
        </div>
        <div className="p-5">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

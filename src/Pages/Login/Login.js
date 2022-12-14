import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  // const [alreadyRegister, setAlreadyRegister] = useState({});

  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setLoginUserEmail(data.email);
        toast.success("User login Successfully.");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    setLoginError("");
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);

        setLoginUserEmail(user.email);
        toast("If you register then you can login");
        if (token) {
          navigate(from, { replace: true });
          toast.success("User login Successfully.");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.message);
      });
  };

  // const { data: allProduct = [] } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: () =>
  //     fetch(`https://i-tech-server.vercel.app/users?email=${user.email}`).then(
  //       (res) => res.json()
  //     ),
  // });
  // useEffect(() => {
  //   fetch(`https://i-tech-server.vercel.app/users?displayName=${user?.displayName}`)
  //     .then((res) => res.json())
  //     .then((data) => setAlreadyRegister(data));
  // }, []);
  // console.log(alreadyRegister);
  // if(alreadyRegister){
  //   toast.error("user should be")
  // }

  return (
    <div className="w-11/12 mx-auto py-14">
      <h2 className="text-sky-500 text-3xl font-semibold py-5 text-center">
        Login
      </h2>
      <div className="mx-auto w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
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
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div>
            {loginError && <p className="text-red-600 my-2">{loginError}</p>}
          </div>
        </form>
        <div className="py-3 text-center">
          <p>
            Have any account in i-tech ?{" "}
            <Link className="text-secondary" to="/signup">
              Create new Account
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

export default Login;

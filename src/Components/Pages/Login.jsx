import React from "react";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas/Schema";
import { GrCircleInformation } from "react-icons/gr";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ContextApiProvider } from "../context/ContextApi";
import { useContext } from "react";

import "react-toastify/dist/ReactToastify.css";

// let [tem,setTemp] = useState(0);

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  let { toker, setToker, login, setLogin } = useContext(ContextApiProvider);
  const notify = () => {
    toast.success("Sucessfully Logged in", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const failed = () => {
    toast.error(`Failed to Login`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        axios
          .post("URL FOR POSTING THE FORM DATA", values, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(function (response) {
            
          //  setToker(response.data.token)
            // toker=response.data.token
            // console.log(toker);
            // console.log(response.data.token);
            notify();
        
            console.log(response.data.token)
          })
          .catch(function (error) {
            console.log(error);
            failed();
          });
        action.resetForm();
      },
    });
  return (
    <section className=" w-full flex justify-center py-12   h-[100vh] sm:h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] bg-cyan-900 ">
      <div className=" w-[75%] h-[90vh] sm:h-[90vh] md:h-[90vh] lg:h-[90vh] xl:h-[80vh] sm:w-[60%] md:w-[40%] lg:w-[40%]  xl:w-[30%] 2xl:w-[50%] bg-white rounded-lg bg-opacity-10  shadow-xl shadow-slate-800  ">
        <div className="">
          <h1 className=" font-extrabold font-mono  text-gray-300 text-center py-7  text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl">
            Testfreshers LOGIN
          </h1>
        </div>
        <div className="  flex justify-center">
          <form action="" onSubmit={handleSubmit} className="text-gray-400">
            <div className=" h-28 sm:h-32 md:h-32 lg:h-32 xl:h-32 2xl:h-32 ">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl  text-gray-200"
                  htmlFor="firstname"
                >
                  User Name
                </label>
              </div>

              <input
                type="text"
                placeholder="Username"
                name="username"
                autoComplete="off"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className="h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60  outline-none border-[2px] rounded-md text-xl border-green-400 placeholder:text-xl  w-52 pl-4 bg-slate-800 text-gray-400 "
              />
              {errors.username && touched.username ? (
                <p className="text-green-400 ease-in-out ">
                  {errors.username}
                  <GrCircleInformation className="bg-white rounded-3xl " />
                </p>
              ) : null}
            </div>
            <div className="py-4 h-36">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl w-50 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60  text-gray-200"
                  htmlFor="password"
                >
                  Password
                </label>
              </div>

              <input
                type="password"
                placeholder="Password"
                name="password"
                // autoComplete="off"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60  outline-none border-[2px] rounded-md  text-xl border-green-400 placeholder:text-xl  w-52 pl-4 bg-slate-800 text-gray-400"
              />
              {errors.password && touched.password ? (
                <p className="text-green-400 ">
                  {errors.password}
                  <GrCircleInformation className="bg-white rounded-3xl " />
                </p>
              ) : null}
            </div>
            <div className="py-4">
              <button
                type="submit"
                className="h-8 w-20 rounded-md hover:text-white hover:bg-green-600  ease-in-out duration-700  text-black font-mono bg-gray-300"
              >
                Login
              </button>
            </div>
            <div>
              <h4 className="font-mono text-slate-200 hover:text-green-400 cursor-pointer ease-in-out">
                Reset password using mail?
              </h4>
            </div>
            <div>
              <h4 className="font-mono text-slate-200 hover:text-green-400 cursor-pointer ease-in-out">
                Reset password using number?
              </h4>
            </div>

            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

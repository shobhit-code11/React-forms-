import React from "react";
// import { AiOutlinePhone } from "react-icons/ai";
import { useFormik } from "formik";
// import { uuid } from "uuidv4";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import { LoginSchema } from "../schemas/Schema";
import { PersonalInformationSchema } from "../schemas/Schema";
import { GrCircleInformation } from "react-icons/gr";

import axios from "axios";

const initialValues = {
  id: uuid(),
  firstname: "",
  lastname: "",
  dob: "",
  phone: "",
  emailid: "",
  address: "",
  gender: "",
  passport: "",
};

const PersonalInformation = () => {
  const notify = () => {
    toast.success("Sucessfully Updated", {
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
    toast.error(`Failed to Update`, {
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
      validationSchema: PersonalInformationSchema,
      onSubmit: (values, action) => {
        console.log(values);

        axios
          .post("http://localhost:8000/register", values, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(function (response) {
            console.log(response);
            notify();
          })
          .catch(function (error) {
            console.log(error.response);
            failed();
          });
        action.resetForm();
      },
    });

  return (
    <section className=" h-[240vh] xl:h-[100vh] lg:h-[120vh] md:h-[220vh] sm:h-[220vh] xl:w-[100%]  w-full flex justify-center py-6  bg-cyan-900   ">
      <article className=" w-[67%] justify-center  h-auto sm:w-[50%] lg:w-[90%] xl:w-[71%] lg:h-auto xl:h-[80vh] sm:h-auto md:h-auto md:w-[90%] bg-white rounded-lg bg-opacity-10  shadow-xl shadow-slate-800">
        <div className="text-center py-3 flex justify-center items-center border-b-2 border-gray-800">
          <h1 className="font-extrabold font-mono  text-gray-300 text-center   text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-2xl 2xl:text-3xl">
            Personal Information
          </h1>
        </div>
        <div className=" h-72 w-[100%]   ">
          <form
            onSubmit={handleSubmit}
            className="py-4  flex  w-auto px-6  md:px-20 sm:px-12      items-center   gap-y-4 gap-x-6 flex-wrap md:flex-wrap  sm:flex-wrap text-gray-400"
          >
            <div className="h-28">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="firstname"
                >
                  First Name
                </label>
              </div>

              <input
                type="text"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                autoComplete="off"
                onBlur={handleBlur}
                placeholder="please enter the first name"
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-58 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 pl-3  bg-slate-800 text-gray-200"
              />
              {errors.firstname && touched.firstname ? (
                <p className="text-green-400 ease-in-out ">
                  {errors.firstname}
                  <GrCircleInformation className="bg-white rounded-3xl " />
                </p>
              ) : null}
            </div>

            <div className="h-28 ">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
              </div>

              <input
                type="text"
                name="lastname"
                autoComplete="off"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="please enter the last name"
                id="lastname"
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-58 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
              />

              {errors.lastname && touched.lastname ? (
                <p className="text-green-400 ease-in-out ">
                  {errors.lastname}
                  <GrCircleInformation className="bg-white rounded-3xl " />
                </p>
              ) : null}
            </div>

            <div className="h-28 ">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono text-gray-200"
                  htmlFor="dob"
                >
                  Date of Birth
                </label>
              </div>

              <input
                type="date"
                name="dob"
                autoComplete="off"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                id="dob"
                className="h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-58 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 pl-4  bg-slate-800 text-gray-400"
              />
              {errors.dob && touched.dob ? (
                <p className="text-green-400 ease-in-out ">
                  {errors.dob}
                  <GrCircleInformation className="bg-white rounded-3xl " />
                </p>
              ) : null}
            </div>
            <div className="h-28 ">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono   text-gray-200"
                  htmlFor="phone"
                >
                  Mobile Number
                </label>
              </div>

              <input
                type="tel"
                name="phone"
                autoComplete="off"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                id="phone"
                placeholder="please enter your mobile number"
                className="h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-58 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 pl-3  bg-slate-800 text-gray-400 "
              />
              {errors.phone && touched.phone ? (
                <p className="text-green-400 ease-in-out ">
                  {errors.phone}
                  <GrCircleInformation className="bg-white rounded-3xl " />
                </p>
              ) : null}
            </div>

            <div className="h-28 ">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono   text-gray-200"
                  htmlFor="mail"
                >
                  Email-Id
                </label>
              </div>

              <input
                type="email"
                name="emailid"
                autoComplete="off"
                value={values.emailid}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="please enter your email-id"
                id="emailid"
                className="h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-58 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 pl-3  bg-slate-800 text-gray-400 "
              />

              {errors.emailid && touched.emailid ? (
                <p className="text-green-400 ease-in-out ">
                  {errors.emailid}
                  <GrCircleInformation className="bg-white rounded-3xl " />
                </p>
              ) : null}
            </div>

            <div className="h-28 ">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="address"
                >
                  Address
                </label>
              </div>

              <input
                type="text"
                name="address"
                autoComplete="off"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="please enter your address"
                id="address"
                className="h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-58 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
              />

              {errors.address && touched.address ? (
                <p className="text-green-400 ease-in-out ">
                  {errors.address}
                  <GrCircleInformation className="bg-white rounded-3xl " />
                </p>
              ) : null}
            </div>
            <div className="w-full bg-slate-200"></div>

            {/* <div>
              <span className="text-gray-300 text-xl font-mono">Gender</span>
              &nbsp; &nbsp;
              <span>
                <input
                  className="font-mono"
                  type="radio"
                  name="gender"
                  autoComplete="off"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="male"
                />
                <label
                  htmlFor="male"
                  className="font-mono text-gray-300 text-xl"
                >
                  Male
                </label>
              </span>
              &nbsp; &nbsp;
              <span>
                <input type="radio" id="female" name="gender" value="female" />
                <label
                  htmlFor="female"
                  className="font-mono text-gray-300 text-xl"
                >
                  Female
                </label>
              </span>
            </div> */}
            <div>
              <span className="text-gray-300 text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl  font-mono">
                Have Passport?
              </span>
              &nbsp; &nbsp;
              <span>
                <input
                  className="font-mono"
                  type="radio"
                  id="passport"
                  name="passport"
                  value={values.passport}
                />
                <label
                  htmlFor="passport"
                  className="font-mono text-gray-300 text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl  "
                >
                  Yes
                </label>
              </span>
              &nbsp; &nbsp;
              <span>
                <input
                  type="radio"
                  id="passport"
                  name="passport"
                  value={values.passport}
                />
                <label
                  htmlFor="passport"
                  className="font-mono text-gray-300 text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl  "
                >
                  No
                </label>
              </span>
            </div>
            {/* <div>
              <span className="text-gray-300 text-xl font-mono">
                Have Passport?
              </span>
              &nbsp; &nbsp;
              <span>
                <input
                  className="font-mono"
                  type="radio"
                  id="yes"
                  name="passport"
                  value="yes"
                />
                <label
                  htmlFor="yes"
                  className="font-mono text-gray-300 text-xl"
                >
                  Yes
                </label>
              </span>
              &nbsp; &nbsp;
              <span>
                <input type="radio" id="no" name="passport" value="no" />
                <label htmlFor="no" className="font-mono text-gray-300 text-xl">
                  No
                </label>
              </span>
            </div> */}
            <div className="w-full bg-slate-200"></div>

            <div className="py-4">
              {/* {errors==1?(fieldimp()):null} */}
              <button
                type="submit"
                // onClick={notify}
                className="h-8 w-20 rounded-md hover:text-white hover:bg-green-400  ease-in-out duration-700   text-black font-mono bg-gray-300"
              >
                Submit
              </button>
            </div>
            {/* {console.log(errors)} */}

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
      </article>
    </section>
  );
};

export default PersonalInformation;

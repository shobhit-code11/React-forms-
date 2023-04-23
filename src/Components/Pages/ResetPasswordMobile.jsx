import React from "react";
import { GrCircleInformation } from "react-icons/gr";
import { useFormik } from "formik";

const initialValues = {
  mobile:"",
};

const ResetPasswordMobile = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <section className="  w-full flex justify-center    py-12   h-[90vh] sm:h-[90vh] bg-cyan-900 ">
      <div className=" w-[79%] h-[70vh] sm:w-[60%] md:w-[40%] lg:w-[40%]  xl:w-[35%] 2xl:w-[54%] bg-white rounded-lg bg-opacity-10  shadow-xl shadow-slate-800 ">
        <div className="">
          <h1 className=" font-extrabold font-mono  text-gray-300 text-center py-7  text-3xl  ">
            Reset your password
          </h1>
        </div>
        <div className="  flex justify-center items-center h-72">
          <form onSubmit={handleSubmit} action="" className="text-gray-400">
            <div className="py-4 flex items-center justify-center">
              <div class="flex items-center">
                <GrCircleInformation className="bg-white rounded-3xl text-xl" />
                &nbsp;
                <div>
                  <strong className="  text-green-400">
                    check mobile for OTP
                  </strong>
                  {/*                      
                  <span>Technical advisor</span> */}
                </div>
              </div>
            </div>
            <div className="py-4 flex justify-center items-center">
              <input
                type="number"
                name="mobile"
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobile}
                placeholder="Enter your Mobile Number"
                className=" h-12  outline-none border-[2px] rounded-md  text-xl border-green-400 placeholder:text-xl  w-60 pl-4 bg-slate-800 text-gray-400  "
              />
            </div>
            <div className="py-4 flex justify-center items-center ">
              <button type="submit" className=" h-8 w-20 rounded-md hover:text-white hover:bg-green-400  ease-in-out duration-700  text-black font-mono bg-gray-300">
                Submit
              </button>
            </div>
            <div>
              <h4 className="font-mono text-slate-200 py-6 hover:text-green-400 cursor-pointer ease-in-out text-lg">
                Enter your phone number above to reset password
              </h4>
            </div>
            <div>
              <h4 className="font-mono text-slate-700"></h4>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordMobile;

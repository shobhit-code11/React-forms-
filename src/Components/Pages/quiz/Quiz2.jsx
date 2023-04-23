import React, { useState } from "react";

const Quiz2 = () => {
 
  const [questionCounter, setQuestionCounter] = useState(0);
  const [attemptCounter, setAttemptCounter] = useState(0);
  const [percentageCounter, setPercentageCounter] = useState(0);



  function handleIncrequestionCounter(e) {
    e.preventDefault();
    setQuestionCounter(questionCounter + 1);
  }
  function handleDecrequestionCounter(e){
    e.preventDefault();
    setQuestionCounter(questionCounter-1)
    
   
  }
  function handleIncreattemptCounter(e) {
    e.preventDefault();
    setAttemptCounter(attemptCounter + 1);
  }
  function handleDecreattemptCounter(e){
    e.preventDefault();
    setAttemptCounter(attemptCounter-1)
  }
  function handleIncrepercentageCounter(e) {
    e.preventDefault();
    setPercentageCounter(percentageCounter + 1);
  }
  function handleDecrepercentageCounter(e){
    e.preventDefault();
    setPercentageCounter(percentageCounter-1)
  }
 
 console.log(questionCounter);



  return (
    <section className=" w-full flex justify-center py-10 px-10 bg-cyan-900   ">
      <article className=" px-24  my-5 max-w-max mx-auto  bg-white rounded-lg bg-opacity-10  shadow-xl shadow-slate-800">
        <div className="text-center py-3 flex justify-center items-center ">
          <h1 className="font-extrabold font-mono  text-gray-300 text-center   text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-2xl 2xl:text-3xl">
            Create Question Paper
          </h1>
        </div>
        <hr className="w-full"></hr>

        <div>
          <form
            action=""
            className="py-10 flex items-center gap-x-4 gap-y-12 flex-wrap md:flex-wrap  sm:flex-wrap text-gray-400 "
          >
            <div className=" ">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="title"
                >
                  Title
                </label>
              </div>
              <input
                type="text"
                id="title"
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg w-56 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
                placeholder="Title"
              />
            </div>

            <div className="">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="subject"
                >
                  Select Subject
                </label>
              </div>
              <select
                name="subject"
                id="subject"
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-56 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled hidden>
                  Select Subject
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div className="">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="chapter"
                >
                  Select Chapter
                </label>
              </div>
              <select
                name="subject"
                id="subject"
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-56 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled hidden>
                  Select Chapter
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div className=" ">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="topics"
                >
                  Select Topics
                </label>
              </div>
              <select
                name="topics"
                id="topics"
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-56 sm:w-60 md:w-60 lg:w-60 xl:w-64 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled hidden>
                  Select Topics
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div>
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="batchcode"
                >
                  Select Batch Code
                </label>
              </div>
              <select
                name="batchcode"
                id="batchcode"
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-56 sm:w-60 md:w-60 lg:w-60 xl:w-64 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled hidden>
                  Select Batch Code
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div>
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono   text-gray-200"
                  htmlFor="maxquestion"
                >
                  Max Question
                </label>
              </div>
              <button disabled={questionCounter<1} onClick={handleDecrequestionCounter}  className="  h-6 sm:h-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 w-4 sm:w-4 md:w-6 lg:w-6 xl:w-6 2xl:w-6 bg-green-400 text-black text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl   font-extrabold">
                -
              </button>
              <input
                type="text"
                value={questionCounter}
              
                placeholder="Max Questions"
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12 text-center  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-54 sm:w-60 md:w-60 lg:w-60 xl:w-48 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
              />
              <button onClick={handleIncrequestionCounter} className=" h-6 sm:h-6 md:h-6 lg:h-6 xl:h-8 2xl:h-8 w-4 sm:w-4 md:w-6 lg:w-6 xl:w-6 2xl:w-6 bg-green-400 text-black text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl   font-extrabold">
                +
              </button>
            </div>
            <div>
              <div className="pb-2 ">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="attempts"
                >
                  Attempts
                </label>
              </div> 
              <button disabled={attemptCounter<1} onClick={handleDecreattemptCounter} className="  h-6 sm:h-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 w-4 sm:w-4 md:w-6 lg:w-6 xl:w-6 2xl:w-6 bg-green-400 text-black text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl   font-extrabold">
                -
              </button>
              <input
                type="text"
                value={attemptCounter}
                placeholder="Attempts"
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12 text-center outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-54 sm:w-60 md:w-60 lg:w-60 xl:w-48 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
              />
              <button onClick={handleIncreattemptCounter} className=" h-6 sm:h-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 w-4 sm:w-4 md:w-6 lg:w-6 xl:w-6 2xl:w-6 bg-green-400 text-black text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl   font-extrabold">
                +
              </button>
            </div>
            <div>
              <div className="pb-2 ">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="passingpercentage"
                >
                  Passing Percentage
                </label>
              </div>
              <button disabled={percentageCounter<1} onClick={handleDecrepercentageCounter} className="  h-6 sm:h-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 w-4 sm:w-4 md:w-6 lg:w-6 xl:w-6 2xl:w-6 bg-green-400 text-black text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl   font-extrabold">
                -
              </button>
              <input
                type="text"
                value={percentageCounter}
                placeholder="Pass Percentage"
                className="   h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  text-center border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-54 sm:w-60 md:w-60 lg:w-60 xl:w-48 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
              />
              <button onClick={handleIncrepercentageCounter} className=" h-6 sm:h-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 w-4 sm:w-4 md:w-6 lg:w-6 xl:w-6 2xl:w-6 bg-green-400 text-black text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl   font-extrabold ">
                +
              </button>
            </div>
            <div>
              <span className="text-slate-400 text-xl font-mono"></span>
              &nbsp; &nbsp;
              <span>
                <input
                  className="font-mono"
                  type="checkbox"
                  id="male"
                  name="gender"
                  value="male"
                />
                &nbsp; &nbsp;
                <label
                  for="male"
                  className="font-mono  text-slate-200 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl "
                >
                  Negative marking
                </label>
              </span>
            </div>
            <div>
              <span className="text-slate-200 text-xl font-mono"></span>
              &nbsp; &nbsp;
              <span>
                <input
                  className="font-mono"
                  type="checkbox"
                  id="male"
                  name="gender"
                  value="male"
                />
                &nbsp; &nbsp;
                <label
                  for="male"
                  className="font-mono  text-slate-200 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl "
                >
                  Random Question
                </label>
              </span>
            </div>
            <div>
              <span className="text-slate-200 text-xl font-mono"></span>
              &nbsp; &nbsp;
              <span>
                <input
                  className="font-mono"
                  type="checkbox"
                  id="male"
                  name="gender"
                  value="male"
                />
                &nbsp; &nbsp;
                <label
                  for="male"
                  className="font-mono  text-slate-200 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl "
                >
                  Show Results
                </label>
              </span>
            </div>
            <div className="pl-3">
              <span>
                <input
                  className="font-mono"
                  type="Checkbox"
                  id="yes"
                  name="passport"
                  value="yes"
                />
                &nbsp;
                <label
                  for="yes"
                  className="font-mono text-slate-200 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl "
                >
                  Add Automatically
                </label>
              </span>
              &nbsp; &nbsp;
              <span className="">
                <input type="checkbox" id="no" name="passport" value="no" />
                &nbsp;
                <label
                  for="no"
                  className="font-mono  text-slate-200 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl "
                >
                  Add Manually
                </label>
              </span>
            </div>
            <div className="">
              <div className="pb-2 ">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="firstname"
                >
                  Select Question Bank
                </label>
              </div>
              <select
                name="subject"
                id="subject"
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-56 sm:w-60 md:w-60 lg:w-60 xl:w-64 2xl:w-64   bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled hidden>
                  Select Question Bank
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>

            <div>
              <div className="pb-2 ">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="finishtime"
                >
                  Finish time in sec
                </label>
              </div>
              <button className="h-6 sm:h-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 w-4 sm:w-4 md:w-6 lg:w-6 xl:w-6 2xl:w-6 bg-green-400 text-black text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl   font-extrabold">
                -
              </button>

              <input
                type="text"
                placeholder="finishing time(sec) "
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-54 sm:w-60 md:w-60 lg:w-60 xl:w-44 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
              />
              <button className="h-6 sm:h-6 md:h-8 lg:h-8 xl:h-8 2xl:h-8 w-4 sm:w-4 md:w-6 lg:w-6 xl:w-6 2xl:w-6 bg-green-400 text-black text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl  font-extrabold">
                +
              </button>
            </div>
            <div className="">
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="starttime"
                >
                  Select start time
                </label>
              </div>
              <input
                type="text"
                id="select start time"
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-56 sm:w-60 md:w-60 lg:w-60 xl:w-50 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
                placeholder="Select Start Time"
              />
            </div>

            <div>
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="endtime"
                >
                  Select end time
                </label>
              </div>
              <input
                type="text"
                id="select end time"
                className=" h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-56 sm:w-60 md:w-60 lg:w-60 xl:w-50 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
                placeholder="Select End Time"
              />
            </div>
            <div>
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="firstname"
                >
                  Select Branch
                </label>
              </div>
              <select
                name="subject"
                id="subject"
                className="h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-56 sm:w-60 md:w-60 lg:w-60 xl:w-64 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled hidden>
                  Select Branch
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div>
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="firstname"
                >
                  Description
                </label>
              </div>
              <input
                type="tel"
                id="Description"
                className="h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-56 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
                placeholder="Description"
              />
            </div>

            <div>
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="firstname"
                >
                  Sucess Text
                </label>
              </div>
              <input
                type="text"
                id="sucess"
                className="h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-56 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
                placeholder="Sucess Text"
              />
            </div>

            <div>
              <div className="pb-2">
                <label
                  className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-mono  text-gray-200"
                  htmlFor="failtext"
                >
                  Fail Text
                </label>
              </div>
              <input
                type="text"
                id="failtext"
                className="h-10 sm:h-12 md:h-12 lg:h-12 xl:h-12 2xl:h-12  outline-none border-[2px] rounded-md  border-green-400 text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg   w-56 sm:w-60 md:w-60 lg:w-60 xl:w-60 2xl:w-60 pl-3  bg-slate-800 text-gray-400"
                placeholder="Fail Text"
              />
            </div>

            {/* <div className="w-96">

            </div> */}
            <hr className="w-full"></hr>

            <div className="w-20 sm:w-60 md:w-60 lg:w-60 xl-w-60 2xl:w-60">
              <button className="h-8  sm:h-10 md:h-12 lg:h-12 xl-h-12 2xl:h-12  w-20 sm:w-28 md:w-28 lg:w-28 xl-w-28 2xl:w-28 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl  rounded-md  text-black font-mono bg-gray-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Quiz2;

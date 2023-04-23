import React, { useState } from "react";

const ProgramQuestion = () => {
  // const [selectArea, setSelectArea] = useState({});
  // const [counter, setCounter] = useState(0);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setCounter(counter + 1);
  // };
  const [inputFields, setInputFields] = useState([{ question: "" }]);
  const [expectedInput, setExpectedInput] = useState([{ exinput: "" }]);
  const [expectedOutput, setExpectedOutput] = useState([{ exoutput: "" }]);
  const [inpCounter, setInpCounter] = useState(0);
  const [counter, setCounter] = useState(0);

  const addInputFields = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    setInputFields([...inputFields, { question: "" }]);
  };

  const removeFields = (e, index) => {
    e.preventDefault();
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };

  const handleChange = (index, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
    console.log(list);
  };

  const addExpectedInput = (e) => {
    e.preventDefault();
    setInpCounter(inpCounter + 1);
    setExpectedInput([...expectedInput, { exinput: "" }]);
  };

  const removeExpectedInput = (e, index) => {
    e.preventDefault();
    const rows = [...expectedInput];
    rows.splice(index, 1);
    setExpectedInput(rows);
  };

  const handleInputChange = (index, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...expectedInput];
    list[index][name] = value;
    setExpectedInput(list);
    console.log(list);
  };
  const addExpectedOutput = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    setExpectedOutput([...expectedOutput, { exoutput: "" }]);
  };

  const removeExpectedOutput = (e, index) => {
    e.preventDefault();
    const rows = [...expectedOutput];
    rows.splice(index, 1);
    setExpectedOutput(rows);
  };

  const handleOutputChange = (index, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...expectedOutput];
    list[index][name] = value;
    setExpectedOutput(list);
    console.log(list);
  };

  return (
    <section className=" h-[480vh] lg:h-[100vh] md:h-[390vh] sm:h-[200vh] xl:h-[350vh] w-full flex justify-center py-10  bg-cyan-900   ">
      <article className=" w-[90%]  h-auto sm:w-[90%] lg:w-[90%] lg:h-auto xl:h-auto sm:h-auto md:h-auto md:w-[75%] bg-white rounded-lg bg-opacity-10  shadow-xl shadow-slate-800">
        <div className="text-center py-3 flex justify-center items-center border-b-2 border-gray-400">
          <h1 className="font-extrabold font-mono  text-gray-300 text-center   text-3xl">
            Create Program Question
          </h1>
        </div>
        <div className=" h-72 w-[100%]   ">
          <form
            action=""
            className="py-16  flex  px-20 font-mono   items-center  gap-x-16 gap-y-16 flex-wrap md:flex-wrap  sm:flex-wrap text-gray-400"
          >
            <div>
              <label
                htmlFor="questions"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-200"
              >
                Questions
              </label>
              <textarea
                id="message"
                rows={3}
                cols={50}
                className="block p-2.5 w-full text-lg  text-gray-400 bg-slate-800 rounded-md border-[2px] border-green-400 focus:ring-green-400 focus:border-green-400 dark:bg-slate-800 dark:border-green-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
                placeholder="Type your question..."
                defaultValue={""}
              />
            </div>
            <div>
              <label
                htmlFor="explanation"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-200"
              >
                Explanation
              </label>
              <textarea
                id="message"
                rows={3}
                cols={50}
                className="block p-2.5 w-full text-lg  text-gray-400 bg-slate-800 rounded-md border-[2px] border-green-400 focus:ring-green-400 focus:border-green-400 dark:bg-slate-800 dark:border-green-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
                placeholder="Write an explanation for the question..."
                defaultValue={""}
              />
            </div>

            <hr className="w-full "></hr>

            <div>
              <select
                name="subject"
                id="subject"
                
                
                className="h-12    outline-none border-[2px] text-xl rounded-md  border-green-400 placeholder:text-xl  w-58 pl-4 bg-slate-800 text-gray-400 "
              >
                <option value="none" selected disabled>
                  Select Subject
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div>
              <select
                name="subject"
                id="subject"
                className="h-12  outline-none border-[2px] text-xl rounded-md  border-green-400 placeholder:text-xl  w-60 pl-4 bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled >
                  Select Chapter
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div>
              <select
                name="subject"
                id="subject"
                className="h-12  outline-none border-[2px] text-xl rounded-md  border-green-400 placeholder:text-xl  w-60 pl-4 bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled >
                  Select Topics
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div>
              <select
                name="subject"
                id="subject"
                className="h-12  outline-none border-[2px] text-xl rounded-md  border-green-400 placeholder:text-xl  w-60 pl-4 bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled >
                  Select Related Topics
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>

            <div>
              <select
                name="subject"
                id="subject"
                className="h-12  outline-none border-[2px] text-xl rounded-md  border-green-400 placeholder:text-xl  w-60 pl-4 bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled >
                  Select Difficulty Level
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div>
              <select
                name="subject"
                id="subject"
                className="h-12  outline-none border-[2px] text-xl rounded-md  border-green-400 placeholder:text-xl  w-60 pl-4 bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled >
                  Select Question Bank
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <hr className="w-full "></hr>
            <div>
              <button className=" mr-3 h-8 w-6 bg-green-400 text-black text-xl  font-extrabold">
                -
              </button>
              <input
                type="text"
                placeholder="Mark(In Numbers)"
                className=" w-52 pl-4 text-gray-400 h-12  outline-none border-[2px] rounded-md  text-xl border-green-400 placeholder:text-xl   bg-slate-800"
              />
              <button className="ml-3 h-8 w-6 bg-green-400 text-black text-xl  font-extrabold">
                +
              </button>
            </div>
            <div>
              <button className=" mr-3 h-8 w-6 bg-green-400 text-black text-xl  font-extrabold">
                -
              </button>
              <input
                type="text"
                placeholder="Time To Solve (in sec)"
                className="w-72 pl-4 text-gray-400 h-12  outline-none border-[2px] rounded-md  text-xl border-green-400 placeholder:text-xl   bg-slate-800"
              />
              <button className="ml-3 h-8 w-6 bg-green-400 text-black text-xl  font-extrabold">
                +
              </button>
            </div>
            <div>
              <select
                name="subject"
                id="subject"
                className="h-12  outline-none border-[2px] text-xl rounded-md  border-green-400 placeholder:text-xl  w-64 pl-4 bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled hidden>
                  Select Keywords
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div>
              <select
                name="subject"
                id="subject"
                className="h-12  outline-none border-[2px] text-xl rounded-md  border-green-400 placeholder:text-xl  w-54 pl-4 bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled hidden>
                  Select Sources
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div>
              <select
                name="subject"
                id="subject"
                className="h-12  outline-none border-[2px] text-xl rounded-md  border-green-400 placeholder:text-xl  w-58 pl-4 bg-slate-800 text-gray-400"
              >
                <option value="none" selected disabled hidden>
                  Select Language
                </option>
                <option value="Advance Java">Advance Java</option>
                <option value="Advance Java">Javascript</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <div>
              <input
                type="file"
                id="sucess"
                className="h-12  outline-none border-[2px] text-xl rounded-md pt-2  border-green-400 placeholder:text-xl  w-72 pl-4 bg-slate-800 text-gray-400"
                placeholder="Sucess Text"
              />
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
                  htmlFor="male"
                  className="font-mono  text-slate-200 text-xl"
                >
                  Require TestCases
                </label>
              </span>
            </div>
            <hr className="w-full "></hr>
            <div>
              <label
                htmlFor="questions"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-200"
              >
                Sample Input
              </label>
              <textarea
                id="message"
                rows={3}
                cols={50}
                className="block p-2.5 w-full text-lg  text-gray-400 bg-slate-800 rounded-md border-[2px] border-green-400 focus:ring-green-400 focus:border-green-400 dark:bg-slate-800 dark:border-green-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
                placeholder="Type Sample Input..."
                defaultValue={""}
              />
            </div>
            <div>
              <label
                htmlFor="explanation"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-200"
              >
                Sample Output
              </label>
              <textarea
                id="message"
                rows={3}
                cols={50}
                className="block p-2.5 w-full text-lg  text-gray-400 bg-slate-800 rounded-md border-[2px] border-green-400 focus:ring-green-400 focus:border-green-400 dark:bg-slate-800 dark:border-green-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
                placeholder="Type Sample Output..."
                defaultValue={""}
              />
            </div>
            <hr className="w-full "></hr>

            <div className="py-4">
              <button
                onClick={addInputFields}
                className="h-12 w-40 text-xl  rounded-md text-black font-mono bg-green-400"
              >
                Add options
              </button>
            </div>

            <div className="flex gap-4">
              {inputFields.slice(0, 4).map((data, index) => {
                const { question } = data;
                return (
                  <div key={index}>
                    <div>
                      <span>
                        <select
                          onChange={(e) => handleChange(index, e)}
                          value={question}
                          name="question"
                          id="subject"
                          className="h-12  outline-none border-[2px] text-xl rounded-md  border-green-400 placeholder:text-xl  w-60 pl-4 bg-slate-800 text-gray-400"
                        >
                          <option value="none" selected disabled hidden>
                            Related Exam
                          </option>
                          <option value="Advance Java">Advance Java</option>
                          <option value="Advance Java">Javascript</option>
                          <option value="Java">Java</option>
                        </select>
                      </span>
                      <span>
                        <input
                          type="date"
                          id="date"
                          className="h-12  outline-none border-[2px] text-xl rounded-md  border-green-400 placeholder:text-xl  w-60 pl-4 bg-slate-800 text-gray-400"
                          placeholder="Related Exam Date"
                        />
                      </span>
                    </div>
                    {inputFields.length !== 1 ? (
                      <button
                        onClick={removeFields}
                        className="bg-red-900 text-white rounded h-6 w-12"
                      >
                        {" "}
                        <h1>X</h1>
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <hr className="w-full "></hr>

            <div>
              <div>
                <div className="py-2">
                  <button
                    onClick={addExpectedInput}
                    className="h-8 w-16 text-xl rounded-md text-black font-mono bg-green-400"
                  >
                    Add +
                  </button>
                </div>
                <div className="flex gap-4">
                  {expectedInput.slice(0, 4).map((data, index) => {
                    const { expinput } = data;

                    return (
                      <div>
                        <label
                          htmlFor="questions"
                          className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-200"
                        >
                          Input
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          cols={expectedInput > 1 ? 30 : 60}
                          className="block p-2.5 w-full text-lg  text-gray-400 bg-slate-800 rounded-md border-[2px] border-green-400 focus:ring-green-400 focus:border-green-400 dark:bg-slate-800 dark:border-green-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
                          placeholder="Type Sample Input..."
                          defaultValue={""}
                        />
                        {expectedInput.length !== 1 ? (
                          <button
                            onClick={removeExpectedInput}
                            className="bg-red-900 text-white rounded h-6 w-12"
                          >
                            {" "}
                            <h1>X</h1>
                          </button>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="py-8">
                <div className="py-2">
                  <button
                    onClick={addExpectedOutput}
                    className="h-8 w-16 text-xl rounded-md text-black font-mono bg-green-400"
                  >
                    Add +
                  </button>
                </div>
                <div className="flex gap-4">
                  {expectedOutput.slice(0, 4).map((data, index) => {
                    const { expOutput } = data;

                    return (
                      <div>
                        <label
                          htmlFor="questions"
                          className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-200"
                        >
                          Expected Output
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          cols={expOutput >= 1 ? 30 : 60}
                          className="block p-2.5 w-full text-lg  text-gray-400 bg-slate-800 rounded-md border-[2px] border-green-400 focus:ring-green-400 focus:border-green-400 dark:bg-slate-800 dark:border-green-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
                          placeholder="Type Sample Output..."
                          defaultValue={""}
                        />
                        {expectedOutput.length !== 1 ? (
                          <button
                            onClick={removeExpectedOutput}
                            className="bg-red-900 text-white rounded h-6 w-12"
                          >
                            {" "}
                            <h1>X</h1>
                          </button>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr className="w-full "></hr>

            <div className="py-4">
              <button className="h-12 w-28 text-xl rounded-md text-black font-mono bg-green-400">
                Submit
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default ProgramQuestion;

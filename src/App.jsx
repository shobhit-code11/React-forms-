import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Pages/Login";
import PersonalInformation from "./Components/Pages/PersonalInformation";
import LongAnswer from "./Components/Pages/Questions/LongAnswer";
import ProgramQuestion from "./Components/Pages/Questions/ProgramQuestion";
import TfQuestion from "./Components/Pages/Questions/TrueFlase";
import Quiz from "./Components/Pages/quiz/Quiz";
import Quiz2 from "./Components/Pages/quiz/Quiz2";
import ResetPassword from "./Components/Pages/ResetPassword";
import ResetPasswordMobile from "./Components/Pages/ResetPasswordMobile";
import ContextApi from "./Components/context/ContextApi";

const App = () => {
  return (
    <ContextApi>
       <div>
      <Navbar />
      <Login/>
      
      {/* <ResetPassword/>  */}
      {/* <ResetPasswordMobile/> */}
      {/* <PersonalInformation /> */}
      {/* <Footer/> */}
      {/* <Quiz/> */}
      {/* <Quiz2/>  */}
      {/* <ProgramQuestion/> */}
      {/* <LongAnswer/> */}
      {/* <TfQuestion/> */}
    </div>

    </ContextApi>
   
  );
};

export default App;

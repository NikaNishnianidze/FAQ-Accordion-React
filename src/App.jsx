import { useState } from "react";
import "./App.css";
import illustrationMobile from "../public/assets/illustration-woman-online-mobile.svg";
import illustrationDesktop from "../public/assets/illustration-woman-online-desktop.svg";
import Question from "./components/question/Question";
import shadowImage from "../public/assets/bg-pattern-mobile.svg";
import questions from "./questions.json";
import boxImage from "../public/assets/illustration-box-desktop.svg";
import desktopBackground from "../public/assets/bg-pattern-desktop.svg";

function App() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="container">
        <div className="images">
          <img
            src={illustrationMobile}
            alt="mobile illu"
            className="mobile-image"
          />
          <img
            src={illustrationDesktop}
            alt="desktop illu"
            className="desktop-image"
          />
          <img src={shadowImage} alt="shadow effect" className="shadow" />
          <img src={boxImage} alt="box image" className="box" />
        </div>

        <div className="questions-div">
          <h1>FAQ</h1>
          {questions.map((questionsObj, index) => {
            return (
              <Question
                key={index}
                active={active}
                setActive={setActive}
                questionsObj={questionsObj}
                questionNumber={index + 1}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

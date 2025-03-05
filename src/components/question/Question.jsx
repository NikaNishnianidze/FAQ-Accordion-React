import "./question.css";
import arrowImage from "../../../public/assets/icon-arrow-down.svg";

export default function Question({
  active,
  setActive,
  questionsObj,
  questionNumber,
}) {
  return (
    <>
      <div className="question-div">
        <div
          className="question"
          onClick={() => {
            if (active == questionNumber) {
              setActive();
            } else {
              setActive(questionNumber);
            }
          }}
        >
          <p
            className="question-text"
            style={
              ({ color: active == questionNumber ? "#1E1F36" : "" },
              { fontWeight: active == questionNumber ? "700" : "" })
            }
          >
            {questionsObj.question}
          </p>
          <img
            src={arrowImage}
            alt="arrow image"
            style={{
              transform: active == questionNumber ? "rotate(180deg)" : "",
            }}
          />
        </div>
        {active == questionNumber ? (
          <p className="answer-text">{questionsObj.answer}</p>
        ) : null}
      </div>
    </>
  );
}

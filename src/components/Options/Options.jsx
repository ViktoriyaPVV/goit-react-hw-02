import React from "react";
import s from "./Options.module.css";
const Options = ({
  handleChangeFeedbackData,
  resetFeedback,
  totalFeedback,
}) => {
  return (
    <div className={s.container}>
      <button onClick={() => handleChangeFeedbackData("good")}>Good</button>
      <button onClick={() => handleChangeFeedbackData("neutral")}>
        Neutral
      </button>
      <button onClick={() => handleChangeFeedbackData("bad")}>Bad</button>
      {totalFeedback > 0 ? <button onClick={resetFeedback}>Reset</button> : ""}
    </div>
  );
};

export default Options;

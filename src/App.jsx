import React, { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedbackData, setFeedbackData] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("feedback"));
    if (savedData?.length) {
      return { good: 0, neutral: 0, bad: 0 };
    }
    return savedData;
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedbackData));
  }, [feedbackData]);

  const totalFeedback =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;

  const positiveFeedback = Math.round(
    (feedbackData.good / totalFeedback) * 100
  );

  const handleChangeFeedbackData = (variant) => {
    setFeedbackData((prev) => ({ ...prev, [variant]: prev[variant] + 1 }));
  };

  const resetFeedback = () => {
    setFeedbackData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <Description />
      <Options
        handleChangeFeedbackData={handleChangeFeedbackData}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackData={feedbackData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
};

export default App;

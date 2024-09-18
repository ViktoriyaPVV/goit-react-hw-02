import React from "react";

const Feedback = ({ feedbackData, positiveFeedback, totalFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedbackData.good}</li>
        <li>Neutral: {feedbackData.neutral}</li>
        <li>Bad: {feedbackData.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive:{positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;

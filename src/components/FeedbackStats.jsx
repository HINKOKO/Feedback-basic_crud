import React from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackData from '../data/FeedBackData';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // calculate rating averages
  let averages =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  averages = averages.toFixed(1).replace(/[.,]0$/, '');

  console.log(averages);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averages) ? 0 : averages}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };

export default FeedbackStats;

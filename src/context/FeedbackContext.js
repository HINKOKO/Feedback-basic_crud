import { createContext, useState, useEffect } from 'react';
// we bring useEffect since we wanna display data as soon as the data from json server loads
// import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();
const prox = 'http://localhost:5000';

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); // true by default
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`${prox}/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // Delete a feedback based on its id
  const deleteFeedback = async id => {
    if (window.confirm('Are you sure you wanna delete ?')) {
      await fetch(`${prox}/feedback/${id}`, { method: 'DELETE' });

      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  // Add new feedback
  const addFeedback = async newFeedback => {
    const response = await fetch(`${prox}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    // newFeedback.id = uuidv4(); json server will assing itself new id
    setFeedback([data, ...feedback]);
  };

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    // console.log(id, updItem);
    const response = await fetch(`${prox}/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();
    setFeedback(
      feedback.map(item => (item.id === id ? { ...item, ...data } : item))
    );
  };

  // Set item to the updated
  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        editFeedback,
        deleteFeedback,
        addFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

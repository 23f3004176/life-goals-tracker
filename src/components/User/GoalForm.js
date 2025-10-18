import React, { useState } from 'react';
import { db, auth } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function GoalForm({ onGoalAdded }) {
  const [goalData, setGoalData] = useState({
    title: '',
    description: '',
    category: 'personal',
    priority: 'medium',
    targetDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoalData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!goalData.title.trim()) {
      setError('Please enter a goal title');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const goalsRef = collection(db, 'goals');
      await addDoc(goalsRef, {
        ...goalData,
        userId: auth.currentUser.uid,
        userEmail: auth.currentUser.email,
        status: 'active',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      // Reset form
      setGoalData({
        title: '',
        description: '',
        category: 'personal',
        priority: 'medium',
        targetDate: ''
      });

      if (onGoalAdded) {
        onGoalAdded();
      }
    } catch (err) {
      console.error('Error adding goal:', err);
      setError('Failed to add goal. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="goal-form">
      <h2>Add New Goal</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Goal Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={goalData.title}
            onChange={handleChange}
            placeholder="Enter your goal"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={goalData.description}
            onChange={handleChange}
            placeholder="Describe your goal in detail"
            rows="4"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={goalData.category}
              onChange={handleChange}
            >
              <option value="personal">Personal</option>
              <option value="professional">Professional</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
              <option value="financial">Financial</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={goalData.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="targetDate">Target Date</label>
            <input
              type="date"
              id="targetDate"
              name="targetDate"
              value={goalData.targetDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? 'Adding Goal...' : 'Add Goal'}
        </button>
      </form>
    </div>
  );
}

export default GoalForm;

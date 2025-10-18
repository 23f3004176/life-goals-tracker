import React, { useState } from 'react';
import { db } from '../../firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

function GoalItem({ goal, onEdit, onRefresh }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this goal?')) {
      setDeleting(true);
      try {
        await deleteDoc(doc(db, 'goals', goal.id));
        onRefresh();
      } catch (error) {
        console.error('Error deleting goal:', error);
        alert('Failed to delete goal');
      } finally {
        setDeleting(false);
      }
    }
  };

  const handleToggleComplete = async () => {
    try {
      await updateDoc(doc(db, 'goals', goal.id), {
        completed: !goal.completed
      });
      onRefresh();
    } catch (error) {
      console.error('Error updating goal:', error);
    }
  };

  return (
    <div className="goal-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}>
          {goal.title}
        </h3>
        <div>
          <button 
            className="btn btn-secondary" 
            onClick={handleToggleComplete}
            style={{ marginRight: '10px' }}
          >
            {goal.completed ? '✅⁂<��� Mark Incomplete' : '★ Mark Complete'}
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => onEdit(goal)}
            style={{ marginRight: '10px' }}
          >
            🏺 Edit
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={handleDelete}
            disabled={deleting}
          >
            🗑… Delete
          </button>
        </div>
      </div>
      <p>{goal.description}</p>
      {goal.category && <p style={{ color: '#666' }}>Category: {goal.category}</p>}
      {goal.deadline && (<p style={{ color: '#666' }}>Deadline: {goal.deadline}</p>)}
      <p style={{ color: goal.completed ? '#4caf50' : '#f44336' }}>
        Status: {goal.completed ? '🎉 Completed' : '💨 In Progress'}
      </p>
    </div>
  );
}

export default GoalItem;
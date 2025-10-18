import React from 'react';
import GoalItem from './GoalItem';

function GoalList({ goals, onEdit, onRefresh }) {
  if (goals.length === 0) {
    return (
      <div className="card">
        <p style={{ textAlign: 'center', color: '#999' }}>
          No goals yet. Start by adding your first goal! 🎯
        </p>
      </div>
    );
  }

  return (
    <div>
      {goals.map((goal) => (
        <GoalItem key={goal.id} goal={goal} onEdit={onEdit} onRefresh={onRefresh} />
      ))}
    </div>
  );
}

export default GoalList;
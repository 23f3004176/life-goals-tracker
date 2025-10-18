import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { signOut } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import GoalList from './GoalList';
import GoalForm from './GoalForm';

function Dashboard() {
  const [goals, setGoals] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchGoals = async () => {
    try {
      const goalsQuery = query(
        collection(db, 'goals'),
        where('userId', '==', auth.currentUser.uid)
      );
      const querySnapshot = await getDocs(goalsQuery);
      const goalsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGoals(goalsData);
    } catch (error) {
      console.error('Error fetching goals:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleAddGoal = () => {
    setEditingGoal(null);
    setShowForm(true);
  };

  const handleEditGoal = (goal) => {
    setEditingGoal(goal);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingGoal(null);
    fetchGoals();
  };

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>My Goals Dashboard ✨️</h2>
        <div>
          <button className="btn btn-primary" onClick={handleAddGoal}>
            + Add New Goal
          </button>
          <button className="btn btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {showForm && (
        <GoalForm goal={editingGoal} onClose={handleCloseForm} />
      )}

      <GoalList goals={goals} onEdit={handleEditGoal} onRefresh={fetchGoals} />
    </div>
  );
}

export default Dashboard;
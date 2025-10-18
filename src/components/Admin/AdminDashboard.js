import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      setUserData({
        email: auth.currentUser.email,
        uid: auth.currentUser.uid
      });
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
      
      <div className="admin-content">
        <div className="welcome-section">
          <h2>Welcome, Admin!</h2>
          {userData && (
            <div className="user-info">
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>User ID:</strong> {userData.uid}</p>
            </div>
          )}
        </div>

        <div className="admin-stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p className="stat-number">Coming Soon</p>
          </div>
          <div className="stat-card">
            <h3>Total Goals</h3>
            <p className="stat-number">Coming Soon</p>
          </div>
          <div className="stat-card">
            <h3>Active Users</h3>
            <p className="stat-number">Coming Soon</p>
          </div>
        </div>

        <div className="admin-actions">
          <h3>Admin Actions</h3>
          <p>Admin features will be available soon.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

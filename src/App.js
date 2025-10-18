import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/User/Dashboard';
import AdminDashboard from './components/Admin/AdminDashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Check if user is admin
        try {
          const idToken = await currentUser.getIdToken();
          // Check custom claims or database for admin status
          // For simplicity, we'll check email or use a database lookup
          setIsAdmin(currentUser.email === 'admin@example.com');
        } catch (error) {
          console.error('Error checking admin status:', error);
        }
      } else {
        setIsAdmin(false);
      }
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Life Goals Tracker 🎯</h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  isAdmin ? <Navigate to="/admin" replace /> : <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" replace />} />
            <Route
              path="/dashboard"
              element={user && !isAdmin ? <Dashboard /> : <Navigate to="/" replace />}
            />
            <Route
              path="/admin"
              element={user && isAdmin ? <AdminDashboard /> : <Navigate to="/" replace />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

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
        try {
          const idToken = await currentUser.getIdToken();
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
          <h1>Life Goals Tracker</h1>
          {user && (
            <nav>
              <button onClick={() => auth.signOut()}>Logout</button>
            </nav>
          )}
        </header>
        <main className="main-content">
          <Routes>
            {/* Public routes */}
            <Route
              path="/login"
              element={user ? <Navigate to={isAdmin ? '/admin' : '/dashboard'} /> : <Login />}
            />
            <Route
              path="/register"
              element={user ? <Navigate to={isAdmin ? '/admin' : '/dashboard'} /> : <Register />}
            />

            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={user && !isAdmin ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/admin"
              element={user && isAdmin ? <AdminDashboard /> : <Navigate to="/login" />}
            />

            {/* Default route */}
            <Route
              path="/"
              element={
                user ? (
                  <Navigate to={isAdmin ? '/admin' : '/dashboard'} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

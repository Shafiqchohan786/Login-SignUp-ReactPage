import React, { useState } from 'react';
import './AuthLayout.css';

function AuthLayout() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      setError('Please fill all login fields');
      return;
    }
    setError('');
    alert(`Welcome back, ${loginData.username}!`);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupData.username || !signupData.email || !signupData.password || !signupData.confirmPassword) {
      setError('Please fill all signup fields');
      return;
    }
    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    setError('');
    alert(`Welcome new user, ${signupData.username}!`);
  };

  return (
    <div className="auth-layout-wrapper">
      <h1 className="page-heading">Welcome to my React Page</h1>

      <div className="auth-layout-container">
        <div className="left-info">
          <h2>React JS Overview</h2>
          <p>
            React is a popular JavaScript library for building user interfaces,
            especially single-page applications. It uses components and JSX to
            create interactive and dynamic web apps easily.
          </p>
          <ul>
            <li>Declarative UI</li>
            <li>Component-Based Architecture</li>
            <li>Virtual DOM for performance</li>
            <li>Reusable components</li>
            <li>Strong community support</li>
          </ul>
          <p>
            Designed by Shafiq Chohan
          </p>
        </div>

        <div className="right-form">
          <div className="toggle-buttons">
            <button
              className={isLogin ? 'active' : ''}
              onClick={() => { setIsLogin(true); setError(''); }}
            >
              Login
            </button>
            <button
              className={!isLogin ? 'active' : ''}
              onClick={() => { setIsLogin(false); setError(''); }}
            >
              Signup
            </button>
          </div>

          {isLogin ? (
            <form onSubmit={handleLoginSubmit} className="form">
              {error && <p className="error">{error}</p>}
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={loginData.username}
                onChange={handleLoginChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
              />
              <button type="submit">Login</button>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit} className="form">
              {error && <p className="error">{error}</p>}
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={signupData.username}
                onChange={handleSignupChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={signupData.email}
                onChange={handleSignupChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signupData.password}
                onChange={handleSignupChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
              />
              <button type="submit">Signup</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;

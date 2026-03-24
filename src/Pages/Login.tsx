import { useState } from 'react';
import type { SubmitEvent } from 'react';
import { useNavigate } from 'react-router-dom';

// Simple mock credentials for practicing login logic
const MOCK_USERNAME = 'admin';
const MOCK_PASSWORD = 'password123';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the page from refreshing when the form is submitted

    // Check if the input matches our practice variables
    if (username === MOCK_USERNAME && password === MOCK_PASSWORD) {
      setError('');
      // Redirect to a specific page upon successful login
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#666' }}>
        <p>Testing Demo Credentials:</p>
        <p>
          Username: <strong>{MOCK_USERNAME}</strong>
        </p>
        <p>
          Password: <strong>{MOCK_PASSWORD}</strong>
        </p>
      </div>
    </div>
  );
}

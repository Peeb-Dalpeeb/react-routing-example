import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const username = sessionStorage.getItem('username');

  const logout = () => {
    sessionStorage.removeItem('username');
    navigate('/');
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard{username ? `, ${username}` : ''}.</p>
      <p>You can view your profile and your orders here.</p>
      <p>You can also logout here.</p>
      <button
        className="rounded-md bg-red-500 px-4 py-2 text-white"
        type="button"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

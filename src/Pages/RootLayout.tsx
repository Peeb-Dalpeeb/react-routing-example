import { Link, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="bg-gray-800 p-4 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">My App</h1>
          <nav className="flex gap-6">
            <Link to="/" className="transition-colors hover:text-blue-300">
              Login
            </Link>
            <Link
              to="/dashboard"
              className="transition-colors hover:text-blue-300"
            >
              Dashboard
            </Link>
            <Link
              to="/aboutus"
              className="transition-colors hover:text-blue-300"
            >
              About Us
            </Link>
            <Link
              to="/contactus"
              className="transition-colors hover:text-blue-300"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-1 p-6">
        <Outlet />
      </main>

      <footer className="text-blue mt-auto bg-gray-800 p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My App</p>
      </footer>
    </div>
  );
}

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/client">Client</Link></li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="p-4">
        <Outlet /> {/* This is where child routes will be rendered */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-2 text-center">
        © 2025 My Website
      </footer>
    </div>
  );
};

export default Layout;

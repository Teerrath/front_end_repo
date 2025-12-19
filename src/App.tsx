import "./App.css";
import { useAuth } from "./hooks/useAuth";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <>
      {/* <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {!isAuthenticated && <Link to="/login">Login</Link>}
        {isAuthenticated && <Link to="/logout">Logout</Link>}
      </nav> */}

      <div>
        <AppRoutes
          isAuthenticated={isAuthenticated}
          onLogin={login}
          onLogout={logout}
        />
      </div>
    </>
  );
}

export default App;

"use client";
// Import the useUserAuth hook
import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";
import NavLinks from "../components/nav";

export default function Home() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      // Sign in to Firebase with GitHub authentication
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      // Sign out of Firebase
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="page-container">
      <div className="page-content">
        <NavLinks />

        <h1 className="page-headers">Week 9: Firebase Authentication</h1>

        <div className="center-wrapper">
          {user ? (
            <div className="card auth-card">
              <p className="welcome-text">Welcome, {user.displayName}</p>

              <p className="user-email">{user.email}</p>

              <Link className="link-button" href="/week-9/shopping-list">
                Go to Shopping List
              </Link>

              <button className="secondary-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="card auth-card">
              <p className="auth-title">Sign in to continue</p>

              <p className="auth-subtext">
                Log in with your GitHub account to access your shopping list.
              </p>

              <button className="github-signin-btn" onClick={handleLogin}>
                <img
                  src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                  alt="GitHub Icon"
                  className="github-icon"
                />
                Login with GitHub
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
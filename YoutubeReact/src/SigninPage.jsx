
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Youtube from "../src/assets/logo.png";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
     
      navigate("/home"); 
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src={Youtube}
        alt="Logo"
        className="w-28 rounded-lg shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-6 text-black">Sign In</h1>
      <form
        className="flex flex-col w-80 p-6 rounded-lg shadow-lg space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          className="px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
        <button type="submit" className="py-2 w-full bg-red-50">
          Sign In
        </button>
      </form>
      <p className="mt-4 text-sm text-red-600">
        Don't have an account?
        <Link to="/" className="text-blue-500 hover:underline ml-1">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default SigninPage;

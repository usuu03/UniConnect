import { Button, TextInput } from "keep-react";
import { Lock, User } from "phosphor-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    emailAddress: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending data:", userData);
      const user = await loginUser(userData);
      // Redirect to the desired page upon successful login
      navigate.push("/explore"); // Replace with your desired redirect path
    } catch (error) {
      setError("Invalid credentials. Please try again."); // Display error message
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 space-y-6">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-success-500">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          {/* Username Input */}
          <div>
            <div className="mb-2">
              <div className="mt-1">
                <TextInput
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Username"
                  color="gray"
                  sizing="lg"
                  icon={<User size={20} color="#5E718D" />}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* Password Input */}
            <div>
              <div className="mt-1">
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="********"
                  color="gray"
                  sizing="lg"
                  icon={<Lock size={20} color="#5E718D" />}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Log In Button */}
          <div>
            <Button
              size="lg"
              type="outlinePrimary"
              color="success"
              width="full"
              onClick={handleLogin}
            >
              Log In
            </Button>
          </div>

          {/* Display Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
        {/* Sign Up Link */}
        <p className="mt-1 text-center text-sm text-gray-600">
          Don't have an Account?{" "}
          <Link
            to="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

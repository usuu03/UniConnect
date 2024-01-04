import { Button, TextInput } from "keep-react";
import { Lock, User } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 space-y-6">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-success-500">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
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
                />
              </div>
            </div>
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
                />
              </div>
            </div>
          </div>

          <div>
            <Button
              size="lg"
              type="outlinePrimary"
              color="success"
              width="full"
            >
              Log In
            </Button>
          </div>
        </form>
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

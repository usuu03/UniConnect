import { Button, TextInput } from "keep-react";
import { Lock, User } from "phosphor-react";
import React from "react";
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
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
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
      </div>
    </div>
  );
}

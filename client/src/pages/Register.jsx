import { Button, TextInput } from "keep-react";
import {
  Envelope,
  IdentificationBadge,
  IdentificationCard,
  Lock,
  Notebook,
  Student,
} from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

export default function Registration() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 space-y-6">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-success-500">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-2">
              {/* First Name Input Field */}
              <div className="mt-1" id="firstName">
                <TextInput
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="firstName"
                  placeholder="First Name"
                  color="gray"
                  sizing="md"
                  icon={<IdentificationBadge size={20} color="#5E718D" />}
                />
              </div>
            </div>
            {/* Last Name Input Field */}
            <div className="mb-2">
              <div className="mt-1">
                <TextInput
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="lastName"
                  placeholder="Last Name"
                  color="gray"
                  sizing="md"
                  icon={<IdentificationCard size={20} color="#5E718D" />}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mb-2">
              {/* Email  Input Field */}
              <div className="mt-1">
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email Address"
                  color="gray"
                  sizing="md"
                  icon={<Envelope size={20} color="#5E718D" />}
                />
              </div>
            </div>
            {/* Username  Input Field */}
            <div className="mb-2">
              <div className="mt-1">
                <TextInput
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Username"
                  color="gray"
                  sizing="md"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mb-2">
              {/* Password Input Field */}
              <div className="mt-1">
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  placeholder="*****"
                  color="gray"
                  sizing="md"
                  icon={<Lock size={20} color="#5E718D" />}
                />
              </div>
            </div>
            <div className="mb-2">
              {/* Password Input Field */}
              <div className="mt-1">
                <TextInput
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="password"
                  placeholder="Confirm password"
                  color="gray"
                  sizing="md"
                  icon={<Lock size={20} color="#5E718D" />}
                />
              </div>
            </div>
          </div>

          {/* Educational Institution Input Field */}
          <div className="mb-2">
            <div className="mt-1">
              <TextInput
                id="academicInformation"
                name="academicInformation"
                type="text"
                autoComplete="organization"
                placeholder="Your Academic Institution"
                color="gray"
                sizing="lg"
                icon={<Student size={20} color="#5E718D" />}
              />
            </div>
          </div>

          <div className="mb-2">
            <div className="mt-1">
              <TextInput
                id="interests"
                name="interests"
                type="text"
                autoComplete="off"
                placeholder="Interests"
                color="gray"
                sizing="lg"
                icon={<Notebook size={20} color="#5E718D" />}
              />
            </div>
          </div>

          <div>
            <Button
              size="lg"
              type="outlinePrimary"
              color="success"
              width="full"
            >
              Register
            </Button>
          </div>
        </form>

        <p className="mt-1 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

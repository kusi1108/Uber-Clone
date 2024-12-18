import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
        />
        <form>
          <h3 className="text-lg font-medium mb-2">Whats's your email</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            type="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            New here?{" "}
            <Link to="/signup" className="text-blue-600">
              Create new account
            </Link>{" "}
          </p>
        </form>
      </div>
      <div>
        <button className="bg-[#10b461] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base">
          Sign in as Captain
        </button>
      </div>
    </div>
  );
};

export default UserLogin;

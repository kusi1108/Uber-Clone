import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-[url(https://media.istockphoto.com/id/1240133623/vector/self-driving-car-concept.jpg?s=2048x2048&w=is&k=20&c=JNr3I16mQjr819urz2hJIUbizGwgxxB5dy-ZoXTKIGA=)] h-screen pt-8 flex justify-between flex-col w-full">
        <img
          className="w-16 ml-8"
          src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;

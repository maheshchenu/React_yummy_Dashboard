import React from "react";

const Home = ({ showLoginHandler }) => {
  return (
    <div className="relative w-full">
      <img
        src="/assets/homeWithoutNames.png"
        alt="YummyHub"
        className="w-full h-auto"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-black">
          Welcome to YummyHub
        </h1>

        <p className="text-xl font-semibold mt-2 mb-5">
          Please Login
        </p>

        <button
          onClick={showLoginHandler}
          className="border-2 border-black text-xl px-6 py-2 rounded-2xl cursor-pointer hover:bg-black hover:text-white transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
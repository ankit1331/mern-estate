import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

      <form className="flex flex-col gap-4">
        <img
          className="self-center rounded-full object-cover w-24 h-24 cursor-pointer mt-2"
          src={currentUser.avatar}
          alt="profile picture"
        />
        <input
          className="p-3 rounded-lg border"
          type="text"
          id="username"
          placeholder="username"
        />
        <input
          className="p-3 rounded-lg border"
          type="email"
          id="email"
          placeholder="email"
        />
        <input
          className="p-3 rounded-lg border"
          type="password"
          id="password"
          placeholder="password"
        />
        <button className="bg-slate-700 p-3 text-white uppercase hover:opacity-95 rounded-lg disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}

export default Profile;

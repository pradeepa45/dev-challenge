"use client";

import React from "react";
import addTask from "../api/addTask";

interface InputProps {
  value: string;
  label: string;
  onChange: (e: React.BaseSyntheticEvent) => void;
}

export default function Input({ value, onChange, label }: InputProps) {
  const [error, setError] = React.useState({
    message: "",
    show: false,
  });
  const handleClick = async () => {
    if (!value || value.length < 4) {
      setError({
        message: "Add a proper name",
        show: true,
      });
    }
    if (!error.show) {
      await addTask({ name: value });
    }
  };
  return (
    <div>
      <div className="flex border border-gray-300 rounded-md py-1 h-10">
        <input
          type="text"
          placeholder="Add one more"
          onChange={onChange}
          value={value}
          className="px-2 grow outline-none border-none"
        />
        <button
          className="border rounded-full px-1 mx-2"
          type="button"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 0v6m0-6h
          6m-6 0H6m6 0v-6m0-
          6h-6"
            />
          </svg>
        </button>
      </div>
      {error.show && <p className="text-xs text-red-400">{error.message}</p>}
    </div>
  );
}

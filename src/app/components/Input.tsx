"use client";

import React from "react";
import addTask from "../api/addTask";

interface InputProps {
  value: string;
  label: string;
  onChange: (e: React.BaseSyntheticEvent) => void;
  cta: () => void;
}

export default function Input({ value, onChange, label, cta }: InputProps) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({
    message: "",
    show: false,
  });
  React.useEffect(() => {
    if (value && value.length < 4) {
      setError({
        message: "Its better for the name to have atleast 4 letters, no?",
        show: true,
      });
    } else
      setError({
        message: "",
        show: false,
      });
  }, [value]);

  const ctaAction = () => {
    if (!error.show) {
      cta();
    }
  };

  return (
    <div>
      <div className="flex border border-gray-300 rounded-md py-1 h-12">
        <input
          type="text"
          placeholder="Add one more"
          onChange={onChange}
          value={value}
          className="px-2 grow outline-none border-none bg-inherit"
        />
        <button
          className="border rounded-full px-1 mx-2 disabled:cursor-not-allowed"
          type="button"
          disabled={error.show}
          onClick={ctaAction}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {loading ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8
              8 0 104 9.582m0 2.945c-.067
              6.062-3.664 10.94-7.412 13.
              5c-1.75-1.041-3.07-1.72
              -4.412-2.007a8.003 8.003 0
              00-7.005-2.007c-.067-6.062
              3.664-10.94 7.412-13.5 1.
              75 1.041 3.07 1.72 4.412
              2.007a8.003 8.003 0 007.005
              2.007z"
                className="animate-spin"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h 6m-6 0H6m6 0v-6m0- 6h-6"
              />
            )}
          </svg>
        </button>
      </div>
      {error.show && <p className="text-xs text-red-400">{error.message}</p>}
    </div>
  );
}

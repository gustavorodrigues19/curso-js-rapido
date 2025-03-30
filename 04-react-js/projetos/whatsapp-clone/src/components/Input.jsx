import React from "react";

export default function Input({ label, name, type = "text", value, onChange }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor={name}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
        </label>
      </div>
      <div className="mt-2">
        <input
          onChange={onChange}
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 sm:text-sm/6"
          name={name}
          type={type}
          value={value}
          required
        />
      </div>
    </div>
  );
}

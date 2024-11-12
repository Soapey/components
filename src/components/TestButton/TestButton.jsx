// src/components/TestButton/TestButton.jsx

import React from "react";

export const TestButton = ({ ...props }) => {
  return (
    <button
      className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
      type="button"
      {...props}
    >
      Caption
    </button>
  );
};

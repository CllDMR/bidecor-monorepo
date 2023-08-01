"use client";

import React from "react";
import { toast, ToastContainer } from "react-toastify";

export default function ToastTest() {
  return (
    <div>
      <ToastContainer />
      <button
        className="btn btn-primary ml-2 mt-4"
        onClick={() => toast.error("hello celal")}
      >
        test toast
      </button>
    </div>
  );
}

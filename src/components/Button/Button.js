import React from "react";
import "./Button.css";

export default function Button({ text, variant = "primary" }) {
  return (
    <button className={`btn btn-${variant}`}>
      {text}
    </button>
  );
}

import React from "react";

export default function Error({ message }) {
  return (
    <div>
      <h1 className="text-danger display-3"> {message}</h1>
    </div>
  );
}

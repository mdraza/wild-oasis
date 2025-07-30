"use client";

import { useState } from "react";

function Count({ user }) {
  const [count, setCount] = useState(1);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
}

export default Count;

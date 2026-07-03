import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <h1>webhook-pokus</h1>
      <p>Bun + React, built into a static dist folder.</p>
      <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
    </main>
  );
}

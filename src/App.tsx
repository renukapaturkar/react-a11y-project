import { useState } from "react";
import { add } from "./stringCalculator";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError("");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : String(error));
      setResult(null);
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", color: "#000" }}>
      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={600}
        height={400}
        aria-hidden="true"
      />

      <h2 id="page-title">String Calculator</h2>

      <h1
        html-for="calc-input"
        style={{ fontSize: "20px", fontWeight: "600", display: "block" }}
      >
        Enter numbers
      </h1>

      <textarea
        id="calc-input"
        aria-label="Add Numbers or custom delimiter string"
        style={{
          margin: "10px 0",
          color: "#333",
          padding: "8px",
          borderColor: "#ccc",
          width: "100%",
          minHeight: "80px",
          borderRadius: "4px",
        }}
        placeholder="Example: 1,2,3 or //[***][%%]\n1***2%%3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleCalculate}
        style={{
          padding: "10px",
          backgroundColor: "blue",
          color: "#fff",
          border: "none",
          fontWeight: "700"
        }}
        onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
      >
        Calculate
      </button>

      <div
        role="status"
        aria-live="polite"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {result !== null && !error && (
          <p style={{ color: "green" }}>Result: {result}</p>
        )}
      </div>

      <div role="alert" aria-live="assertive" style={{ marginTop: "10px" }}>
        <p>Make sure you enter numbers correctly!</p>
      </div>
    </div>
  );
};

export default App;

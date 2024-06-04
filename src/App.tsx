import { useState } from "react";
import Greeting from "@wc/features/greeting";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-4">
      <span className="text-4xl font-bold text-primary">
        <i className="fa-regular fa-star"></i>
      </span>
      <h1 className="text-3xl font-bold">Web Component Application</h1>
      <p className="mb-2">
        This is a React application that will be rendered as a web component.
        With Shadow DOM and Styles in Shadow.
      </p>
      <p>
        Before continue with development check out{" "}
        <span className="bg-slate-200 px-1 font-semibold text-slate-700">
          .env.development
        </span>{" "}
        file and change your own environment variables to set it up the Web
        Component.
      </p>
      <Greeting />
      <div className="flex flex-col items-center gap-4 rounded-md border bg-white p-4 shadow-md">
        <button
          className="rounded-md border-primary bg-primary px-2 py-1 font-semibold text-foreground-50"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;

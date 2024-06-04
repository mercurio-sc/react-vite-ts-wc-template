import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Web Component Application</h1>
      <p className="mb-2">
        This is a React application that will be rendered as a web component.
        With Shadow DOM and Styles in Shadow.
      </p>
      <p>
        Before continue with development check out{" "}
        <span className="bg-slate-200 text-slate-700 font-semibold px-1">
          .env.development
        </span>{" "}
        file and change your own environment variables to set it up the Web
        Component.
      </p>
      <div className="bg-white shadow-md p-4 rounded-md border flex flex-col items-center gap-4">
        <button
          className="px-2 py-1 border-primary rounded-md bg-primary text-foreground-50 font-semibold"
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

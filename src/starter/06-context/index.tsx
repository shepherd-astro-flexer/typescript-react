import ThemeProvider, { useTheme } from "./context";

const Test = () => {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
};

function Component() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>{theme}</h2>
      <button className="btn" onClick={() => setTheme("dark")}>
        dark
      </button>
      <button className="btn" onClick={() => setTheme("light")}>
        light
      </button>
      <button className="btn" onClick={() => setTheme("system")}>
        system
      </button>
    </div>
  );
}
export default Test;

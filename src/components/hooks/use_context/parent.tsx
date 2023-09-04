import { createContext, useState } from "react";
import { Child1 } from "./child_1";
import { Child2 } from "./child_2";

interface Theme {
  backgroundColor: string;
  color: string;
  padding: string;
  margin: string;
}

const lightTheme = {
  backgroundColor: "#CCC",
  color: "#333",
  padding: "2rem",
  margin: "2rem",
};

const darkTheme = {
  backgroundColor: "#333",
  color: "#CCC",
  padding: "2rem",
  margin: "2rem",
};

export const ThemeContext = createContext<Theme>(lightTheme);

export const Parent = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  };

  return (
    <div className="section">
      <h2>useContext</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeContext.Provider value={theme}>
        <Child1 />
        <Child2 />
      </ThemeContext.Provider>
    </div>
  );
};

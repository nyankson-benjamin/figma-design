import { useState, useEffect } from "react";

export default function Theme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl mb-4">Hello, Theme Toggle!</h1>
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

import { useLocalStorage } from "./hooks/useLocalStorage";


type Preferences = {
  theme: "light" | "dark";
  fontSize: number;
};

function Settings() {
  const [prefs, setPrefs] = useLocalStorage<Preferences>("preferences", {
    theme: "light",
    fontSize: 16,
  });

  const toggleTheme = () => {
    setPrefs({
      ...prefs,
      theme: prefs.theme === "light" ? "dark" : "light",
    });
  };

  return (
    <div>
      <p>Current theme: {prefs.theme}</p>
      <button onClick={toggleTheme} style={{ backgroundColor: "blue", color: "white" }}>
        Toggle theme
      </button>
    </div>
  );
}

export default Settings;
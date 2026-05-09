import Dashboard from "./components/Dashboard";
import { SettingsProvider } from "./context/SettingsContext";
import "./App.css";

function App() {
  return (
    <SettingsProvider>
      <Dashboard />
    </SettingsProvider>
  );
}

export default App;
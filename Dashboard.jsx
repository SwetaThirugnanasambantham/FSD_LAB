import { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import MetricCard from "./MetricCard";
import ChartBox from "./ChartBox";
import { SettingsContext } from "../context/SettingsContext";

const Dashboard = () => {
  const { theme } = useContext(SettingsContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        network: Math.floor(Math.random() * 100),
        time: new Date().toLocaleTimeString()
      };

      setData(prev => [...prev.slice(-8), newData]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const latest = data[data.length - 1] || {
    cpu: 0,
    memory: 0,
    network: 0
  };

  return (
    <div className={`dashboard ${theme}`}>
      <Navbar />

      <div className="grid">
        <MetricCard title="CPU Usage" value={latest.cpu} />
        <MetricCard title="Memory Usage" value={latest.memory} />
        <MetricCard title="Network Load" value={latest.network} />
      </div>

      <ChartBox data={data} />
    </div>
  );
};

export default Dashboard;
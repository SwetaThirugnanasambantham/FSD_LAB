import { Cpu, Activity, Wifi } from "lucide-react";

const icons = {
  CPU: <Cpu size={28} />,
  Memory: <Activity size={28} />,
  Network: <Wifi size={28} />
};

const MetricCard = ({ title, value }) => {
  return (
    <div className="card">
      <div>{icons[title.split(" ")[0]]}</div>
      <p>{title}</p>
      <h2>{value}%</h2>
    </div>
  );
};

export default MetricCard;
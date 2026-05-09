
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const ChartBox = ({ data }) => {
  return (
    <div className="chart-card">
      <h3>System Performance</h3>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#6366f1"
            strokeWidth={3}
            dot={false}
            isAnimationActive={true}
          />

          <Line
            type="monotone"
            dataKey="memory"
            stroke="#22c55e"
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="network"
            stroke="#f59e0b"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBox;
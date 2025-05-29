import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { time: "12 AM", profit: 10000 },
  { time: "2 AM", profit: 15000 },
  { time: "4 AM", profit: 12000 },
  { time: "6 AM", profit: 18000 },
  { time: "8 AM", profit: 40000 },
  { time: "10 AM", profit: 22000 },
  { time: "12 PM", profit: 30000 },
  { time: "2 PM", profit: 25000 },
  { time: "4 PM", profit: 144600 },
  { time: "6 PM", profit: 50000 },
  { time: "8 PM", profit: 60000 },
  { time: "10 PM", profit: 70000 },
  { time: "11 PM", profit: 80000 },
];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div style={{
        background: "#101935",
        borderRadius: 12,
        padding: "18px 22px 14px 22px",
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)",
        minWidth: 120,
        minHeight: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24, fontWeight: 600, color: "#fff" }}>
            ${value.toLocaleString(undefined, { maximumFractionDigits: 1 })}k
          </span>
        </div>
      </div>
    );
  }
  return null;
}

export const ProfitChart = () => {
  const latestProfit = data[data.length - 1].profit;

  return (
    <div style={{
      backgroundColor: "#101935",
      borderRadius: 12,
      padding: 28,
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
        <img
          src="https://c.animaapp.com/mb540qadkyydE0/img/custome-icon-sales-icon.svg"
          alt="Sales Icon"
          style={{ width: "12px", height: "12px" }}
        />
        <span style={{ fontSize: "12px", color: "#bfc9da" }}>Total profit</span>
      </div>

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        marginBottom: 16
      }}>
        <div style={{
          minWidth: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start"
        }}>
          <span style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1
          }}>
            ${(latestProfit / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 })}k
          </span>
          <span style={{
            background: "#0e2e1b",
            color: "#14c973",
            fontSize: 13,
            fontWeight: 600,
            borderRadius: 6,
            padding: "2px 8px",
            marginTop: 8,
            display: "flex",
            alignItems: "center"
          }}>
            28.5%
            <svg width="14" height="14" style={{ marginLeft: 2 }} viewBox="0 0 16 16" fill="none"><path d="M4 8l4-4 4 4" stroke="#14c973" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>

        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart data={data} layout="vertical">
              <CartesianGrid stroke="#00c2ff" horizontal={false} />
              <XAxis type="number" stroke="#00c2ff" hide />
              <YAxis dataKey="time" type="category" stroke="#bfc9da" />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: '#c85ffc', opacity: 0.2 }} />
              <Bar dataKey="profit" fill="#c85ffc" barSize={8} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
        {data.map((d, index) => (
          <span key={index} style={{ fontSize: "8px", color: "#bfc9da" }}>
            {d.time}
          </span>
        ))}
      </div>
      <div style={{ height: "1px", backgroundColor: "#232b43", margin: "16px 0" }}></div>
      <span style={{ fontSize: "12px", color: "#bfc9da" }}>Last 12 months</span>
    </div>
  );
};

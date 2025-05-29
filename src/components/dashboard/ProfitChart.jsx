import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { time: "12 AM", profit: 10000, percent: 28.5, date: "June 21, 2023" },
  { time: "8 AM", profit: 40000, percent: 28.5, date: "June 21, 2023" },
  { time: "4 PM", profit: 144600, percent: 28.5, date: "June 21, 2023" },
  { time: "11 PM", profit: 80000, percent: 28.5, date: "June 21, 2023" },
];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const percent = payload[0].payload.percent;
    const date = payload[0].payload.date;
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
          <span style={{
            background: "#0e2e1b",
            color: "#14c973",
            fontSize: 13,
            fontWeight: 600,
            borderRadius: 6,
            padding: "2px 8px",
            marginLeft: 6,
            display: "flex",
            alignItems: "center"
          }}>
            {percent}%
            <svg width="14" height="14" style={{ marginLeft: 2 }} viewBox="0 0 16 16" fill="none"><path d="M4 8l4-4 4 4" stroke="#14c973" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
        <div style={{ color: "#bfc9da", fontSize: 15, marginTop: 6 }}>{date}</div>
      </div>
    );
  }
  return null;
}

export const ProfitChart = () => (
  <div style={{ backgroundColor: "var(--secondary-colorscolor-1)", borderRadius: 12, padding: 28 }}>
    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
      <img
        src="https://c.animaapp.com/mb540qadkyydE0/img/custome-icon-sales-icon.svg"
        alt="Sales Icon"
        style={{ width: "12px", height: "12px" }}
      />
      <span style={{ fontSize: "12px", color: "var(--neutral-colors400)" }}>Total profit</span>
    </div>
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={data}>
        <CartesianGrid stroke="#232b43" vertical={false} />
        <XAxis dataKey="time" stroke="#bfc9da" />
        <YAxis stroke="#bfc9da" hide />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#c85ffc', strokeWidth: 2, opacity: 0.2 }} />
        <Line type="monotone" dataKey="profit" stroke="#c85ffc" strokeWidth={3} dot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
      {data.map((d, index) => (
        <span key={index} style={{ fontSize: "8px", color: "var(--neutral-colors400)" }}>
          {d.time}
        </span>
      ))}
    </div>
    <div style={{ height: "1px", backgroundColor: "var(--neutral-colors700)", margin: "16px 0" }}></div>
    <span style={{ fontSize: "12px", color: "var(--neutral-colors400)" }}>Last 12 months</span>
  </div>
);


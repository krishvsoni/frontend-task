import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { time: "12 AM", sessions: 100, percent: 16.8, date: "June 21, 2023" },
  { time: "8 AM", sessions: 250, percent: 16.8, date: "June 21, 2023" },
  { time: "4 PM", sessions: 400, percent: 16.8, date: "June 21, 2023" },
  { time: "11 PM", sessions: 200, percent: 16.8, date: "June 21, 2023" },
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
            {value}
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

export const SessionsChart = () => {
  const latestSessions = data[data.length - 1].sessions;
  
  return (
    <div style={{ 
      backgroundColor: "var(--secondary-colorscolor-1)", 
      borderRadius: 12, 
      padding: 28,
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
        <img
          src="https://c.animaapp.com/mb540qadkyydE0/img/custome-icon-sessions-icon.svg"
          alt="Sessions Icon"
          style={{ width: "12px", height: "12px" }}
        />
        <span style={{ fontSize: "12px", color: "var(--neutral-colors400)" }}>Total sessions</span>
      </div>
      
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 20,
        marginBottom: 16
      }}>
        {/* Large sessions value display */}
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
            {latestSessions}
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
            {data[0].percent}%
            <svg width="14" height="14" style={{ marginLeft: 2 }} viewBox="0 0 16 16" fill="none"><path d="M4 8l4-4 4 4" stroke="#14c973" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
        
        {/* Chart */}
        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={data}>
              <CartesianGrid stroke="#232b43" vertical={false} />
              <XAxis dataKey="time" stroke="#bfc9da" />
              <YAxis stroke="#bfc9da" hide />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#c85ffc', strokeWidth: 2, opacity: 0.2 }} />
              <Line 
                type="linear"
                dataKey="sessions" 
                stroke="#c85ffc" 
                strokeWidth={3} 
                dot={{ r: 5 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
        {data.map((d, index) => (
          <span key={index} style={{ fontSize: "8px", color: "var(--neutral-colors400)" }}>
            {d.time}
          </span>
        ))}
      </div>
      <div style={{ height: "1px", backgroundColor: "var(--neutral-colors700)", margin: "16px 0" }}></div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "8px" }}>
        <div style={{
          backgroundColor: "var(--othergreen-50)",
          border: "0.6px solid #05c16833",
          borderRadius: "4px",
          padding: "2px 6px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}>
          <div style={{
            width: "3px",
            height: "3px",
            backgroundColor: "var(--system-colorsgreen-300)",
            borderRadius: "1.5px",
          }}></div>
          <span style={{ fontSize: "10px", fontWeight: "500", color: "#14c973" }}>Live</span>
        </div>
        <span style={{ fontSize: "12px", color: "var(--neutral-colors500)" }}>10k visitors</span>
      </div>
    </div>
  );
};
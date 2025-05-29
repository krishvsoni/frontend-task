import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const data = [
  { month: 'Jan', revenue: 195000, expenses: 20000, date: 'Jan 21, 2023', percent: 2.5 },
  { month: 'Feb', revenue: 30000, expenses: 22000, date: 'Feb 21, 2023', percent: 3.1 },
  { month: 'Mar', revenue: 50000, expenses: 35000, date: 'Mar 21, 2023', percent: 4.2 },
  { month: 'Apr', revenue: 280000, expenses: 40000, date: 'Apr 21, 2023', percent: 5.8 },
  { month: 'May', revenue: 100000, expenses: 60000, date: 'May 21, 2023', percent: 8.7 },
  { month: 'Jun', revenue: 195000, expenses: 90000, date: 'June 21, 2023', percent: 12.5 },
  { month: 'Jul', revenue: 150000, expenses: 120000, date: 'Jul 21, 2023', percent: 10.2 },
  { month: 'Aug', revenue: 170000, expenses: 195000, date: 'Aug 21, 2023', percent: 9.1 },
  { month: 'Sep', revenue: 200000, expenses: 180000, date: 'Sep 21, 2023', percent: 11.3 },
  { month: 'Oct', revenue: 220000, expenses: 160000, date: 'Oct 21, 2023', percent: 13.2 },
  { month: 'Nov', revenue: 230000, expenses: 170000, date: 'Nov 21, 2023', percent: 7.8 },
  { month: 'Dec', revenue: 240800, expenses: 0, date: 'Dec 21, 2023', percent: 6.4 },
];

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const percent = data.find(d => d.month === label)?.percent || 0;
    const date = data.find(d => d.month === label)?.date || '';
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

export const RevenueChart = () => {
  const [selectedRange, setSelectedRange] = useState("Jan 2025 - Dec 2025");
  
  const ranges = [
    "Jan 2025 - Dec 2025",
    "Jan 2024 - Dec 2024", 
    "Jan 2023 - Dec 2023",
    "Jan 2022 - Dec 2022"
  ];

  return (
    <div
      style={{
        backgroundColor: "var(--secondary-colorscolor-1)",
        padding: "40px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px" }}>
        <div>
          <p style={{ fontSize: "14px", color: "var(--neutral-colors400)" }}>Total revenue</p>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "8px" }}>
            <span style={{ fontSize: "24px", fontWeight: "600", color: "var(--neutral-colors100)" }}>
              $240.8K
            </span>
            <div
              style={{
                backgroundColor: "var(--othergreen-50)",
                padding: "2px 4px",
              }}
            >
              <span style={{ fontSize: "10px", fontWeight: "500", color: "#14c973" }}>24.6%</span>
              <img
                src="https://c.animaapp.com/mb540qadkyydE0/img/line-rounded-arrow-external-right-2.svg"
                alt="Up"
                style={{ width: "8px", height: "8px", marginLeft: "2px" }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  backgroundColor: "var(--primary-colorscolor-1)",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  backgroundColor: "#c85ffc",
                  borderRadius: "50%",
                }}
              ></div>
              <span style={{ fontSize: "12px", color: "var(--neutral-colors400)" }}>Revenue</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "7px",
                  height: "7px", 
                  backgroundColor: "#38bdf8",
                  borderRadius: "50%",
                }}
              ></div>
              <span style={{ fontSize: "12px", color: "var(--neutral-colors400)" }}>Expenses</span>
            </div>
          </div>
          <select 
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
            style={{
              backgroundColor: "#101935",
              color: "var(--neutral-colors400)",
              border: "none",
              padding: "8px 12px",
              fontSize: "14px",
              cursor: "pointer",
              borderRadius: "4px"
            }}
          >
            {ranges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>
      <div style={{ position: "relative", height: "320px" }}>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data}>
            <CartesianGrid stroke="#232b43" vertical={false} />
            <XAxis dataKey="month" stroke="#bfc9da" />
            <YAxis stroke="#bfc9da" />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#c85ffc', strokeWidth: 2, opacity: 0.2 }} />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#c85ffc" strokeWidth={3} dot={{ r: 5 }} />
            <Line type="monotone" dataKey="expenses" stroke="#38bdf8" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

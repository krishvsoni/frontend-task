import React from "react";

export const MetricCard = ({ title, value, change, isPositive, icon }) => {
  return (
    <div
      style={{
        background: "#0b1739",
        border: "1.5px solid #232b43",
        borderRadius: "12px",
        padding: "24px 20px 20px 20px",
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)",
        minWidth: 220,
        minHeight: 120,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
        <img src={icon} alt={title} style={{ width: "18px", height: "18px", opacity: 0.7 }} />
        <span style={{ fontSize: "16px", color: "#bfc9da", fontWeight: 500 }}>{title}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px" }}>
        <span style={{ fontSize: "32px", fontWeight: 700, color: "#fff", letterSpacing: "-1px" }}>
          {value}
        </span>
        <div
          style={{
            background: isPositive ? "#093c2e" : "#3c1a1a",
            border: `1.5px solid ${isPositive ? "#14c973" : "#ff5a64"}`,
            borderRadius: "4px",
            padding: "2px 8px",
            display: "flex",
            alignItems: "center",
            minWidth: 48,
            justifyContent: "center"
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: isPositive ? "#14c973" : "#ff5a64",
              display: "flex",
              alignItems: "center"
            }}
          >
            {change}
            <img
              src={
                isPositive
                  ? "https://c.animaapp.com/mb540qadkyydE0/img/line-rounded-arrow-external-right-2.svg"
                  : "https://c.animaapp.com/mb540qadkyydE0/img/line-rounded-arrow-external-right-1.svg"
              }
              alt={isPositive ? "Up" : "Down"}
              style={{ width: "12px", height: "12px", marginLeft: "4px" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

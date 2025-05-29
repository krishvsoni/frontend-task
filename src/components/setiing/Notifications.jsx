import React, { useState } from "react";
import { Bell, Mail, Info } from "lucide-react";

const NotificationToggle = ({ label, inAppEnabled, emailEnabled, onToggle }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
      backgroundColor: "#0b1739",
      padding: "10px",
      borderRadius: "0px"
    }}>
      <div style={{ display: "flex", alignItems: "center", color: "#fff" }}>
        <span>{label}</span>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: "#aeb9e1",
          marginLeft: "8px"
        }}>
          <span style={{ fontSize: "10px" }}>i</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => onToggle("inApp")}
          style={{
            backgroundColor: inAppEnabled ? "#CB3CFF" : "#232B43",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "0px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px"
          }}
        >
          <Bell size={16} /> In-app
        </button>
        <button
          onClick={() => onToggle("email")}
          style={{
            backgroundColor: emailEnabled ? "#CB3CFF" : "#232B43",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "0px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px"
          }}
        >
          <Mail size={16} /> Email
        </button>
      </div>
    </div>
  );
};

const Notifications = () => {
  const [generalNotifications, setGeneralNotifications] = useState({
    "I’m mentioned in a message": { inApp: true, email: false },
    "Someone replies to any message": { inApp: true, email: false },
    "I'm assigned a task": { inApp: false, email: true },
    "A task is overdue": { inApp: true, email: true },
  });

  const [summaryNotifications, setSummaryNotifications] = useState({
    "Daily Summary": { inApp: true, email: true },
    "Weekly Summary": { inApp: false, email: true },
    "Monthly Summary": { inApp: true, email: false },
  });

  const handleToggle = (section, key, type) => {
    const setNotifications = section === "general" ? setGeneralNotifications : setSummaryNotifications;
    const notifications = section === "general" ? generalNotifications : summaryNotifications;

    setNotifications({
      ...notifications,
      [key]: {
        ...notifications[key],
        [type]: !notifications[key][type],
      },
    });
  };

  return (
    <div style={{ flex: 1, backgroundColor: "#0b1739", borderRadius: "16px", padding: "20px" }}>
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#fff", marginBottom: "10px" }}>General notifications</h2>
        <p style={{ color: "#9CA3AF", marginBottom: "20px" }}>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
        <div>
          {Object.entries(generalNotifications).map(([key, value]) => (
            <NotificationToggle
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              inAppEnabled={value.inApp}
              emailEnabled={value.email}
              onToggle={(type) => handleToggle("general", key, type)}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#fff", marginBottom: "20px" }}>Summary notifications</h2>
        <p style={{ color: "#9CA3AF", marginBottom: "20px" }}>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
        <div>
          {Object.entries(summaryNotifications).map(([key, value]) => (
            <NotificationToggle
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              inAppEnabled={value.inApp}
              emailEnabled={value.email}
              onToggle={(type) => handleToggle("summary", key, type)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

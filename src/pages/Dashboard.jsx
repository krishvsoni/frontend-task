import React from "react";
import { Sidebar } from "../components/Sidebar";
import { MetricCard } from "../components/dashboard/MetricCard";
import { RevenueChart } from "../components/dashboard/RevenueChart";
import { ProfitChart } from "../components/dashboard/ProfitChart";
import { SessionsChart } from "../components/dashboard/SessionChart";
import "./Dashboard.css";

export const Dashboard = () => {
  const metricCards = [
    {
      title: "Pageviews",
      value: "50.8K",
      change: "28.4%",
      isPositive: true,
      icon: "https://c.animaapp.com/mb540qadkyydE0/img/subtract-2.svg",
    },
    {
      title: "Monthly users",
      value: "23.6K",
      change: "12.6%",
      isPositive: false,
      icon: "https://c.animaapp.com/mb540qadkyydE0/img/custome-icon-users-icon.svg",
    },
    {
      title: "New sign ups",
      value: "756",
      change: "3.1%",
      isPositive: true,
      icon: "https://c.animaapp.com/mb540qadkyydE0/img/subtract.svg",
    },
    {
      title: "Subscriptions",
      value: "2.3K",
      change: "11.3%",
      isPositive: true,
      icon: "https://c.animaapp.com/mb540qadkyydE0/img/custome-icon--features-icon.svg",
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <header className="dashboard-header">
          <h1>Welcome back, John</h1>
          <p >Measure your advertising ROI and report website traffic.</p>
        </header>
        <div className="overview-cards">
          {metricCards.map((card, index) => (
            <MetricCard key={index} {...card} />
          ))}
        </div>
        <div className="dashboard-charts">
          <div className="chart-card revenue-card">
            <RevenueChart />
          </div>
          <div className="secondary-charts" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div className="chart-card profit-card">
              <ProfitChart />
            </div>
            <div className="chart-card sessions-card">
              <SessionsChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

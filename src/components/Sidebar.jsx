import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight, Home, Settings, List } from "lucide-react";
import { UserContext } from "../../src/UserContext";
import "./sidebar.css";
export const Sidebar = () => {
  const { userInfo } = useContext(UserContext);
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: Home,
      to: "/dashboard",
    },
    {
      id: 2,
      name: "Product List",
      icon: List,
      to: "/product-list",
    },
    {
      id: 3,
      name: "Settings",
      icon: Settings,
      to: "/settings",
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <header className={`sidebar-header ${isCollapsed ? "collapsed" : ""}`}>
        <div className="logo-container">
          <div className="logo">
            <img
              src="/exclude.svg"
              alt="Logo background"
              className="logo-background"
            />
            <img
              src="/include.svg"
              alt="Logo foreground"
              className="logo-foreground"
            />
          </div>
          <h1 className={`app-name ${isCollapsed ? "collapsed-content" : ""}`}>
            Dashdark X
          </h1>
          <button onClick={toggleSidebar} className="collapse-button">
            <ChevronRight
              size={18}
              color="#FFFFFF"
              className={`chevron-icon ${isCollapsed ? "" : "collapsed"}`}
            />
          </button>
        </div>
      </header>

      <nav className="sidebar-nav">
        <div className={`nav-list ${isCollapsed ? "collapsed" : ""}`}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) =>
                  `sidebar-link ${isCollapsed ? "collapsed" : ""} ${
                    isActive ? "selected" : ""
                  }`
                }
                end
              >
                <Icon size={20} className="nav-icon" />
                <span className={isCollapsed ? "collapsed-content" : ""}>
                  {item.name}
                </span>
              </NavLink>
            );
          })}
        </div>
      </nav>

      <footer className={`sidebar-footer ${isCollapsed ? "collapsed" : ""}`}>
        <div className="user-profile">
          <div className="user-info">
            <img src={userInfo.photo} alt={userInfo.fullName} className="avatar" />
            <span className={`username ${isCollapsed ? "collapsed-content" : ""}`}>
              {userInfo.fullName}
            </span>
          </div>
          <ChevronRight
            size={20}
            color="var(--neutral-colors400)"
            className={isCollapsed ? "collapsed-content" : ""}
          />
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;

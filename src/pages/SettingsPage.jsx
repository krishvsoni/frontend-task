import React, { useContext } from "react";
import { User, Mail, Image, FileText, Bell } from "lucide-react";
import Notifications from "../components/setiing/Notifications";
import { UserContext } from "../UserContext";

export default function SettingsPage() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [activeView, setActiveView] = React.useState("personalInfo");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserInfo({ ...userInfo, photo: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User info saved:", userInfo);
  };

  return (
    <div style={{ backgroundColor: "#081028", minHeight: "100vh", width: "100%", padding: "20px", color: "#fff" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "700" }}>Settings</h1>
        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            backgroundColor: "#cb3cff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          Save
        </button>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ width: "250px", backgroundColor: "#081028", borderRadius: "8px", padding: "10px" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li
              style={{
                padding: "10px",
                backgroundColor: activeView === "personalInfo" ? "#0b1739" : "transparent",
                borderRadius: "8px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer"
              }}
              onClick={() => setActiveView("personalInfo")}
            >
              <User size={16} /> Personal Information
            </li>
            <li
              style={{
                padding: "10px",
                backgroundColor: activeView === "notifications" ? "#0b1739" : "transparent",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer"
              }}
              onClick={() => setActiveView("notifications")}
            >
              <Bell size={16} /> Notifications
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, backgroundColor: "#0b1739", borderRadius: "16px", padding: "20px" }}>
          {activeView === "personalInfo" && (
            <>
              <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px" }}>Personal Information</h2>
              <p style={{ color: "#9CA3AF", marginBottom: "20px" }}>Update your personal information and profile settings.</p>

              <div>
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "flex", alignItems: "center", marginBottom: "8px", color: "#ffff" }}>
                    <User size={16} style={{ marginRight: "8px" }} /> Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={userInfo.fullName}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #374151",
                      backgroundColor: "#0a1330",
                      color: "#fff",
                      fontSize: "14px",
                      outline: "none"
                    }}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "flex", alignItems: "center", marginBottom: "8px", color: "#ffff" }}>
                    <Mail size={16} style={{ marginRight: "8px" }} /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #374151",
                      backgroundColor: "#0a1330",
                      color: "#fff",
                      fontSize: "14px",
                      outline: "none"
                    }}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "flex", alignItems: "center", marginBottom: "8px", color: "#ffff" }}>
                    <Image size={16} style={{ marginRight: "8px" }} /> Photo
                  </label>
                  <div
                    style={{
                      border: "1px dashed #374151",
                      borderRadius: "8px",
                      padding: "20px",
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor: "#0a1330"
                    }}
                    onClick={() => document.getElementById('photo-upload').click()}
                  >
                    <input
                      type="file"
                      onChange={handlePhotoChange}
                      style={{ display: "none" }}
                      id="photo-upload"
                      accept="image/*"
                    />
                    {userInfo.photo ? (
                      <img
                        src={userInfo.photo}
                        alt="Profile Preview"
                        style={{ maxWidth: "100%", maxHeight: "200px", borderRadius: "8px" }}
                      />
                    ) : (
                      <div>
                        <Image size={24} style={{ color: "#cb3cff", marginBottom: "8px" }} />
                        <div style={{ fontSize: "12px" }}>
                          <span style={{ color: "#cb3cff" }}>Click to upload</span>
                          <span style={{ color: "#9CA3AF" }}> or drag and drop</span>
                        </div>
                        <div style={{ color: "#9CA3AF", fontSize: "12px" }}>SVG, PNG, JPG or GIF (max. 800 x 400px)</div>
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "flex", alignItems: "center", marginBottom: "8px", color: "#ffff" }}>
                    <FileText size={16} style={{ marginRight: "8px" }} /> Short Description
                  </label>
                  <textarea
                    name="bio"
                    value={userInfo.bio}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #374151",
                      backgroundColor: "#0a1330",
                      color: "#fff",
                      minHeight: "100px",
                      fontSize: "14px",
                      resize: "vertical",
                      outline: "none"
                    }}
                    placeholder="Write a short bio about you..."
                  />
                </div>
              </div>
            </>
          )}

          {activeView === "notifications" && <Notifications />}
        </div>
      </div>
    </div>
  );
}

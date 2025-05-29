import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    fullName: "John Carter",
    email: "john@dashdark.com",
    photo: "https://c.animaapp.com/mb540qadkyydE0/img/group-39488.png",
    bio: "",
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

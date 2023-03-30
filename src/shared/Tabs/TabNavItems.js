import React from "react";

const TabNavItems = ({ id, title, activeTab, setActiveTab }) => {
  const handler = () => {
    setActiveTab(id);
  };
  return (
    <li
      onClick={handler}
      className={
        activeTab === id
          ? "bg-red-900 rounded-full p-2 px-5 text-white font-bold"
          : "bg-white  rounded-full p-2 px-5  font-bold"
      }
    >
      {title}
    </li>
  );
};

export default TabNavItems;

import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { DEFAULT_PAGE, MARKETS_PAGE } from "../../AppUrls";
import { useAppSelector } from "../../hooks";
import { HomeOutlined, ShoppingOutlined } from "@ant-design/icons";

const LayoutMenu = () => {
  const nav = useNavigate();
  const currentPage = useAppSelector((state) => state.app.currentPage);
  if (!currentPage) return null;

  return (
    <Menu
      mode="inline"
      theme="dark"
      items={[
        {
          key: DEFAULT_PAGE,
          label: "Главная страница",
          icon: <HomeOutlined />,
          onClick: () => nav(DEFAULT_PAGE),
        },
        {
          key: MARKETS_PAGE,
          label: "Магазины",
          icon: <ShoppingOutlined />,
          onClick: () => nav(MARKETS_PAGE),
        },
      ]}
      activeKey={currentPage}
      defaultSelectedKeys={[currentPage]}
    />
  );
};

export default LayoutMenu;

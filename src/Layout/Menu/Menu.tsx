import React, { memo, useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { DEFAULT_PAGE, MARKETS_PAGE } from "../../AppUrls";
import { useAppSelector } from "../../hooks";
import { HomeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { COLLAPSIBLE_MENU_KEY } from "src/const";

const { Sider } = Layout;

const LayoutMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(
    localStorage.getItem(COLLAPSIBLE_MENU_KEY) === "true"
  );
  const nav = useNavigate();
  const currentPage = useAppSelector((state) => state.app.currentPage);
  const onCollapse = (collapsed: boolean) => {
    setIsCollapsed(collapsed);
    localStorage.setItem(COLLAPSIBLE_MENU_KEY, String(collapsed));
  };

  if (!currentPage) return null;

  return (
    <Sider
      width={200}
      collapsible
      collapsed={isCollapsed}
      onCollapse={onCollapse}
      style={{
        overflow: "auto",
        height: "100%",
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1,
      }}
    >
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
        selectedKeys={[currentPage]}
      />
    </Sider>
  );
};

export default memo(LayoutMenu);

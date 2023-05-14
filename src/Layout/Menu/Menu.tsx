import React, { CSSProperties, memo, useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { DEFAULT_PAGE, MARKETS_PAGE, PRODUCTS_PAGE } from "../../AppUrls";
import { useAppSelector } from "../../hooks";
import {
  HomeOutlined,
  InboxOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { COLLAPSIBLE_MENU_KEY } from "src/const";
import { MenuInfo } from "rc-menu/lib/interface";

const { Sider } = Layout;

const siderStyle: CSSProperties = {
  overflow: "auto",
  height: "100%",
  left: 0,
  top: 0,
  bottom: 0,
  zIndex: 1,
};

const menuItems = [
  {
    key: DEFAULT_PAGE,
    label: "Главная страница",
    icon: <HomeOutlined />,
  },
  {
    key: MARKETS_PAGE,
    label: "Магазины",
    icon: <ShoppingOutlined />,
  },
  {
    key: PRODUCTS_PAGE,
    label: "Товары",
    icon: <InboxOutlined />,
  },
];

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

  const onClickPage = ({ key }: MenuInfo) => {
    nav(key);
  };

  if (!currentPage) return null;

  return (
    <Sider
      width={200}
      collapsible
      collapsed={isCollapsed}
      onCollapse={onCollapse}
      style={siderStyle}
    >
      <Menu
        mode="inline"
        theme="dark"
        items={menuItems}
        onClick={onClickPage}
        activeKey={currentPage}
        selectedKeys={[currentPage]}
      />
    </Sider>
  );
};

export default memo(LayoutMenu);

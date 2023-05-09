import React, { useEffect, useState } from "react";
import { FloatButton, Layout, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { DEFAULT_PAGE } from "../AppUrls";
import LayoutMenu from "./Menu/Menu";
import { setCurrentPage } from "src/store";
import { useAppDispatch } from "src/hooks";
import { COLLAPSIBLE_MENU_KEY } from "src/const";

const { Header, Content, Sider } = Layout;

type LayoutProps = {
  children: React.ReactNode;
};
const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(
    localStorage.getItem(COLLAPSIBLE_MENU_KEY) === "true"
  );
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { pathname } = useLocation();
  const onCollapse = (collapsed: boolean) => {
    setIsCollapsed(collapsed);
    localStorage.setItem(COLLAPSIBLE_MENU_KEY, String(collapsed));
  };

  useEffect(() => {
    dispatch(setCurrentPage(pathname));
  }, [dispatch, pathname]);

  return (
    <Layout hasSider>
      <Layout>
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
          <LayoutMenu />
        </Sider>
        <Layout>
          <Header
            style={{ display: "flex", width: "100%", alignItems: "center" }}
          >
            <Typography.Title
              level={4}
              style={{ color: "#fff", margin: 0, cursor: "pointer" }}
              onClick={() => nav(DEFAULT_PAGE)}
            >
              Городская бизнес-платформа
            </Typography.Title>
          </Header>
          <Content style={{ padding: "12px 24px" }}>{children}</Content>
        </Layout>
      </Layout>
      <FloatButton.BackTop type="primary" />
    </Layout>
  );
};

export default AppLayout;

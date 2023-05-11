import React from "react";
import { FloatButton, Layout, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { DEFAULT_PAGE } from "../AppUrls";
import LayoutMenu from "./Menu/Menu";
import { useAppState } from "src/store";
import { LeftCircleFilled } from "@ant-design/icons";
import { ContentLayout } from "src/components";

const { Header } = Layout;

type LayoutProps = {
  children: React.ReactNode;
};
const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const addonTitle = useAppState("addonTitle");

  const withOnBack = pathname.split("/").length > 2;

  return (
    <Layout hasSider>
      <Layout>
        <LayoutMenu />
        <Layout>
          <Header
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: 12,
            }}
          >
            {withOnBack && (
              <LeftCircleFilled
                style={{
                  fontSize: 24,
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => nav(-1)}
              />
            )}
            <Typography.Title
              level={4}
              style={{ color: "#fff", margin: 0, cursor: "pointer" }}
              onClick={() => nav(DEFAULT_PAGE)}
            >
              {`Городская бизнес-платформа ${
                addonTitle ? `> ${addonTitle}` : ""
              }`}
            </Typography.Title>
          </Header>
          <ContentLayout>{children}</ContentLayout>
        </Layout>
      </Layout>
      <FloatButton.BackTop type="primary" />
    </Layout>
  );
};

export default AppLayout;

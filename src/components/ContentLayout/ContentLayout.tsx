import React from "react";
import cx from "clsx";
import css from "./ContentLayout.module.css";

const ContentLayout: React.FC<{
  children: React.ReactNode;
  stretch?: boolean;
}> = ({ children, stretch = false }) => {
  return (
    <main
      className={cx(css["content"], { [css["content__stretch"]]: stretch })}
    >
      {children}
    </main>
  );
};

export default ContentLayout;

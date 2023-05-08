import React from "react";
import { Typography } from "antd";
import { Flexbox } from "src/components";

const MainPage = () => {
  return (
    <Flexbox width="100%" height="100%" justify="center">
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        Городская бизнес-платформа позволяет размещать товары и услуги Вашего
        города
      </Typography.Title>
    </Flexbox>
  );
};

export default MainPage;

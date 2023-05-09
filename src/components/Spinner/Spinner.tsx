import React from "react";
import { Spin } from "antd";
import css from "./Spinner.module.css";

const Spinner = ({ title = "Загрузка..." }: { title?: string }) => {
  return (
    <div className={css["spinner"]}>
      <Spin tip={title} size="large" className={css["spinner-text"]} />
    </div>
  );
};

export default Spinner;

import React from "react";
import Flexbox from "../Flexbox/Flexbox";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import css from "./MarketCard.module.css";
import TooltipTitle from "../TooltipTitle/TooltipTitle";
import { MarketsData } from "src/store";

type MarketCardProps = {
  market: MarketsData;
  onClick?: (value: MarketsData) => void;
};

const MarketCard: React.FC<MarketCardProps> = ({ market, onClick }) => {
  const { address, category, img, shortName } = market;

  const onClickElement = () => {
    onClick?.(market);
  };

  return (
    <Flexbox
      gap="mini"
      layout="vertical"
      className={css["market-card"]}
      onClick={onClickElement}
    >
      <TooltipTitle level={4} className={css["title"]}>
        {shortName}
      </TooltipTitle>
      <Divider style={{ margin: 0 }} />
      <img src={img} />
      <span>{category}</span>
      <Flexbox gap="mini" align="center">
        <EnvironmentOutlined />
        <span>{address}</span>
      </Flexbox>
    </Flexbox>
  );
};

export default MarketCard;

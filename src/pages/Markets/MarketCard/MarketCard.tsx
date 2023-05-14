import React from "react";
import Flexbox from "../../../components/Flexbox/Flexbox";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { MarketsData } from "src/store";
import Card from "../../../components/Card/Card";

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
    <Card onClick={onClickElement} cardTitle={shortName}>
      <Divider style={{ margin: 0 }} />
      <img src={img} />
      <span>{category}</span>
      <Flexbox gap="mini" align="center">
        <EnvironmentOutlined />
        <span>{address}</span>
      </Flexbox>
    </Card>
  );
};

export default MarketCard;

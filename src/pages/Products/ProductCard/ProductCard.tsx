import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { Card, Flexbox } from "src/components";
import { ProductData } from "src/store";

type ProductCardProps = {
  product: ProductData;
  onClick: (product: ProductData) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { img, market, name } = product;

  const onClickCard = () => {
    onClick(product);
  };
  return (
    <Card onClick={onClickCard} cardTitle={name}>
      <Divider style={{ margin: 0 }} />
      <img src={img} />
      <Flexbox gap="mini" align="center">
        <EnvironmentOutlined />
        <span>{market}</span>
      </Flexbox>
    </Card>
  );
};

export default ProductCard;

import React, { useCallback, useRef, useState } from "react";
import { createProducts } from "./faker";
import { ProductData, setAddonTitle } from "src/store";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/hooks";
import Utils from "src/utils/Utils";
import { setProduct } from "src/store/product/productSlice";
import { PRODUCT_CARD_PAGE } from "src/AppUrls";
import { Flexbox, Spinner } from "src/components";
import { Button, Typography } from "antd";
import ProductCard from "./ProductCard/ProductCard";

const getData = () => Array.from({ length: 16 }).map(() => createProducts());

const Products = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);
  const generatedProducts = useRef<ProductData[]>(getData());
  const onRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      generatedProducts.current = getData();
      setLoading(false);
    }, 500);
  };

  const onClickProduct = useCallback(
    (value: ProductData) => {
      Utils.checkAndExecute(!!value.id, () => {
        dispatch(setProduct(value));
        dispatch(setAddonTitle(value.name));
        nav(PRODUCT_CARD_PAGE.replace(":id", value.id));
      });
    },
    [dispatch, nav]
  );
  return (
    <Flexbox layout="vertical" height="100%" width="100%" gap="small">
      <Typography.Title style={{ margin: 0 }} level={3}>
        Список товаров
      </Typography.Title>
      <Button
        onClick={onRefresh}
        loading={isLoading}
        title="Обновить подборку"
        type="primary"
      >
        Обновить
      </Button>
      {isLoading ? (
        <Spinner title="Загружаем новую подборку..." />
      ) : (
        <Flexbox gap="default" wrap="wrap" justify="center">
          {generatedProducts.current.map((el) => (
            <ProductCard key={el.id} product={el} onClick={onClickProduct} />
          ))}
        </Flexbox>
      )}
    </Flexbox>
  );
};

export default Products;

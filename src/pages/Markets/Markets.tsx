import React, { useCallback, useRef, useState } from "react";
import { Flexbox, MarketCard, Spinner } from "src/components";
import { createMarkets } from "./faker";
import { Button } from "antd";
import { MarketsData, setAddonTitle } from "src/store";
import { useAppDispatch } from "src/hooks";
import { setMarket } from "src/store/market/marketSlice";
import { useNavigate } from "react-router-dom";
import { MARKET_CARD_PAGE } from "src/AppUrls";
import Utils from "src/utils/Utils";

const getData = () => Array.from({ length: 16 }).map(() => createMarkets());

const Markets = () => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);
  const generatedMarkets = useRef<MarketsData[]>(getData());
  const onRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      generatedMarkets.current = getData();
      setLoading(false);
    }, 500);
  };

  const onClickMarket = useCallback(
    (value: MarketsData) => {
      Utils.checkAndExecute(!!value.id, () => {
        dispatch(setMarket(value));
        dispatch(setAddonTitle(value.shortName));
        nav(MARKET_CARD_PAGE.replace(":id", value.id));
      });
    },
    [dispatch, nav]
  );

  return (
    <Flexbox layout="vertical" height="100%" width="100%" gap="small">
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
          {generatedMarkets.current.map((el) => (
            <MarketCard key={el.id} market={el} onClick={onClickMarket} />
          ))}
        </Flexbox>
      )}
    </Flexbox>
  );
};

export default Markets;

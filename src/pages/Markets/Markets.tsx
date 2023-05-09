import React, { useRef, useState } from "react";
import { Flexbox, MarketCard, Spinner } from "src/components";
import { MarketsData, createMarkets } from "./faker";
import { Button } from "antd";

const Markets = () => {
  const [isLoading, setLoading] = useState(false);
  const generatedMarkets = useRef<MarketsData[]>(
    Array.from({ length: 16 }).map(() => createMarkets())
  );
  const onRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      generatedMarkets.current = Array.from({ length: 16 }).map(() =>
        createMarkets()
      );
      setLoading(false);
    }, 500);
  };
  return (
    <Flexbox layout="vertical" height="100%" width="100%" gap={12}>
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
        <Flexbox gap={24} wrap="wrap" justify="center">
          {generatedMarkets.current.map((el) => (
            <MarketCard key={el.id} market={el} />
          ))}
        </Flexbox>
      )}
    </Flexbox>
  );
};

export default Markets;

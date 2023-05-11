import { Avatar, Button, Typography } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContentLayout, ErrorPage, Flexbox } from "src/components";
import { useAppDispatch } from "src/hooks";
import { setAddonTitle } from "src/store";
import {
  MarketsData,
  clearMarketState,
  useMarketState,
} from "src/store/market/marketSlice";

type MarketProps = {
  data: MarketsData;
};
const Market: React.FC<MarketProps> = ({ data }) => {
  return (
    <Flexbox layout="vertical">
      <Flexbox align="center" gap="default">
        <Avatar src={data.img} size="large" />
        <Typography.Title style={{ margin: 0 }} level={1}>
          {data.shortName}
        </Typography.Title>
      </Flexbox>
      <Typography.Title level={4}>{data.category}</Typography.Title>
      <Typography.Text>{data.description}</Typography.Text>
    </Flexbox>
  );
};

export default function MarketContainer() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const market = useMarketState("market");
  useEffect(() => {
    return () => {
      dispatch(clearMarketState());
      dispatch(setAddonTitle(null));
    };
  }, [dispatch]);

  if (!market) {
    return (
      <ContentLayout stretch>
        <ErrorPage
          errorCode="404"
          actions={
            <Button type="primary" onClick={() => nav(-1)}>
              Назад
            </Button>
          }
        />
      </ContentLayout>
    );
  }
  return (
    <ContentLayout stretch>
      <Market data={market} />
    </ContentLayout>
  );
}

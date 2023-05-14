import React, { HTMLProps } from "react";
import Flexbox, { FlexboxProps } from "../Flexbox/Flexbox";
import css from "./Card.module.css";
import TooltipTitle from "../TooltipTitle/TooltipTitle";

type CardProps = {
  children: React.ReactNode;
  cardTitle?: string;
} & HTMLProps<HTMLDivElement> &
  FlexboxProps;

const MarketCard: React.FC<CardProps> = ({ children, cardTitle, ...other }) => {
  return (
    <Flexbox gap="mini" layout="vertical" className={css["card"]} {...other}>
      <TooltipTitle level={4} className={css["title"]}>
        {cardTitle}
      </TooltipTitle>
      {children}
    </Flexbox>
  );
};

export type { CardProps };
export default MarketCard;

import React from "react";
import { Tooltip, Typography } from "antd";
import { TitleProps } from "antd/es/typography/Title";
import { useTitleTooltip } from "./useTitleTooltip";

type TooltipTitleProps = {
  children: React.ReactNode;
  disableTooltip?: boolean;
} & TitleProps;

const TooltipTitle: React.FC<TooltipTitleProps> = ({
  children,
  disableTooltip = false,
  ...other
}) => {
  const {
    isOpen,
    onMouseEnter: onMouseEnterTooltip,
    onMouseLeave: onMouseLeaveTooltip,
    titleValue,
  } = useTitleTooltip();

  const onMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    onMouseEnterTooltip(event);
    other.onMouseEnter?.(event);
  };

  const onMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    onMouseLeaveTooltip();
    other.onMouseLeave?.(event);
  };

  if (disableTooltip)
    return <Typography.Title {...other}>{children}</Typography.Title>;
  return (
    <Tooltip open={isOpen} title={titleValue}>
      <Typography.Title
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...other}
      >
        {children}
      </Typography.Title>
    </Tooltip>
  );
};

export default TooltipTitle;

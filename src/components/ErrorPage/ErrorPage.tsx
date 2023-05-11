import React, { useMemo } from "react";
import css from "./ErrorPage.module.css";
import { Typography } from "antd";

type ErrorCode = "401" | "403" | "404" | "500";

type ErrorPageProps = {
  title?: string;
  description?: string | React.ReactNode;
  errorCode: ErrorCode & string;
  actions?: React.ReactNode;
};

const errorTitles: Record<ErrorCode, string> = {
  "401": "Аутентификация не пройдена",
  "403": "Отказано в доступе",
  "404": "Страница не найдена",
  "500": "У нас что-то пошло не так",
};

const errorDescriptions: Record<ErrorCode, string | undefined> = {
  "401": "Пожалуйста, войдите в систему и попробуйте снова",
  "403":
    "Вы запросили страницу, доступ к которой ограничен специальными правами",
  "404":
    "Кажется, что-то пошло не так! Страница, которую Вы запрашиваете, не существует",
  "500": "Команда разработчиков уже выехала на место аварии",
};

const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode,
  actions,
  description,
  title,
}) => {
  const renderDescription = useMemo(() => {
    if (description === undefined) {
      return (
        <div className={css["error__description"]}>
          <Typography.Text className={css["error__description-text"]}>
            {errorDescriptions[errorCode] ?? ""}
          </Typography.Text>
        </div>
      );
    } else {
      if (typeof description === "string") {
        return (
          <div className={css["error__description"]}>
            <Typography.Text className={css["error__description-text"]}>
              {description}
            </Typography.Text>
          </div>
        );
      }
      return description;
    }
  }, [description, errorCode]);
  return (
    <div className={css["error"]}>
      <div className={css["error__code"]}>
        <Typography.Text>{errorCode}</Typography.Text>
      </div>
      <Typography.Title className={css["error__title"]} level={5}>
        {title ?? errorTitles[errorCode] ?? ""}
      </Typography.Title>
      {renderDescription}
      {actions && <div className={css["error__actions"]}>{actions}</div>}
    </div>
  );
};

export default ErrorPage;

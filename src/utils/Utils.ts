import { notification } from "antd";

export default class Utils {
  static checkAndExecute(
    condition: boolean,
    execFunc: () => void,
    warnDescription?: string
  ) {
    if (condition) {
      execFunc();
    } else
      notification.warning({
        message: "Действие невозможно",
        description: warnDescription ?? "Не указан идентификатор",
      });
  }
}

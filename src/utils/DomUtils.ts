export default class DomUtils {
  static getWidth(element?: HTMLElement) {
    if (element) {
      let width = element.offsetWidth;
      const style = window.getComputedStyle(element);
      width -=
        parseFloat(style.paddingLeft) +
        parseFloat(style.paddingRight) +
        parseFloat(style.borderLeftWidth) +
        parseFloat(style.borderRightWidth);
      return width;
    }
    return 0;
  }
}

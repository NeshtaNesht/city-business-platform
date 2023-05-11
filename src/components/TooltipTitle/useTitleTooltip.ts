import { useCallback, useRef, useState } from "react";
import DomUtils from "src/utils/DomUtils";

export type ReturnTypeUseTitleTooltip = ReturnType<typeof useTitleTooltip>;

export const useTitleTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const titleValue = useRef<string | undefined>(undefined);

  const onMouseEnter = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const el = document.createElement(event.currentTarget.tagName);
    el.innerText = event.currentTarget.innerText;
    el.style.position = "fixed";
    el.style.display = "-webkit-inline-box";
    el.style.overflow = "hidden";
    el.style.width = "max-content";
    el.style.webkitBoxOrient = "vertical";
    el.style.webkitLineClamp = "1";
    el.style.visibility = "hidden";
    el.className = event.currentTarget.className;
    event.currentTarget.append(el);
    const width = DomUtils.getWidth(event.currentTarget);
    if (width < el.offsetWidth) {
      titleValue.current = event.currentTarget.innerText;
      setIsOpen(true);
    }
    el.remove();
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    titleValue: titleValue.current,
    onMouseEnter,
    onMouseLeave,
  };
};

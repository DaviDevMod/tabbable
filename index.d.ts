type FocusableElement = HTMLElement | SVGElement;

export declare function tabbable(
  container: Element,
  includeContainer?: boolean
): FocusableElement[];

export declare function focusable(
  container: Element,
  includeContainer?: boolean
): FocusableElement[];

export declare function isTabbable(element: Element): boolean;

export declare function isFocusable(element: Element): boolean;

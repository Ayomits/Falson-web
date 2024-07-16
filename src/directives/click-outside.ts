import type { DirectiveBinding } from "vue";

interface ExtendedHTMLElement extends HTMLElement {
  _clickOutsideHandler?: (event: MouseEvent) => void;
}

const handleClickOutside = (
  event: MouseEvent,
  el: ExtendedHTMLElement,
  binding: DirectiveBinding
) => {
  if (!(el === event.target || el.contains(event.target as Node))) {
    binding.value(event);
  }
};

export default {
  mounted(el: ExtendedHTMLElement, binding: DirectiveBinding) {
    const clickHandler = (event: MouseEvent) =>
      handleClickOutside(event, el, binding);
    document.addEventListener("click", clickHandler);
    el._clickOutsideHandler = clickHandler;
  },
  unmounted(el: ExtendedHTMLElement) {
    if (el._clickOutsideHandler) {
      document.removeEventListener("click", el._clickOutsideHandler);
      delete el._clickOutsideHandler;
    }
  },
};

import { setCookie, getCookie } from "utils/cookies";

export const themeChangerStore = (() => {
  const listenerList: Listener[] = [];

  return {
    setTheme(theme: ThemeType) {
      const html = document.querySelector("html");

      if (!html) throw new Error("html element not found");

      html.dataset.theme = theme;
      setCookie("theme", theme);
      listenerList.forEach((listener) => listener());
    },
    subscribe(listener: Listener) {
      listenerList.push(listener);

      return () => listenerList.filter((listener) => listener !== listener);
    },
    getSnapshot() {
      return getCookie("theme") ?? "dark";
    },
  };
})();

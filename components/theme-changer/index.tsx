"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useSyncExternalStore } from "react";
import { themeChangerStore } from "./theme-changer.store"

export function ThemeChanger() {
  // Server snapshot 설정 필요
  const snapshot = useSyncExternalStore(themeChangerStore.subscribe, themeChangerStore.getSnapshot, () => "dark");

  const onClickThemeChanger = () => {
    themeChangerStore.setTheme(snapshot === "dark" ? "corporate" : "dark");
  }

  return (
    <label className="theme-changer">
      { snapshot === "dark" ? <MdDarkMode title="dark" size={28}/> : <MdLightMode title="light" size={28}/> }
      <input type="checkbox" className="toggle toggle-info" ></input>
    </label>
  )
}
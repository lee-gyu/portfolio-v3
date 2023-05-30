import { memo } from "react";
import profile from "data/profile.json"

import { BsFileCodeFill } from "react-icons/bs"

import { ActionButtonGroups } from "components/app/action-btn-group";
import { ThemeChanger } from "components/theme-changer";

export const AppHeader = memo(() => {
  return (
    <header className="app-header">
      <BsFileCodeFill size={36}/>
      <div>
        <h1 className="text-lg">{profile.fullName}</h1>
        <h2 className="text-sm font-light">{profile.job}</h2>
      </div>
      
      <div className="app-header__action-buttons">
        <ThemeChanger/>
        <ActionButtonGroups size={28}/>
      </div>
    </header>
  )
})

AppHeader.displayName = "AppHeader";
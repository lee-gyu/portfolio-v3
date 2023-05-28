import { memo } from "react";
import profile from "data/profile.json"

import { AiOutlineCode } from "react-icons/ai"

export const AppHeader = memo(() => {
  return (
    <header className="app-header">
      <AiOutlineCode size={36}/>
      <p>
        <h1 className="text-lg">{profile.fullName}</h1>
        <h2 className="text-sm font-light">{profile.job}</h2>
      </p>
      <div>
        
      </div>
    </header>
  )
})

AppHeader.displayName = "AppHeader";
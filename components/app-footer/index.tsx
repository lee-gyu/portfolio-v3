import { ActionButtonGroups } from "components/app/action-btn-group";
import { memo } from "react";

export const AppFooter = memo(() => {
  return (
    <footer className="app-footer">
      <div className="app-footer__action-buttons">
        <ActionButtonGroups size={24}/>
      </div>
    </footer>
  )
});

AppFooter.displayName = "AppFooter";
import { AppFooter } from "components/app-footer";
import { AppHeader } from "components/app-header";
import { PropsWithChildren } from "react";

export function App( props: PropsWithChildren<unknown> ) {
  return (
    <div className="app">
      <AppHeader/>
      <main className="app-main">
        {props.children}
      </main>
      <AppFooter/>
    </div>
  )
}
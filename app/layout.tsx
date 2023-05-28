import { AppHeader } from "components/app-header";

import "styles/index.scss";

export const metadata = {
  title: 'lee-gyu',
  description: 'Lee Gyu Cheol Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <div className="app">
          <AppHeader/>
          <main className="app-main">
            {children}
          </main>
        </div>
        </body>
    </html>
  )
}

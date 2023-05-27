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
      <body>
        <div>
          <main>
            <AppHeader/>
            <main className="app-main">
              {children}
            </main>
          </main>
        </div>
        </body>
    </html>
  )
}
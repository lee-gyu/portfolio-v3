import { App } from "components/app";


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
        <App>
          {children}
        </App>
        </body>
    </html>
  )
}

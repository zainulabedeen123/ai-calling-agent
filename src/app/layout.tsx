// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>App Header</header>
        <main>{children}</main>
        <footer>App Footer</footer>
      </body>
    </html>
  );
}

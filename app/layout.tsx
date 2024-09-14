import { Providers } from "./components/providers";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

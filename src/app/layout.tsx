import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import LayoutProvider from "@/providers/layout-provider";
import ReduxProvider from "@/providers/redux-provider";
import '@ant-design/v5-patch-for-react-19';
import { ToastContainer } from "react-toastify";
import 'remixicon/fonts/remixicon.css'
export const metadata: Metadata = {
  title: "Chat App",
  description: "Real time chat app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ToastContainer position="top-center" />
          <ThemeProvider>
            <ThemeProvider>
              <ReduxProvider>
                <LayoutProvider>{children}</LayoutProvider>
              </ReduxProvider>
            </ThemeProvider>
          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}

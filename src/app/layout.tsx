import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "@/components/providers/convex-client-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: { default: "Mi CRM", template: "%s · Mi CRM" },
  description: "CRM para gestionar clientes, seguimientos y ventas.",
};

export const viewport: Viewport = {
  themeColor: "#161826",
};

// Oscuro por defecto; el modo claro se activa con data-theme="light" en <html>.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full">
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TomatoGrowGuide - Beginner Tomato Growing Tips",
    template: "%s | TomatoGrowGuide",
  },
  description:
    "Beginner tomato growing guides covering grow bags vs pots, watering schedules, leggy seedling fixes, and sunlight needs. Practical advice that actually works.",
  keywords:
    "tomato growing guide, beginner tomato, grow bags vs pots, how to water tomatoes, leggy tomato seedlings",
  openGraph: {
    siteName: "TomatoGrowGuide",
    type: "website",
  },
  verification: {
    google: "dXQ8xXghFAnaP7UpR0YBweaYvaghR6rxGuENFsTeKn8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

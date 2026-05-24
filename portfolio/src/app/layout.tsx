import "./global.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RouteTransition from "@/components/route-transition";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main className="pt-6 flex-grow">
            <RouteTransition>{children}</RouteTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

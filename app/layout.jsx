import "./globals.css";

export const metadata = {
  title: "Hassan Chowdhry",
  description:
    "Explore my portfolio, showcasing my expertise in software development. Discover my innovative projects and professional achievements. - Hassan Chowdhry",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

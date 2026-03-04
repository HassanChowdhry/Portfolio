export const metadata = {
  title: "Portfolio CMS – Sanity Studio",
  description: "Content management for hassanchowdhry.com",
};

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

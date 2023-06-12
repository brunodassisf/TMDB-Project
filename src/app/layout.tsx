import "@/src/style/main.css";
import Header from "../core/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <main>{children}</main>
        <div id="__modal" />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "پنل مدیریت دانشگاهی",
    description: "سیستم مدیرتی دانشگاهی Nextjs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="">{children}</body>
        </html>
    );
}

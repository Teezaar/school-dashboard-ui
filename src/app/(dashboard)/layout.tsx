import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative h-screen flex gradient-background">
            {/* Lyaout Right (Side-Bar)*/}
            <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[14%] lg:px-4 overflow-y-auto scrollable pb-8 glassUim scroll-smooth">
                <Link
                    href={"/"}
                    className="flex items-center justify-center lg:justify-start gap-2 my-2"
                >
                    <Image
                        src={"/logo.png"}
                        width={32}
                        height={32}
                        alt="logo"
                        loading="lazy"
                        className="mt-2 mb-4"
                    />
                    <span className="hidden lg:block font-bold">
                        دانشگاه ملی
                    </span>
                </Link>
                <Menu />
            </div>
            {/* Lyaout Left Side (Content)*/}
            <div className="flex flex-col w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-y-scroll scrollable scroll-smooth relative">
                <Navbar />
                {children}
            </div>
        </div>
    );
}

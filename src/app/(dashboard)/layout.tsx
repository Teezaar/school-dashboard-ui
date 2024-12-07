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
        <div className="h-screen flex">
            {/* Left Side */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] lg:px-4 overflow-y-scroll scrollable pb-8">
                <Link
                    href={"/"}
                    className="flex items-center justify-center lg:justify-start gap-2 my-2"
                >
                    <Image
                        src={"/logo.png"}
                        width={32}
                        height={32}
                        alt="logo"
                        className="mt-2 mb-4"
                    />
                    <span className="hidden lg:block">دانشگاه ملی</span>
                </Link>
                <Menu />
            </div>

            {/* Right Side */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-y-scroll bg-[#f2f7ff] scrollable">
                <Navbar />
                {children}
            </div>
        </div>
    );
}

"use client";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const menuItems = [
    {
        title: "منو",
        items: [
            {
                icon: "/home.png",
                label: "خانه",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/teacher.png",
                label: "اساتید",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/student.png",
                label: "دانشجویان",
                href: "/list/students",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/parent.png",
                label: "والدین",
                href: "/list/parents",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/subject.png",
                label: "موضوعات",
                href: "/list/subjects",
                visible: ["admin"],
            },
            {
                icon: "/class.png",
                label: "کلاس‌ها",
                href: "/list/classes",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/lesson.png",
                label: "درس‌ها",
                href: "/list/lessons",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/exam.png",
                label: "آزمون‌ها",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/assignment.png",
                label: "تکالیف",
                href: "/list/assignments",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/result.png",
                label: "نتایج",
                href: "/list/results",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/attendance.png",
                label: "حضور و غیاب",
                href: "/list/attendance",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/calendar.png",
                label: "رویدادها",
                href: "/list/events",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/announcement.png",
                label: "اطلاعیه ها",
                href: "/list/announcements",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
    {
        title: "حساب کاربری",
        items: [
            {
                icon: "/profile.png",
                label: "پروفایل",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/setting.png",
                label: "تنظیمات",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "/logout.png",
                label: "خروج",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            },
        ],
    },
];

const Menu = () => {
    const [active, setActive] = useState<string>("");

    const handleLinkClick = (href: string) => {
        if (active !== href) {
            setActive(href);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
            className="text-sm"
        >
            {menuItems.map((i) => (
                <div
                    className="flex flex-col gap-3 lg:gap-2 mt-7 lg:mt-0"
                    key={i.title}
                >
                    <span className="hidden lg:block text-gray-400 font-light mt-4">
                        {i.title}
                    </span>
                    {i.items.map((item) => {
                        if (item.visible.includes(role)) {
                            return (
                                <Link
                                    href={item.href}
                                    prefetch={true}
                                    key={item.label}
                                    className={`flex items-center justify-center lg:justify-start gap-4 py-1.5 md:px-2 lg:rounded-md transition-all duration-300 will-change-transform
                                    ${
                                        active === item.href
                                            ? "bg-mySky lg:scale-110 text-gray-800"
                                            : "text-gray-500 hover:bg-myPurpleLight lg:hover:scale-110  relative z-[9999999999] data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-bottom data-[tooltip]:after:opacity-0 hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-black data-[tooltip]:after:bottom-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] data-[tooltip]:after:px-1.5 data-[tooltip]:after:py-1 data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-white data-[tooltip]:after:whitespace-nowrap data-[tooltip]:after:text-[10px] data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-black data-[tooltip]:before:[clip-path:polygon(100%_0,0_0,50%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:bottom-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px]"
                                    }`}
                                    onClick={() => handleLinkClick(item.href)}
                                    data-tooltip={item.label}
                                >
                                    <Image
                                        src={item.icon}
                                        width={20}
                                        height={20}
                                        loading="lazy"
                                        alt="menu icon"
                                    />
                                    <span className="hidden lg:block">
                                        {item.label}
                                    </span>
                                    
                                </Link>
                            );
                        }
                    })}
                </div>
            ))}
        </motion.div>
    );
};

export default Menu;

import Image from "next/image";
import Link from "next/link";

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
                label: "معلمان",
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
    return (
        <div className="text-sm">
            {menuItems.map((i) => (
                <div
                    className="flex flex-col gap-5 lg:gap-4 mt-7 lg:mt-0"
                    key={i.title}
                >
                    <span className="hidden lg:block text-gray-400 font-light mt-4">
                        {i.title}
                    </span>
                    {i.items.map((item) => (
                        <Link
                            href={item.href}
                            key={item.label}
                            className="flex items-center justify-center lg:justify-start gap-4 text-gray-500"
                        >
                            <Image
                                src={item.icon}
                                width={20}
                                height={20}
                                alt="menu icon"
                            />
                            <span className="hidden lg:block">
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Menu;

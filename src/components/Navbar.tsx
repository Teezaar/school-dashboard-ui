"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between p-4"
        >
            {/* Search Bar */}
            <div
                className="hidden md:flex items-center justify-center gap-2
            text-sm rounded-full ring-[1.5px] ring-gray-400 px-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 stroke-neutral-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>

                <input
                    type="text"
                    placeholder="جستجو ...."
                    className="w-[200px] p-2 bg-transparent outline-none"
                />
            </div>
            {/* Icons and User */}
            <div className="flex items-center gap-6 justify-end w-full">
                {/* Message Icon */}
                <div className="flex items-center justify-center bg-transparent rounded-full w-7 h-7 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-neutral-500 hover:fill-white
                        duration-500 transition-all"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                        />
                    </svg>
                </div>
                {/* Announcement Icon */}
                <div className="flex items-center justify-center bg-transparent rounded-full w-7 h-7 cursor-pointer relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-neutral-500 hover:fill-myYellow
                        duration-500 transition-all focus:outline-none focus:ring-0"
                        tabIndex={-1}
                        onFocus={(e) => e.target.blur()}
                    >
                        <motion.path
                            whileHover={{
                                rotate: [0, 10, -10, 10, 0, 10, -10, 10, 0], // Sequence of rotation values
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut",
                                },
                            }}
                            whileTap={{ scale: 0.9 }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                        />
                    </svg>
                    <div className="absolute -top-3 -right-3 bg-purple-400 rounded-full w-5 h-5 text-white flex justify-center items-center text-sm">
                        4
                    </div>
                </div>

                {/* User Section */}
                <div className="flex flex-col">
                    <span className="text-gray-900 text-sm font-medium">
                        جواد غفوری
                    </span>
                    <span className="text-gray-800 text-[13px] font-light">
                        ادمین
                    </span>
                </div>
                <Image
                    src="/avatar.png"
                    alt="avatar"
                    width={36}
                    height={36}
                    loading="lazy"
                    className="rounded-full"
                />
            </div>
        </motion.div>
    );
};

export default Navbar;

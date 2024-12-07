import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            {/* Search Bar */}
            <div
                className="hidden md:flex items-center justify-center gap-2
            text-sm rounded-full ring-[1.5px] ring-gray-400 px-2"
            >
                <Image src="/search.png" width={14} height={14} alt="search" />
                <input
                    type="text"
                    placeholder="جستجو ...."
                    className="w-[200px] p-2 bg-transparent outline-none"
                />
            </div>
            {/* Icons and User */}
            <div className="flex items-center gap-6 justify-end w-full">
                {/* Message Icon */}
                <div className="flex items-center justify-center bg-white rounded-full w-7 h-7 cursor-pointer">
                    <Image
                        src="/message.png"
                        width={20}
                        height={20}
                        alt="message"
                    />
                </div>
                {/* Announcement Icon */}
                <div className="flex items-center justify-center bg-white rounded-full w-7 h-7 cursor-pointer relative">
                    <Image
                        src="/announcement.png"
                        width={20}
                        height={20}
                        alt="announcement"
                    />
                    <div className="absolute -top-3 -right-3 bg-purple-500 rounded-full w-5 h-5 text-white flex justify-center items-center text-sm">
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
                    className="rounded-full"
                />
            </div>
        </div>
    );
};

export default Navbar;

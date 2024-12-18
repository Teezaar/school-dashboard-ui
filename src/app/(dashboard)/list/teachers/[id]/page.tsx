import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import PerformanceChart from "@/components/PerformanceChart";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
    return (
        <div className="flex p-4 flex-col gap-4 xl:flex-row">
            {/* Rigth */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* INFO CARD */}
                    <div className="bg-gradient-to-tr from-myPurpleLight to-mySkyLight py-5 px-3 rounded-md flex-1 flex gap-4">
                        {/* IMAGE */}
                        <div className="min-w-1/3">
                            <Image
                                src="https://wallpapercave.com/wp/wp9001509.jpg"
                                alt=""
                                width={144}
                                height={144}
                                className="min-w-36 min-h-36 rounded-full object-cover"
                            />
                        </div>
                        {/* INFO */}
                        <div className="w-2/3 flex flex-col gap-2 justify-between">
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-semibold">
                                    مهدی مدرس
                                </h1>
                                <FormModal
                                    table="teachers"
                                    type="update"
                                    data={{
                                        id: 1,
                                        username: "javad",
                                        email: "XXXXXXXXX",
                                        password: "xxx",
                                        firstname: "javad",
                                        lastname: "XXXXXXXXX",
                                        phone: "xxx",
                                        address:
                                            "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                                        blood: "A+",
                                        birthday: "2000-01-01",
                                        sex: "male",
                                        img: "",
                                    }}
                                />
                            </div>
                            <p className="text-sm text-gray-600 text-justify">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                            </p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex item-center gap-2">
                                    <Image
                                        src="/blood.png"
                                        alt=""
                                        width={14}
                                        height={14}
                                    />
                                    <span>A+</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex item-center gap-2">
                                    <Image
                                        src="/date.png"
                                        alt=""
                                        width={14}
                                        height={14}
                                    />
                                    <span>78/03/23</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex item-center gap-2">
                                    <Image
                                        src="/mail.png"
                                        alt=""
                                        width={14}
                                        height={14}
                                    />
                                    <span>javad@gmail.com</span>
                                </div>
                                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex item-center gap-2">
                                    <Image
                                        src="/phone.png"
                                        alt=""
                                        width={14}
                                        height={14}
                                    />
                                    <span>1234567890</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SMALL CARDS */}
                    <div className="flex flex-1 gap-2 flex-wrap justify-between">
                        <div className="glassUi w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleAttendance.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="text-xs text-gray-600">
                                <h1 className="font-semibold text-xl">90%</h1>
                                <span className="text-gray-600 text-sm">
                                    حضور
                                </span>
                            </div>
                        </div>
                        <div className="glassUi w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleClass.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="text-xs text-gray-600">
                                <h1 className="font-semibold text-xl">7</h1>
                                <span className="text-gray-600 text-sm">
                                    کلاسها
                                </span>
                            </div>
                        </div>
                        <div className="glassUi w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleLesson.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="text-xs text-gray-600">
                                <h1 className="font-semibold text-xl">3</h1>
                                <span className="text-gray-600 text-sm">
                                    دروس
                                </span>
                            </div>
                        </div>
                        <div className="glassUi w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                            <Image
                                src="/singleBranch.png"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="text-xs text-gray-600">
                                <h1 className="font-semibold text-xl">2</h1>
                                <span className="text-gray-600 text-sm">
                                    تخصص
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM */}
                <div className="glassUi px-3 py-6 rounded-md mt-4 h-[800px]">
                    <h1 className="text-xl font-semibold text-center scrollable">
                        برنامه آموزشی استاد
                    </h1>
                    <BigCalendar />
                </div>
            </div>
            {/* LEFT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <div className="glassUi p-4 rounded-md">
                    <h1 className="">لینکها</h1>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-600">
                        <Link
                            href="/"
                            className="p-3 rounded-md bg-mySky flex items-center gap-2"
                        >
                            کلاسهای استاد
                        </Link>
                        <Link
                            href="/"
                            className="p-3 rounded-md bg-myPurpleLight flex items-center gap-2"
                        >
                            دانشجویان استاد
                        </Link>
                        <Link
                            href="/"
                            className="p-3 rounded-md bg-myYellowLight flex items-center gap-2"
                        >
                            دروس استاد
                        </Link>
                        <Link
                            href="/"
                            className="p-3 rounded-md bg-myRedLight flex items-center gap-2"
                        >
                            امتحانات استاد
                        </Link>
                        <Link
                            href="/"
                            className="p-3 rounded-md bg-myBlue flex items-center gap-2"
                        >
                            تکالیف استاد
                        </Link>
                    </div>
                </div>
                <PerformanceChart />
                <Announcements />
            </div>
        </div>
    );
};

export default SingleTeacherPage;

import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
    return (
        <div className="p-4 flex flex-col lg:flex-row gap-4">
            {/* RIGHT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
                {/* User Card */}
                <div className="flex flex-wrap justify-between gap-4">
                    <UserCard type="دانشجو" />
                    <UserCard type="استاد" />
                    <UserCard type="والدین" />
                    <UserCard type="کارکنان" />
                </div>
                {/* MIDDLE CHART */}
                <div className="flex flex-col xl:flex-row gap-4">
                    {/* COUNT CHART */}
                    <div className="w-full xl:w-1/3 h-[450px]">
                        <CountChart
                            title="تعداد دانشجویان"
                            data={[
                                {
                                    name: "کارشناسی",
                                    count: 750,
                                    fill: "var(--myBlue)",
                                },
                                {
                                    name: "ارشد",
                                    count: 150,
                                    fill: "var(--myPurpleLight)",
                                },
                                {
                                    name: "دکترا",
                                    count: 60,
                                    fill: "var(--myYellow)",
                                },
                            ]}
                        />
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full xl:w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                {/* BOTTOM CHART */}
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>
            </div>
            {/* LEFT */}
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
};

export default AdminPage;

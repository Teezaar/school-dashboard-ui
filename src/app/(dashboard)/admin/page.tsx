import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
    return (
        <div className="p-4 flex flex-col md:flex-row gap-4">
            {/* Left */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* User Card */}
                <div className="flex flex-wrap justify-between gap-4">
                    <UserCard type="دانشجو" />
                    <UserCard type="استاد" />
                    <UserCard type="والدین" />
                    <UserCard type="کارکنان" />
                </div>
                {/* MIDDLE CHART */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* COUNT CHART */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                {/* BOTTOM CHART */}
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>
            </div>
            {/* Right */}
            <div className="w-full lg:w-1/3">e</div>
        </div>
    );
};

export default AdminPage;

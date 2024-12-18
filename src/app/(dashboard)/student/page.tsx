import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";

const StudentPage = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 p-4">
            {/* Right */}
            <div className="w-full xl:w-2/3 flex flex-col gap-4">
                <div className="h-full glassUi p-4 rounded-md">
                    <h1 className="text-xl font-semibold">
                        برنامه آموزشی (4A)
                    </h1>
                    <BigCalendar />
                </div>
            </div>
            {/* Left */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    );
};

export default StudentPage;

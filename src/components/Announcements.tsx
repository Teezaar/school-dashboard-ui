const Announcements = () => {
    return (
        <div className="glassUi rounded-lg p-2">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold my-4">اطلاعیه ها</h1>
                <span className="text-xs text-gray-500">مشاهده</span>
            </div>
            <div className="flex flex-col gap-8 mt-2 text-justify">
                <div className="bg-myBlueLight rounded-md p-2 relative ">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium text-sm">
                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        </h2>
                        <span className="absolute -top-5 left-0 text-xs border-2 border-myBlueLight text-gray-500 bg-white rounded-md p-1">
                            1403/05/06
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </div>
                <div className="bg-myPurpleLight rounded-md p-2 relative">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium text-sm">
                            لورم متن ساختگی با تولید سادگی نامفهوم از چاپ
                        </h2>
                        <span className="absolute -top-5 left-0 text-xs border-2 border-myPurpleLight text-gray-500 bg-white rounded-md p-1">
                            1403/12/01
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </div>
                <div className="bg-myYellowLight rounded-md p-2 relative">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium text-sm">
                            لورم ایپسوم متن ساختگی با تولید سادگی از
                        </h2>
                        <span className="absolute -top-5 left-0 text-xs border-2 border-myYellowLight text-gray-500 bg-white rounded-md p-1">
                            1403/08/08
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                        لور از صنعت چاپ و با استفاده از طراحان گرافیک است
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                        که لازم است
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Announcements;

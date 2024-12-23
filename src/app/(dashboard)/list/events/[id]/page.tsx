import Image from "next/image";

const Page = () => {
    return (
        <div className="flex items-center justify-center overflow-hidden">
            <div className="glassUi my-36 rounded-md w-[95%] md:w-[85%] relative p-6">
                {/* Image positioned outside the container */}
                <div className="flex items-center justify-center relative -top-24">
                    <Image
                        src="https://wallpapercave.com/wp/wp14828080.webp"
                        height={450}
                        width={450}
                        loading="lazy"
                        alt="Beautiful abstract wallpaper"
                        className="rounded-md object-cover shadow-lg h-[200px] w-[300px] md:h-[250px] md:w-[500px]"
                    />
                </div>

                {/* Content inside the glass UI */}
                <div className="flex flex-col gap-4 justify-center items-center -mt-12">
                    <h1 className="text-2xl font-semibold text-center">
                        عنوان
                    </h1>
                    <p className="text-justify leading-relaxed">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط فعلی تکنولوژی مورد نیاز. لورم ایپسوم متن
                        ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                        در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی
                        با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                        طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                        ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                        مورد نیاز. لورم ایپسوم متن ساختگی با تولید سادگی لورم
                        ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                        با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;

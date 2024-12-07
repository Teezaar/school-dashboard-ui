"use client";

import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Totall",
        count: 106,
        fill: "white",
    },
    {
        name: "B",
        count: 44,
        fill: "#C3EBFA",
    },
    {
        name: "G",
        count: 56,
        fill: "#FAE27C",
    },
];

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">دانشجویان</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* CHART */}
            <div className="w-full h-[75%] relative">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar
                            dataKey="count"
                            cornerRadius={5}
                            background
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image
                    src="/maleFemale.png"
                    alt="Gender"
                    width={60}
                    height={60}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-mySky rounded-full" />
                    <h1 className="font-bold">547</h1>
                    <h1 className="text-xs text-gray-500">پسر (44%)</h1>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-myYellow rounded-full" />
                    <h1 className="font-bold">697</h1>
                    <h1 className="text-xs text-gray-500">دختر (56%)</h1>
                </div>
            </div>
        </div>
    );
};

export default CountChart;

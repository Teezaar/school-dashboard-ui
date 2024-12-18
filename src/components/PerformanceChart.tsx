"use client";

import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Group A", value: 92, fill: "var(--myBlueLight)" },
    { name: "Group B", value: 8, fill: "var(--myPurple)" },
];

const PerformanceChart = () => {
    return (
        <div className="glassUi p-4 rounded-md h-80 relative">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">عملکرد</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                </svg>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                    />
                </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-3xl font-bold">9.2</h1>
                <p className="text-xs text-gray-500">امتیاز کل</p>
            </div>
            <h2 className="text-lg font-semibold absolute bottom-16 right-0 left-0 m-auto text-center">
                نیمسال اول - نیم سال دوم
            </h2>
        </div>
    );
};

export default PerformanceChart;

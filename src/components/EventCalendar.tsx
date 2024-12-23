"use client";

import { useState } from "react";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian"; // Import Persian calendar

import { Calendar } from "react-calendar";
import PersianCalendar from "./PersianCalendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
        time: "14:00 - 16:00",
        date: "2025-01-01",
        description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    },
    {
        id: 2,
        title: "لورم ایپسوم متن ساختگی صنعت چاپ",
        time: "08:00 - 12:00",
        date: "2024-12-01",
        description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    },
    {
        id: 3,
        title: " با استفاده از طراحان گرافیک استفاده از طراحان گرافیک است",
        time: "10:00 - 12:30",
        date: "2024-10-08",
        description:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    },
];

const EventCalendar = () => {
    // Set the initial value to Persian date
    const [value, onChange] = useState<Value>(
        new DateObject({ calendar: persian }).toDate()
    );

    // Convert the selected date to Persian format when onChange is triggered
    const handleChange = (newDate: Value) => {
        if (newDate instanceof DateObject) {
            onChange(newDate.toDate()); // Convert back to standard Date if needed
        } else {
            onChange(newDate);
        }
    };

    return (
        <div className="glassUi rounded-lg p-2">
            <PersianCalendar />

            <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold my-4">رویدادها</h1>
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
            <div className="flex flex-col gap-4 ">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="border-2 border-gray-100 border-t-4 odd:border-myPurple
                        even:border-myBlue rounded-md p-3 flex flex-col gap-2 text-sm text-justify
                        bg-white/60 transition-all duration-500"
                    >
                        <h1 className="text-gray-600 font-semibold">
                            {event.title}
                        </h1>
                        <h2 className="text-xs font-medium text-gray-500">
                            {event.time}
                        </h2>
                        <p className="text-sm mt-2 font-medium text-gray-500">
                            {event.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;

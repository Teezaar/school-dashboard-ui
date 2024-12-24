"use client";
import { useState } from "react";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";

const weekDays = [
    ["شنبه", "ش"],
    ["یکشنبه", "ی"],
    ["دوشنبه", "د"],
    ["سه شنبه", "س"],
    ["چهارشنبه", "چ"],
    ["پنجشنبه", "پ"],
    ["جمعه", "ج"],
];

const PersianCalendar = () => {
    const [value, setValue] = useState(new Date());

    const handleDateChange = (date: DateObject | null) => {
        setValue(date?.toDate() ?? new Date());
    };

    return (
        <div className="calendar-container">
            <Calendar
                plugins={[weekends()]}
                numberOfMonths={1}
                className="full-size-calendar"
                weekDays={weekDays}
                value={value}
                onChange={handleDateChange}
                showOtherDays
                calendar={persian}
                locale={persian_fa}
            />
        </div>
    );
};

export default PersianCalendar;

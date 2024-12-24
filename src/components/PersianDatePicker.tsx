import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import highlightWeekends from "react-multi-date-picker/plugins/highlight_weekends";

const months = [
    ["فر", "ف"],
    ["ارد", "ا"],
    ["خرد", "خ"],
    ["تیر", "ت"],
    ["مر", "م"],
    ["شه", "ش"],
    ["مهر", "م"],
    ["آبا", "آ"],
    ["آذر", "آ"],
    ["دی", "د"],
    ["بهم", "ب"],
    ["اسف", "ا"],
];
const weekDays = [
    ["شنبه", "ش"],
    ["یکشنبه", "ی"],
    ["دوشنبه", "د"],
    ["سه شنبه", "س"],
    ["چهارشنبه", "چ"],
    ["پنجشنبه", "پ"],
    ["جمعه", "ج"],
];

const PersianDatePicker = ({ className }: { className?: string }) => {
    const [value, setValue] = useState(new Date());

    const handleDateChange = (date: DateObject | null, options: any) => {
        setValue(date?.toDate() ?? new Date());
    };

    return (
        <div className={`w-full ${className ?? ""}`}>
            <DatePicker
                // months={months}
                plugins={[highlightWeekends()]}
                weekDays={weekDays}
                value={value}
                onChange={handleDateChange}
                showOtherDays
                calendar={persian}
                locale={persian_fa}
                inputClass="custom-input"
                position={
                    className == "announcement-modal" ? "top-start" : "top-end"
                }
                fixMainPosition={true}
                fixRelativePosition={true}
                offsetY={className === "announcement-modal" ? -200 : 0}
            />
        </div>
    );
};

export default PersianDatePicker;

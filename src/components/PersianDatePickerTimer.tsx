"use client";
import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const PersianDatePickerTimer = () => {
    const [value, setValue] = useState(new Date());

    const handleDateChange = (date: DateObject | null, options: any) => {
        setValue(date?.toDate() ?? new Date());
    };

    return (
        <div className="w-full">
            <DatePicker
                format="YYYY/MM/DD HH:mm:ss"
                plugins={[
                    <TimePicker
                        position="bottom"
                        hStep={2}
                        mStep={3}
                        sStep={4}
                        key="time-picker" // add a unique key prop here
                    />,
                ]}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
            />
        </div>
    );
};

export default PersianDatePickerTimer;

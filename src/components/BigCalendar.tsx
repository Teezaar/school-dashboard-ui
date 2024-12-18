"use client";

import "moment/locale/fa";
import { useState } from "react";
import moment from "moment-jalaali";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";

moment.locale("fa");
moment.loadPersian({ usePersianDigits: false });

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WEEK);

    return (
        <div
            className="scrollable-calendar"
            style={{ height: "100%", overflow: "hidden" }}
        >
            <Calendar
                localizer={localizer}
                events={calendarEvents.filter(
                    (event) =>
                        moment(event.start).day() !== 4 &&
                        moment(event.start).day() !== 5
                )}
                startAccessor="start"
                endAccessor="end"
                views={[Views.WEEK, Views.DAY]}
                view={view}
                onView={setView}
                style={{ height: "98%", width: "100%" }}
                min={new Date(2024, 11, 8, 8, 0)}
                max={new Date(2024, 11, 8, 17, 0)}
                messages={{
                    day: "روز",
                    week: "هفته",
                }}
                formats={{
                    dateFormat: "DD",
                    dayFormat: (date, culture, localizer) =>
                        moment(date).day() !== 4 && moment(date).day() !== 5
                            ? localizer
                                ? localizer.format(date, "dddd", culture)
                                : ""
                            : "",
                    weekdayFormat: (date, culture, localizer) =>
                        moment(date).day() !== 4 && moment(date).day() !== 5
                            ? localizer
                                ? localizer.format(date, "dddd", culture)
                                : ""
                            : "",
                    dayHeaderFormat: "jYYYY/jMM/jDD",
                    monthHeaderFormat: (date) =>
                        moment(date).format("jMMMM YYYY"),
                }}
                dayPropGetter={(date) => {
                    if (moment(date).day() === 4 || moment(date).day() === 5) {
                        return {
                            style: {
                                display: "none", // Hide Thursday (4) and Friday (5)
                            },
                        };
                    }
                    return {};
                }}
            />
        </div>
    );
};

export default BigCalendar;

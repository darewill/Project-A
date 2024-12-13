import { createViewWeek, createViewMonthGrid } from "@schedule-x/calendar";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import React from "react";
import "@schedule-x/theme-default/dist/calendar.css";
import { createEventsServicePlugin } from "@schedule-x/events-service";

export default function Calendar() {
  const plugins = [createEventsServicePlugin()];
  const calendar = useCalendarApp(
    {
      views: [createViewWeek(), createViewMonthGrid()],
      events: [
        {
          id: "1",
          title: "Restock",
          start: "2024-11-12 08:30",
          end: "2024-11-12 11:30",
        },
        {
            id: "1",
            title: "Staff Meeting",
            start: "2024-11-13 08:00",
            end: "2024-12-16 09:30",
          },
          {
            id: "1",
            title: "City Tour",
            start: "2024-11-12 16:30",
            end: "2024-12-16 17:30",
          },
          {
            id: "1",
            title: "Hiring Day",
            start: "2024-12-13 01:30",
            end: "2024-12-13 03:30",
          },
      ],
    },
    plugins
  );

  return (
    <div className='w-[1200px]'>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

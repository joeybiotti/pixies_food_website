import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';

const events = [
  {
    title: 'Market Day',
    date: '2025-07-22',
    url: '/menus/2025-07-22.pdf'
  },
  {
    title: 'Farmers Market',
    date: '2025-07-27',
    url: '/menus/2025-07-27.pdf'
  },
  {
    title: 'Special Event',
    date: '2025-08-02',
    url: '/menus/2025-08-02.pdf'
  }
];

export default function EventCalendar() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={(info) => {
          info.jsEvent.preventDefault();
          if (info.event.url) {
            window.open(info.event.url, '_blank');
          }
        }}
        height="auto"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: ''
        }}
        dayMaxEventRows={true}
        fixedWeekCount={false}
      />
    </div>
  );
}

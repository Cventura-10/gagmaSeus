// In components/DashboardWidgets/UpcomingEventsWidget.js
import React from 'react';
import { Link } from 'react-router-dom';

function UpcomingEventsWidget() {
  // Replace with logic to fetch and display upcoming events
  return (
    <div className="widget upcoming-events">
      <h2>Upcoming Events</h2>
      {/* Render upcoming events here */}
      <Link to="/events">View Events</Link>
    </div>
  );
}

export default UpcomingEventsWidget;

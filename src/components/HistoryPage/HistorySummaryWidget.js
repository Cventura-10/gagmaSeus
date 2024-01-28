// File: src/components/HistoryPage/HistorySummaryWidget.js

import React from 'react';
import { Link } from 'react-router-dom';
// Import any necessary hooks or components for fetching and displaying summary data.

function HistorySummaryWidget() {
    // Summary data would be fetched and stored in state variables
    // const [summaryData, setSummaryData] = useState(...);

    return (
        <div className="widget history-summary">
            <h3>History Overview</h3>
            {/* Display some summarized content here */}
            {/* <p>{summaryData.latestActivity}</p> */}
            {/* More content, maybe a small chart or a list of recent items */}
            {/* Link to the full history page */}
            <Link to="/history" className="widget-link">View Full History</Link>
        </div>
    );
}

export default HistorySummaryWidget;

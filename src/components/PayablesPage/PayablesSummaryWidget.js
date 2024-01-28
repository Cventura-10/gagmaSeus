// File: src/components/PayablesPage/PayablesSummaryWidget.js

import React from 'react';
import { Link } from 'react-router-dom';
// Import any necessary hooks or components for fetching and displaying summary data.

function PayablesSummaryWidget() {
    // Summary data would be fetched and stored in state variables
    // const [payablesSummary, setPayablesSummary] = useState(...);

    return (
        <div className="widget payables-summary">
            <h3>Payables Overview</h3>
            {/* Display some summarized content here */}
            {/* <p>Total Outstanding: ${payablesSummary.totalOutstanding}</p> */}
            {/* More content, possibly a pie chart or a short list */}
            {/* Link to the full payables page */}
            <Link to="/payables" className="widget-link">View All Payables</Link>
        </div>
    );
}

export default PayablesSummaryWidget;

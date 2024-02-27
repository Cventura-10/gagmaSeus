import React from 'react';

// Simple styling for the banner
const bannerStyle = {
    padding: '20px',
    margin: '20px 0',
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#007bff',
    cursor: 'pointer',
};

const InteractiveBanner2 = () => {

    // Function to handle click on the banner
    const handleClick = () => {
        alert('You clicked on Interactive Banner 2!');
    };

    return (
        <div style={bannerStyle} onClick={handleClick}>
            Click Me! - Interactive Banner 2
        </div>
    );
};

export default InteractiveBanner2;

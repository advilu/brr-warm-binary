import React from 'react';
import './SeasonDisplay.css';

//config function
const seasonInfo = {
    winter: {
        text: "Brr, it's chilly out!",
        icon: 'snowflake'
    },
    summer: {
        text: "Let's hit the beach!",
        icon: 'sun'
    }
};

//helper function
const getSeason = (lat, month) => {
    if (month <= 2 | month >= 9) {
        return lat > 0 ? 'winter' : 'summer';
    } else {
        return lat > 0 ? 'summer' : 'winter';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());

    //returns object with season text and icon
    const { text, icon } = seasonInfo[season];

    return (
        <div className={`season-display ${season}`}>
            <div className={`topImage`}>
                <i className={`topImage massive ${icon} icon`} />
            </div>
            <br />
            <div className={`textStyling ${season}`}>
                {text}
            </div>
            <br />
            <div className={`bottomImage`}>
                < i className={`bottomImage massive ${icon} icon`} />
            </div>
        </div>
    )
};

export default SeasonDisplay;
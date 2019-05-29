import React from 'react';
import styles from './SeasonDisplay.module.css';

const getSeason = (lat, month) => {
    if (month <= 2 | month >= 9) {
        return lat > 0 ? 'winter' : 'summer';
    } else {
        return lat > 0 ? 'summer' : 'winter';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    let text = season === 'winter' ? "Brr, it's chilly out!" : "Let's hit the beach!"

    return (
        <div className={styles.textStyling}>
            {text}
        </div>
    )
}

export default SeasonDisplay;
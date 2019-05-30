import React from 'react';

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.ask}</div>
        </div>
    )
};

Loader.defaultProps = {
    ask: "Just a sec! Loading..."
};

export default Loader;
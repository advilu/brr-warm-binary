import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay/SeasonDisplay';
import Loader from './Loader';
import './index.css';

class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { lat: null, errMessage: '' }
    // };
    // equivalent to:

    state = { lat: null, errMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errMessage: err.message })
        );
    };

    renderContent() {
        if (this.state.lat && !this.state.errMessage) {
            return (
                <SeasonDisplay 
                lat={this.state.lat}
                />
            )
        }
        else if (!this.state.lat && this.state.errMessage) {
            return (
                <div>
                    Ooh, err alert: {this.state.errMessage}
                </div>
            )
        }
        else {
            return (
                <Loader ask="Just a sec! Give us permission to locate you..."/>
            )
        }
    }

    render() {
        return(
            <div className={`border`}>
                {this.renderContent()}
            </div>
        )
    };
    
    // render() {
    //             switch (this.state.lat, this.state.errMessage) {
    //                 case (this.state.lat && !this.state.errMessage):
    //                     return (
    //                     <div>
    //                         Hiya! Your latitude is: {this.state.lat}
    //                     </div>
    //                     );
    //                 case (this.state.errMessage && !this.state.lat):
    //                     return (
    //                     <div>
    //                         Ooh, error alert: {this.state.errMessage}
    //                     </div>
    //                     );
    //                 default:
    //                     return (
    //                     <div>
    //                         We're coming with info!
    //                     </div>
    //                     );
    //             }
    // }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
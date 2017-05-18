import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titlePoll: ''
        }
    }

    handleSetPollTitle(data) {
        this.setState({titlePoll: data.titlePoll})
    }

    render() {
        return (
            <div>
                {React.cloneElement(this.props.children, {
                    handleSetPollTitle: (data) => this.handleSetPollTitle(data),
                    titlePoll: this.state.titlePoll
                })}
            </div>
        );
    }
}

export default App;

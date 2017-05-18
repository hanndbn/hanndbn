import React, {Component} from 'react';
import axios from 'axios';
import PollDetail from './PollDetail';


class PollList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listPoll: []
        }
    }

    componentWillMount() {
        axios.get(`https://59001bdd0dcf7e0011170695.mockapi.io/hannd/pollList`)
            .then(res => {
                const listPoll = res.data;
                this.setState({listPoll});
            });
    }

    render() {
        console.log(this.state.listPoll);
        return (
            <div style={{fontSize: '16px'}}>
                <ul className="list-group">
                    {
                        this.state.listPoll.map((value) => {
                            return (
                                <PollDetail
                                    content={value.content}
                                    totalVotes={value.totalVotes}
                                    key={value.id}
                                    keyId={value.id}
                                    handleSetPollTitle={this.props.handleSetPollTitle}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default PollList;
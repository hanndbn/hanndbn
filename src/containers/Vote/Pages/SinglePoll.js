import React, {Component} from 'react';
import axios from 'axios';
import SinglePollDetail from './SinglePollDetail'
import Header from './Header'

class SinglePoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteIndex: 0,
            totalVote: 0,
            pollData: []
        }

    }

    componentWillMount() {
        var id = this.props.location.query.pollId;
        console.log(id);
        axios.get(`https://59001bdd0dcf7e0011170695.mockapi.io/hannd/poolDetail/` + id)
            .then(res => {
                const pollData = res.data.data;
                this.setState({
                    pollData: pollData,
                });
            });
    }

    handleSetVoteIndex(data) {
        console.log(data);
        var poolId = this.props.location.query.pollId;
        var voteIndex = data.voteIndex;
        console.log(this.props.location.query.totalVotes);
        var voteIndex = data.voteIndex;
    }

    render() {
        return (
            <div>
                <Header/>
                <div style={{fontSize: '16px'}}>
                    <div className="panel panel-primary">
                        <div className="panel-heading"><h3 className="panel-title">{this.props.titlePoll}</h3></div>
                        <div className="panel-body">
                            <ul className="list-group">
                                {
                                    this.state.pollData.map((value) => {
                                        return (
                                            <SinglePollDetail
                                                backgroundImage={value.backgroundImage}
                                                pollValue={value.pollValue}
                                                key={value.pollValue}
                                                contentPoll={value.contentPoll}
                                                handleSetVoteIndex={(data) => this.handleSetVoteIndex(data)}
                                            />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className=" panel-footer">
                            <button type=" button" className=" btn btn-success"
                                    onClick={this.props.handleSetPollTitle.bind(this, {pollTitle: 1})}>
                                Vote&nbsp;&nbsp;<span className="glyphicon glyphicon-ok"></span>
                            </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;<a href="#">View
                            Results</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SinglePoll;
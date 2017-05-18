import React, {Component} from 'react';
import PropTypes from 'prop-types'
class PollDetail extends Component {
    handleRedirect(data) {
        this.props.handleSetPollTitle({titlePoll: this.props.content});
        this.context.router.push({
            pathname: '/pollDetail',
            query: {
                pollId : data.id,
                totalVotes: this.props.totalVotes
            }
        });
    }

    render() {
        return (
            <li className="list-group-item text-primary" style={{cursor: 'pointer', padding: '30px'}}
                onClick={this.handleRedirect.bind(this, {id: this.props.keyId})}
            >

                <i
                    className="fa fa-pencil-square-o text-primary"
                    aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{this.props.content}
                <div style={{float: 'right'}}>Total votes: {this.props.totalVotes}</div>
            </li>
        )
    }
}

PollDetail.contextTypes = {
    router: PropTypes.object
};

export default PollDetail;
import React, {Component} from 'react';

class SinglePoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voteSelected: 0
        }
    }

    render() {
        return (
            <li className="list-group-item" style={{
                cursor: 'pointer',
                padding: '30px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div
                    style={{
                        backgroundImage: 'url('+ this.props.backgroundImage + ')',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        float: 'left',
                        height: '104px',
                        left: '0px',
                        marginRight: '20px',
                        position: 'absolute',
                        top: '0px',
                        width: '104px'
                    }}></div>
                <div className="radio pull-left">
                    <label
                        style={{paddingLeft: '150px', width: '100%'}}>
                        <input
                            type="radio" className=" disabled" name="optionsRadios"
                            value={this.props.pollValue} onChange={(event)=>this.props.handleSetVoteIndex({voteIndex: event.target.value})} />
                        &nbsp;&nbsp;&nbsp;{this.props.contentPoll}
                    </label>
                </div>
                <div className=" clearfix"></div>
            </li>
        )
    }
}

export default SinglePoll;
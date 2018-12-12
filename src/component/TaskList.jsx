import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TaskList extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.item.map( val => (
                    <li key={val}>{val}</li>
                ))}
            </React.Fragment>            
        );
    }

}

TaskList.propTypes = {
    item : PropTypes.array.isRequired,
}

export default TaskList;
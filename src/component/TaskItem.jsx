import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = props => {
    return (
        <React.Fragment>
            <li className="list-group-item list-group-item-primary">
                <label>{props.item}</label>
                <button type="button"
                    onClick={() => props.onDelete(props.item)}
                    className="close"><span aria-hidden="true">&times;</span></button>
            </li>
        </React.Fragment>
    );
}

TaskItem.propTypes = {
    item : PropTypes.string.isRequired
}

export default TaskItem;
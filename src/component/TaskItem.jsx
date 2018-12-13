import React, {Component} from 'react';

class TaskItem extends Component {

    render() {
        return (
            <React.Fragment>
                <li className="list-group-item list-group-item-primary">
                    <label>{this.props.item}</label>
                    <button type="button"
                        onClick={() => this.props.onDelete(this.props.item)}
                        className="close"><span aria-hidden="true">&times;</span></button>
                </li>
            </React.Fragment>
        );
    }
}

export default TaskItem;
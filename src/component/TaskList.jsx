import React, {Component} from 'react';
import TaskItem from '../component/TaskItem';
import PropTypes from 'prop-types';

class TaskList extends Component {
    render() {

        const {editing, onDelete, items } = this.props;
        
        return (
            <div className="col-sm-12">
                <ul className="list-group bg-dark text-left">
                    {items.map( item => (
                        <TaskItem
                            key={item}
                            editing={editing}
                            item={item}
                            onDelete={onDelete}/>
                    ))}
                </ul>
            </div>            
        );
    }

}

TaskList.propTypes = {
    items : PropTypes.array.isRequired,
    editing : PropTypes.bool,
    onDelete : PropTypes.func.isRequired,
}

export default TaskList;
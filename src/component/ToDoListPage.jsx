import React, {Component} from 'react';
import TaskList from '../component/TaskList';
import PropTypes from 'prop-types';

class ToDoListPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            value : '',
            addTask : [],
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleClick(index) {
        console.log('I am clicked');
        this.setState( state => {
            const addTask = state.addTask.concat(state.value);

            return {
                addTask,
                value : "",
            }
        });       
    }

    handleChange(event) {
        this.setState({value : event.target.value});
    }

    render(){
        return (
            <React.Fragment>
                <h1>{this.props.title}</h1>  
                <ul>
                    <TaskList item={this.state.addTask} />
                </ul>
                <p>{this.state.value}</p>
                <input type="text" name="taskName" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleClick} type="submit">Add Task</button>
            </React.Fragment>         
        );
    }
}

ToDoListPage.propTypes = {
    title : PropTypes.string.isRequired,
}

export default ToDoListPage;
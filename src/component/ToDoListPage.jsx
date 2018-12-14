import React, {Component} from 'react';
import TaskList from '../component/TaskList';
import PropTypes from 'prop-types';

class ToDoListPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            value : '',
            addTask : [],
            strikeTask : false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleClick(index) {
        console.log('I am clicked');
        if(this.state.value === ""){
            return (
                <p className="alert alert-warning">Please enter a valid task</p>
            );
        } else {
            this.setState( state => {
                const addTask = state.addTask.concat(state.value);
    
                return {
                    addTask,
                    value : "",
                }
            });
        }       
    }

    handleChange(event) {
        this.setState({value : event.target.value});
    }

    handleDelete = (value) => {
        const addTask = this.state.addTask.filter(c => c !== value);
        this.setState({addTask : addTask});
    }

    render(){
        return (
            <React.Fragment>
                <div className="container"> 
                    <div className="row shadow-lg p-3 mb-5 rounded"> 
                        <div className="col-sm-12">              
                            <h1 className="display-3">{this.props.title}</h1>
                        </div>
                        <TaskList 
                            editing={this.state.strikeTask} 
                            items={this.state.addTask}
                            onDelete = {this.handleDelete} />                           
                        <div className="col-sm-12">
                            <div className="input-group input-group-lg mt-3">
                                <input className="form-control" placeholder="Type your tasks" type="text" name="taskName" value={this.state.value} onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary btn-lg" onClick={this.handleClick} type="submit">Add Task</button>
                                </div>                
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>         
        );
    }
}

ToDoListPage.propTypes = {
    title : PropTypes.string.isRequired,
}

export default ToDoListPage;
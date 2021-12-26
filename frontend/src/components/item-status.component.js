import React, { Component } from "react";
import TodoDataService from "../services/todo.service";

export default class ItemStatus extends Component {
    constructor(props){
        super(props);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.state = {
            boardItemId: props.boardItemId,
            isCompleted: props.isCompleted
        }
    }

    onChangeStatus() {
        var data = {
            boardItemId: this.state.boardItemId
        }
        TodoDataService.changeBoardItemStatus(data)
        .then(response => {
            console.log(response);
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        return(<input className="form-check-input" type="checkbox" defaultChecked = {this.state.isCompleted} onChange={this.onChangeStatus}></input>);
        
    }
}
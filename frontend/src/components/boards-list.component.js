import React, { Component } from "react";
import { Link } from "react-router-dom";
import TodoDataService from "../services/todo.service";

export default class BoardsList extends Component {
    constructor(props){
        super(props);
        this.retrieveBoards = this.retrieveBoards.bind(this);
        this.refreshList = this.refreshList.bind(this);

        this.state = {
            boards: [],
        }
    }

    componentDidMount(){
        this.retrieveBoards();
    }

    retrieveBoards(){
        TodoDataService.getAll()
        .then(response => {
            this.setState({
                boards: response.data.response.data
            })
            console.log(response.data.response.data);
        }).catch(e => {
            console.log(e);
        })
    }

    refreshList() {
        this.retrieveBoards();
    }

    render() {
        return("hello from list");
    }

}
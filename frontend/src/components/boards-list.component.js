import React, { Component } from "react";
import { Link } from "react-router-dom";
import TodoDataService from "../services/todo.service";
import AddItem from "./add-item.component";
import ItemStatus from "./item-status.component";
import "./board-list.component.css"

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
        const {boards} = this.state;
        return(
        <div>
            {boards && boards.map((board, index) => (
                <div className="card" style={{"width":"25rem"}}>
                    <div className = "card-body">
                        <h5 className = "card-title">{board.board.boardName}</h5>
                    </div>
                    <ul className = "list-group list-group-flush">
                        {board.boardItems.map((listitems, sindex) => (
                            <div className="form-check">
                            <ItemStatus boardItemId = {listitems.id} isCompleted = {listitems.isCompleted}></ItemStatus>
                            <li className="list-group-item">{listitems.itemText}</li>
                            </div>
                        ))}
                    </ul>
                    <div className = "card-body">
                        <Link to = {{pathname: "/add-item", state: [{boardId: board.board.id}]}}>Add Item</Link>
                    </div>
                </div>
            ))}

        </div>
        );
    }

}
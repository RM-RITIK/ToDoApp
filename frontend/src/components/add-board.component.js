import React, { Component } from "react";
import TodoDataService from "../services/todo.service";

export default class AddBoard extends Component {
    constructor(props) {
        super(props);
        this.onChangeBoardName = this.onChangeBoardName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveBoard = this.saveBoard.bind(this);
        this.newBoard = this.newBoard.bind(this);

        this.state = {
            boardName: "",
            description: "",
            submitted: false
        }
    }

    onChangeBoardName(e) {
        this.setState({
            boardName: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    saveBoard() {
        var data = {
            boardName: this.state.boardName,
            description: this.state.description
        };
        
        TodoDataService.createBoard(data)
            .then(response => {
                this.setState({
                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newBoard() {
        this.setState({
            boardName: "",
            description: "",
            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                <div>
                    <h4>New Board was created successfully!</h4>
                    <button className="btn btn-success" onClick={this.newBoard}>
                    Add another Board
                    </button>
                </div>
                ) : (
                <div>
                    <div className="form-group">
                    <label htmlFor="boardName">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="boardName"
                        required
                        value={this.state.boardName}
                        onChange={this.onChangeBoardName}
                        name="boardName"
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        required
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        name="description"
                    />
                    </div>

                    <button onClick={this.saveBoard} className="btn btn-success">
                    Submit
                    </button>
                </div>
                )}
            </div>
        );
    }


}
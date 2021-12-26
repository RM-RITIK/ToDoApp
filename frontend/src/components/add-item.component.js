import React, { Component } from "react";
import { Link } from "react-router-dom";
import TodoDataService from "../services/todo.service";

export default class AddItem extends Component {
    constructor(props){
        super(props);
        //console.log(this.props.location.state[0].boardId);
        this.onChangeItemText = this.onChangeItemText.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.newItem = this.newItem.bind(this);

        this.state = {
            boardId: this.props.location.state[0].boardId,
            itemText: "",
            submitted: false
        };
    }

    onChangeItemText(e){
        this.setState({
            itemText: e.target.value
        });
    }

    saveItem(){
        var data = {
            boardId: this.state.boardId,
            itemText: this.state.itemText
        };
        console.log(data);

        TodoDataService.addItemtoBoard(data)
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

    newItem() {
        this.setState({
            boardId: this.props.location.state[0].boardId,
            itemText: "",
            submitted: false
        });
    }

    render(){
        return(
            <div className="submit-form">
                {this.state.submitted ? (
                <div>
                    <h4>The item has been added successfully to the board!</h4>
                    <button className="btn btn-success" onClick={this.newItem}>
                    Add another item
                    </button>
                </div>
                ) : (
                <div>
                    <div className="form-group">
                    <label htmlFor="itemText">Item Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="itemText"
                        required
                        value={this.state.itemText}
                        onChange={this.onChangeItemText}
                        name="itemText"
                    />
                    </div>

                    <button onClick={this.saveItem} className="btn btn-success">
                    Submit
                    </button>
                </div>
                )}
            </div>
        );
    }
}
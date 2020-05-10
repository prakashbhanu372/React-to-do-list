import React, { Component } from "react";
import Item from "./ListItem";
class ListInput extends Component {
  state = {
    items: [],
    newItem: "",
  };

  onChangeHandler = (e) => {
    this.setState({ newItem: e.target.value });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    const newitem = this.state.newItem;
    if (newitem === "") {
      return alert("please ENter Some Text");
    }
    const item = [...this.state.items, newitem];
    this.setState({ items: item, newItem: "" });
    console.log(item);
  };

  onDeleteHandler = (index) => {
    console.log("This item will be delet", index);
    const lists = [...this.state.items];

    lists.splice(index, 1);
    this.setState({ items: lists });
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmitHandler}>
          <div className="row">
            <div className="col-md-9">
              <input
                className="form-control"
                type="text"
                placeholder="Type Your List"
                value={this.state.newItem}
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="col-md-3">
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </div>
        </form>
        <Item list={this.state.items} delete={this.onDeleteHandler} />
      </React.Fragment>
    );
  }
}

export default ListInput;

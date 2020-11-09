import React, { Component } from "react";

class UsersItem extends Component {
  constructor(props) {
    super(props);

    this.createUsers = this.createUsers.bind(this);
  }

  createUsers(item) {
    return <li key={item.key}>{item.text}</li>;
  }

  render() {
    let todoEntries = this.props.entries;
    let listItem = todoEntries.map(this.createUsers);

    return <ul>{listItem}</ul>;
  }
}

export default UsersItem;

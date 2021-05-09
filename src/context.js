import React, { Component } from "react";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    vlogs: [
      {
        id: 1,
        title: "hello how are you!",
        content: "it was anice experience",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      },
      {
        id: 2,
        title: "Hi!",
        content: "Nice Experience",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

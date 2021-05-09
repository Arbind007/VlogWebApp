import React from "react";
import { Consumer } from "../../context";
import ReactMarkdown from "react-markdown";

function VlogPage(props) {
  return (
    <Consumer>
      {(value) => {
        const { vlogs } = value;
        const id = props.match.params.id;
        const vlog = vlogs.filter((vlog) => vlog.id == id)[0];
        const { imageUrl, title, content } = vlog;
        return (
          <div className="container py-5 my-5 markdown">
            <div className="justify-content-center">
              <h1>Vlog {id}</h1>
              <img src={imageUrl} alt={title} className="w-100" />

              <h1 className="font-weight-light text-center my-5">{title}</h1>
              <h6 className="font-weight-light text-center my-5">{content}</h6>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default VlogPage;

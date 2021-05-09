import React from "react";
import { Link } from "react-router-dom";

function VlogCard(props) {
  const { id, title, content, imageUrl } = props.vlog;
  return (
    <div className="card shadow">
      <div className="card-body">
        <img className="card-img-top" src={imageUrl} alt={title} />
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{content}</p>
        <Link to={`/vlog/${id}`} className="stretched-link"></Link>
      </div>
    </div>
  );
}

export default VlogCard;

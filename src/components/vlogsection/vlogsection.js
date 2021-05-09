import React from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import VlogCard from "../vlogcard/VlogCard";

function VlogSection() {
  return (
    <Consumer>
      {(value) => {
        const { vlogs } = value;
        return (
          <div className="container text-center my-5">
            <h1 className="font-weight-light">
              My <span className="text-danger">Vlogs</span>
            </h1>
            <div className="lead">Experience that I witnessed</div>
            <div className="row my-5 pt-3">
              {vlogs.slice(0, 3).map((vlog) => (
                <div key={vlog.id} className="col-12 col-md-4 my-2">
                  <VlogCard vlog={vlog} />
                </div>
              ))}
            </div>
            <div className="my-5">
              <Link to="/allvlog" className="text-dark text-right">
                <h5>See more of my vlogs</h5>
              </Link>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default VlogSection;

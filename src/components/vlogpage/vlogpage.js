import React from "react";
import { Consumer } from "../../context";
import VlogCard from "../vlogcard/VlogCard";

function AllProjects() {
  return (
    <Consumer>
      {(value) => {
        const { vlogs } = value;
        return (
          <div className="container text-center my-5 py-5">
            <h1 className="font-weight-light py-5">
              All my<span className="text-danger"> Vlog</span>
            </h1>
            <div className="row my-4 pt-4">
              {vlogs.map((vlog) => (
                <div key={vlog.id} className="col-12 col-md-6 py-3">
                  <VlogCard vlog={vlog} />
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default AllProjects;

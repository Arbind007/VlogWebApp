import React, { Component } from "react";
import axios from "axios";

class AddVlog extends Component {
  state = {
    imageUrl: "",
    title: "",
    body: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      imageUrl,
      title,
      body,
      submitMessage,
      submitMessageTextColor,
    } = this.state;
    const onSubmitHandler = () => {
      const data = { imageUrl: imageUrl, title: title, content: body };
      axios.post("http://localhost:9000/vlogsubmit", data);
    };
    return (
      <div className="container-fluid my-5 py-3">
        <h1 className="text-center my-5 font-weight-light">
          Add <span className="text-danger">Blog</span>
        </h1>
        <div className="row px-3 px-lg-5">
          <div className="col-12 col-lg-6 px-lg-5 my-5">
            <form>
              <div className="form-group my-3">
                <label htmlFor="imageUrl">Featured Image Url *</label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>

              <div className="form-group my-3">
                <label htmlFor="excerpt">Body *</label>
                <textarea
                  type="text"
                  rows="5"
                  name="body"
                  id="body"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-dark btn-block my-5"
                style={{ backgroundColor: "black" }}
                onClick={() => onSubmitHandler()}
              >
                Publish
              </button>
            </form>
            <div className="text-center">
              <h5 className={submitMessageTextColor}>{submitMessage}</h5>
            </div>
          </div>
          <div className="col-12 col-lg-6 markdown">
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} />
            </div>
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <h4>{body}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default AddVlog;

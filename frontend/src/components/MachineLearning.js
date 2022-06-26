import React, { Component } from "react";

export default class MachineLearning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      grade: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitButtonPressed = this.handleSubmitButtonPressed.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.files[0] });
  }

  // Submit Button
  async handleSubmitButtonPressed() {
    const body = new FormData();
    body.append("file", this.state.file);
    await fetch("/import/result", {
      body,
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ ["grade"]: data["Grade"] });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let grade;
    if (this.state.grade) {
      grade = <h2>Grade: {this.state.grade}</h2>;
    }
    return (
      <div>
        <div class="flex-container">
          <div class="flex-child magenta profile-border">
            <span>Profile</span>
          </div>
          <div class="flex-child green">
            <div class="margin-border">
              <h2>Machine Learning</h2>
              <hr />
              <div className="form-group" class="column">
                <label for="file">File</label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  onChange={this.handleChange}
                  Required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmitButtonPressed}
              >
                Submit
              </button>
            </div>
            {grade}
          </div>
        </div>
      </div>
    );
  }
}

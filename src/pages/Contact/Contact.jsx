import React from "react";
import "./Contact.css";
import pic from "./contact.jpg";

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      selectService: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.resetForm();

    // fetch("http://localhost:3000/contact", {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     if (response.status === "success") {
    //       alert("Message Sent.");
    //       this.resetForm();
    //     } else if (response.status === "fail") {
    //       alert("Message failed to send.");
    //     }
    //   });
  }

  resetForm() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      selectService: "",
      message: "",
    });
  }

  render() {
    return (
      <div className="contact">
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="formDiv">
            <p className="ctTitle">NAME</p>
            <div className="formGroup">
              <input
                type="text"
                className="formText"
                id="firstName"
                value={this.state.firstName}
                onChange={this.onFirstNameChange.bind(this)}
              />
              <label htmlFor="name">First Name</label>

              <select
                className="formText"
                name="service"
                id="service"
                onChange={this.onSelectService.bind(this)}
              >
                <option selected disabled>
                  Need a service?
                </option>
                <option value="Photography">Photography</option>
                <option value="Dancing Shows">Dancing Shows</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Layout Design">Layout Design</option>
                <option value="Logo Design">Logo Design</option>
                <option value="Photo Retouching">Photo Retouching</option>
                <option value="Drawings">Drawings</option>
              </select>
            </div>
          </div>

          <div className="formDiv">
            <div className="formGroup">
              <input
                type="text"
                className="formText"
                id="lastName"
                value={this.state.lastName}
                onChange={this.onLastNameChange.bind(this)}
              />
              <label htmlFor="name">Last Name</label>

              <input
                type="text"
                className="formText"
                id="telephone"
                value={this.state.telephone}
                onChange={this.onTelephoneChange.bind(this)}
              />
              <label htmlFor="telephone">Telephone</label>

              <input
                type="email"
                className="formText"
                id="email"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
              <label htmlFor="exampleInputEmail1">Email address</label>
            </div>
          </div>

          <div className="formGroupText">
            <p className="ctTitle">TELL ME MORE</p>
            <textarea
              className="formTextInput"
              rows="5"
              id="message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
        </form>
        <button type="submit" className="submitBtn">
          Submit
        </button>
        <div className="ctPic">
          <img src={pic} alt="contactPicture" width="1000"  />
            <div className="myContact">
                <p>Or contact me @ 0743 495 664</p>
                <p>Office: Molnar Piuariu, nr 5</p>
                <p>Cluj Napoca, Romania</p>
            </div>
        </div>
      </div>
    );
  }

  onFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }

  onLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onTelephoneChange(event) {
    this.setState({ telephone: event.target.value });
  }

  onSelectService(event) {
    this.setState({ selectService: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

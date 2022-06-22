import React, { Component } from "react";

class Contact extends Component {
  render() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let foo = params.get("c");
    return (
      <div>
        <h1>This is a contact page {foo}</h1>
      </div>
    );
  }
}

export default Contact;

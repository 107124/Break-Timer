import React, { Component } from "react";

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ignore: "bool",
      disableActiveWindow: "bool",
      askAgain: "bool",
      notSupported: "func",
      onPermissionGranted: "func",
      onPermissionDenied: "func",
      onShow: "func",
      onClick: "func",
      onClose: "func",
      onError: "func",
      timeout: "number",
      title: "Break is coming up!",
      options: "object",
      swRegistration: "object"
    };
  }

  componentDidMount = () => {
    window.Notification.requestPermission();
  };

  pawnNotification = (theBody, theIcon, theTitle) => {
    var options = {
      body: theBody,
      icon: theIcon
    };
    var n = new Notification(theTitle, options);
    console.log(n);
  };

  notifyMe = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      var notification = new Notification("Hi there!");
      console.log(
        "Notification Permission previously granted by user.",
        notification
      );
    } else if (Notification.permission !== "denied") {
      window.Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
          var notification = new Notification("Hi there!");
          console.log(notification);
        }
      });
    }
  };

  testNotify = () => {
    console.log("Pressed");
    this.setState({
      ignore: "bool",
      disableActiveWindow: "bool",
      askAgain: "bool",
      notSupported: "func",
      onPermissionGranted: "func",
      onPermissionDenied: "func",
      onShow: "func",
      onClick: "func",
      onClose: "func",
      onError: "func",
      timeout: "number",
      title: "string.isRequired",
      options: "object",
      swRegistration: "object"
    });
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.notifyMe}>Notify</button>
      </div>
    );
  }
}

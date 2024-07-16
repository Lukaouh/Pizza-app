import React from "react";
import contactImg from "../assests/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <div className="Contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${contactImg})` }}
        ></div>
        <div className="rightSide">
          <h1>Contact Us</h1>
          <form>
            <label htmlFor="fullName">Enter Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name.."
            ></input>
            <label htmlFor="Email">Enter Email</label>
            <input
              type="text"
              name="Email"
              placeholder="Enter Email..."
            ></input>
            <label htmlFor="Message">Write Us</label>
            <textarea
              name="Message"
              placeholder="Enter The Message..."
              rows={6}
              required
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
      <div className="hiddenContact">
        <div
          className="hiddenContactTopBox"
          style={{ backgroundImage: `url(${contactImg})` }}
        ></div>
        <div className="hiddenContactBox">
          <h1>Contact Us</h1>
          <form>
            <label htmlFor="fullName">Enter Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name.."
            ></input>
            <label htmlFor="Email">Enter Email</label>
            <input
              type="text"
              name="Email"
              placeholder="Enter Email..."
            ></input>
            <label htmlFor="Message">Write Us</label>
            <textarea
              name="Message"
              placeholder="Enter The Message..."
              rows={6}
              required
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

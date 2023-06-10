import "./FormStyles.css";

import React from "react";



const Form = () => {
  return (
    <div className="form">
    <form>
        <label>Your Name</label>
        <input typr="text"></input>
        <label>Email</label>
        <input typr="email"></input>
        <label>Subject</label>
        <input typr="text"></input>
        <label>message</label>
        <input typr="text"></input>
        <textarea rows="6" placeholder="Type your message here"/>
        <button className="btn">Submit</button>

    </form>
    </div>
  )
}

export default Form
import React from "react";
import './Form.css'

class Form extends React.Component {
  state = {};
  render() {
    return <div className="form__container">
        <div className="form__heading">
          <h3>contact me for your web jobs</h3>
        </div>
        <form action="" className="contact__form">
          <div>
            <input type="text" name="fullname" placeholder="Your full name" className="form__input" />
          </div>
          <div>
            <input type="email" name="email" placeholder="e.g example@example.com" className="form__input" />
          </div>
          <div>
            <textarea className="form__textarea" placeholder="Your message" required />
          </div>
          <button className="form__btn">Send Me A Request</button>
        </form>
      </div>;
  }
}

export default Form;

import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const FormStyle = styled.form`
  width: 70%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.5rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 1.2rem;
    color: white;
    background-color: gray;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: black;
    color: white;
    font-size: 1.2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contact = () => {
    Axios.post("http://localhost:3001/contactform", {
      name:name,
      email:email,
      message:message,
    }).then((response)=> {
      console.log(response);
    });
  };
  return (
    <>
      <FormStyle>
        <div className="form-group">
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <Link to='/MessageSent'>
        <button type="submit" onClick={contact}>SEND</button>
        </Link>
      </FormStyle>
    </>
  );
}
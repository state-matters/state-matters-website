import React from "react"
import styled from "styled-components"

import Input from "./Input"

const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.breakPoints.sm}px;
  .name-group {
    display: flex;
    margin-bottom: ${({ theme }) => theme.baseSize}px;
    flex-direction: column;
    label {
      flex: 1;
      &:first-of-type {
        margin: 0 0 ${({ theme }) => theme.baseSize}px 0;
      }
    }
    @media (min-width: 720px) {
      flex-direction: row;
      label:first-of-type {
        margin: 0 ${({ theme }) => theme.baseSize}px 0 0;
      }
    }
  }
  input[name="email"] {
    display: block;
    width: 100%;
    margin-bottom: ${({ theme }) => theme.baseSize}px;
  }
  input[type="submit"] {
    display: block;
    width: 100%;
  }
`

const SubscriptionForm = props => (
  <Form onSubmit={props.onSubmit}>
    <div className="name-group">
      <Input
        type="text"
        name="first_name"
        placeholder="Enter your first name"
      />
      <Input type="text" name="last_name" placeholder="Enter your last name" />
    </div>
    <Input type="email" name="email" placeholder="Enter your email" />
    <input type="submit" value="sign me up" className="btn" />
  </Form>
)

export default SubscriptionForm

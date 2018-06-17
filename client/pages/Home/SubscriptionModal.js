import React, { Fragment } from "react"
import styled from "styled-components"
import theme from "theme"
import { Button } from "components/TouchTarget"

const SubscribeModal = styled.div`
  .subscribe__form {
    display: flex;
    flex-wrap: wrap;
  }
  input {
    padding: 1rem;
    margin: 1rem 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid ${theme.colors.grey["700"]};
    font-size: 1.5rem;
    outline: none;
  }
  .subscribe__email-input {
    width: 100%;
  }
  .subscribe__name-input {
    flex: 1;
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  .subscribe__button {
    margin-top: 1rem;
    width: 100%;
  }
  .subscribed {
    margin: 5rem 1rem;
  }
`

export default props => (
  <SubscribeModal>
    {props.subscribed ? (
      <h3 className="subscribed">Thanks for subscribing!</h3>
    ) : (
      <Fragment>
        <h3>Stay in the know</h3>
        <h3>We'll get you caught up</h3>
        <form onSubmit={props.handleSubmit} className="subscribe__form">
          <input
            value={props.email}
            onChange={e => props.onChange("email", e)}
            type="email"
            placeholder="Email"
            className="subscribe__email-input"
          />
          <input
            value={props.first_name}
            onChange={e => props.onChange("first_name", e)}
            type="text"
            placeholder="First Name"
            className="subscribe__name-input"
          />
          <input
            value={props.last_name}
            onChange={e => props.onChange("last_name", e)}
            type="text"
            placeholder="Last Name"
            className="subscribe__name-input"
          />
          <Button type="submit" className="subscribe__button">
            subcribe
          </Button>
        </form>
      </Fragment>
    )}
  </SubscribeModal>
)

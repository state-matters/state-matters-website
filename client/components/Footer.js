import React from "react"
import styled from "styled-components"
import theme from "theme"
import { BlockLink, Link } from "components/TouchTarget"
import SubcriptionModal from "components/SubscriptionModal"

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  color: ${theme.colors.grey["300"]};
  min-height: 50rem;
  .left {
    display: none;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: ${theme.colors.grey["900"]};
    @media (min-width: ${theme.breakPoints.md}) {
      display: flex;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: ${theme.colors.tertiary["500"]};
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${theme.colors.grey["700"]};
    li {
      margin-top: 2rem;
    }
  }
  @media (min-width: ${theme.breakPoints.md}) {
    grid-template-columns: 40% 1fr;
  }
`

const FooterLink = Link.extend`
  color: ${theme.colors.grey["700"]};
  font-family: "Martel", serif;
  font-size: 3rem;
  font-weight: 300;
  &:hover {
    color: ${theme.colors.primary["500"]};
  }
`

////
//  Dumb but today I figured out no xhr library can handle redirects on the clientside. Damn.
////
// const handleSubmit = async e => {
//   const event = e
//   const form = new FormData()
//   event.preventDefault()
//   form.append("target", "_top")
//   form.append("cmd", "_s-xclick")
//   form.append("hosted_button_id", "7TN8BEBTJMZXQ")
//   try {
//     await axios({
//       url: "https://www.paypal.com/cgi-bin/webscr",
//       method: "POST",
//       data: form,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       }
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

export default class Footer extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.form.submit()
  }
  render = () => {
    return (
      <StyledFooter>
        <div className="left">
          <div className="content">
            <FooterLink to="/">StateMatters.org</FooterLink>

            <h4>Chicago, IL</h4>
            <ul>
              <li>
                <FooterLink to="/about">About</FooterLink>
              </li>
              <li>
                <FooterLink to="/articles">Articles</FooterLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <h2>Let’s work together</h2>
            <h3>to understand state government</h3>
            <ul>
              <li>
                <BlockLink onClick={this.handleSubmit}>Donate</BlockLink>
                <form
                  ref={node => (this.form = node)}
                  style={{ display: "none" }}
                  action="https://state-matters.funraise.org"
                  method="get"
                  target="_top"
                >
                  <input type="hidden" name="cmd" defaultValue="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    defaultValue="7TN8BEBTJMZXQ"
                  />
                </form>
              </li>
              <li>
                <SubcriptionModal color="white" />
              </li>
              <li>
                <BlockLink to="/about">Contact Us</BlockLink>
              </li>
            </ul>
          </div>
        </div>
      </StyledFooter>
    )
  }
}

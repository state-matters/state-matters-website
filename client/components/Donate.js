import React, { Fragment } from "react"

////
//
// <Donate>
//  {donateTarget => <YourPreferredTouchTarget {...dontateData}></YourPreferredTouchTarget>}
// </Donate>
//
//
////

export default class Donate extends React.Component {
  element = new Funraise({
    id: "63aac56b-8b04-4fe9-aa94-b7a51e8bcd14:4345",
    isPopup: true,
    useDefaultButton: false
  })
  componentDidMount = () => {
    this.element.init()
  }
  render = () => (
    <Fragment>
      {this.props.children({
        "data-toggle": "modal",
        "data-target": "#donateModal-63aac56b4345"
      })}
      <div id="fc-63aac56b4345" style={{ display: "none !important" }} />
    </Fragment>
  )
}

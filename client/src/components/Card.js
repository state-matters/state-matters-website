import React from "react"
import styled from "styled-components"

const Card = styled.div.attrs({
  className: ({ className }) => (className ? `${className} sm_card` : "sm_card")
})`
  position: relative;
  padding: ${({ theme }) => theme.baseSize}px;
  background-color: ${({ theme }) => theme.colors.ui.semiLight};
  border: ${({ theme }) =>
    `${theme.baseSize / 4}px solid ${theme.colors.ui.dark}`};
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: -12px;
    bottom: -12px;
    left: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 72 72">
  <g fill="none" fill-rule="evenodd" stroke="#342C5F" stroke-linecap="square" stroke-width="6">
    <path d="M12 0L0 12M36 0L0 36M60 0L0 60M72 12L12 72M72 36L36 72M72 60L60 72"/>
  </g>
</svg>');
    z-index: -1;
  }
`

export default Card

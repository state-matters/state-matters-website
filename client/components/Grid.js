import React from "react"
import styled from "styled-components"

export const Grid = styled.section.attrs({
  className: ({ className, container }) =>
    container
      ? className ? `${className} container grid` : "container grid"
      : className ? `${className} grid` : "grid"
})`
  display: grid;
  grid-template-columns: repeat(${({ columns = 12 }) => columns}, 1fr);
  grid-gap: 2rem;
`

export const Column = styled.div.attrs({
  span: ({ span }) => (span ? span : 12)
})`
  grid-column: ${({ span, offset }) =>
    offset ? ` ${offset + 1} / span ${span}` : `span ${span}`};
`

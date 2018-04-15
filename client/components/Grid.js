import React from "react"
import styled from "styled-components"

export const Grid = styled.section.attrs({
  className: ({ className }) =>
    className ? `${className} container grid` : "container grid"
})`
  display: grid;
  grid-template-columns: repeat(${({ columns = 12 }) => columns}, 1fr);
  grid-gap: 2rem;
`

export const Columns = styled.div`
  grid-column: ${({ span = 12, offset = 1 }) => ` ${offset} / span ${span}`};
`

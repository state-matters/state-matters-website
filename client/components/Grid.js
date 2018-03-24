import React from "react"
import styled from "styled-components"

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(${({ columns = 12 }) => columns});
  grid-gap: 2rem;
`

export const Columns = styled.div`
  grid-column: ${({ span = 12, offset = 1 }) => ` ${offset} / span ${span}`};
`

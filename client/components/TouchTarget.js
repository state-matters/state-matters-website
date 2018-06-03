import React from "react"
import { Link as RouterLink } from "react-router-dom"
import styled from "styled-components"
import theme from "theme"

export const BlockLink = styled(RouterLink)`
  position: relative;
  display: inline-block;
  padding-right: 2rem;
  padding-left: 0;
  font-weight: 900;
  color: ${props => props.color || theme.colors.grey["100"]};
  text-decoration: none;
  letter-spacing: 1px;
  transition: transform 300ms;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: ${theme.colors.primary["500"]};
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 300ms;
    clip-path: polygon(100% 50%, 0 0, 0 100%);
  }
  &:before {
    left: 0;
    opacity: 0;
  }
  &:after {
    right: 0;
  }
  &:hover {
    transform: translateX(1rem);
    padding-left: 2rem;
    &:before {
      opacity: 1;
    }
    &:after {
      opacity: 0;
    }
  }
`

export const Button = styled(({ children, ...props }) => {
  if (props.to) return <RouterLink {...props}>{children}</RouterLink>
  return <button {...props}>{children}</button>
})`
  display: inline-block;
  padding: 1rem 2rem;
  border: 4px solid ${theme.colors.grey["900"]};
  border-radius: 2px;
  background-color: transparent;
  color: ${theme.colors.grey["900"]};
  cursor: pointer;
  font-size: 0.75em;
  font-weight: 500;
  transition: 200ms;
  &.primary {
    border: 2px solid ${theme.colors.primary["500"]};
    background-color: ${theme.colors.primary["500"]};
    color: ${theme.colors.grey["100"]};
  }
`

export const Link = styled(RouterLink)`
  position: relative;
  display: inline-block;
  font-weight: 600;
  color: ${theme.colors.primary["500"]};
  transition: 200ms;
  text-decoration: none;
  &:hover {
    color: ${theme.colors.grey["900"]};
  }

  &:after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 6px;
    height: 6px;
    width: calc(100% - 6px);
    background-color: ${theme.colors.primary["500"]};
    opacity: 0.6;
    transition: 200ms;
    z-index: -1;
  }

  &:hover:after {
    height: 100%;
  }
`

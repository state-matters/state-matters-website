// import React from "react"
import { injectGlobal } from "styled-components"
import theme from "./theme"

const stylesTheme = theme()

export default injectGlobal`
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  position: relative;
  margin: ${stylesTheme.baseSize / 3}px;
  padding: ${stylesTheme.baseSize / 2}px;
  background-color: ${stylesTheme.colors.ui.semiLight};
  border: 6px solid ${stylesTheme.colors.ui.dark};
  color: ${stylesTheme.colors.ui.dark};
  font-family: ${stylesTheme.fontFamily};
  line-height: 1.5;
}

h1,
h2,
h3,
h4 {
  line-height: 1.125;
  font-family: "Poppins", sans-serif;
}

h1 {
  font-size: 96px;
  font-weight: 900;
}

h2 {
  font-size: 60px;
  font-weight: 700;
}

h3 {
  font-size: 48px;
  font-weight: 700;
}

h4,
.title {
  font-weight: 600;
  font-size: 24px;
}

.small {
  font-size: 14px;
}

.container {
  width: 100%;
  max-width: ${stylesTheme.breakPoints.xLg}px;
  margin: 0 auto;
  padding: ${stylesTheme.baseSize}px 0;
}

a {
  position: relative;
  font-weight: 600;
  color: ${stylesTheme.colors.accent.main};
  transition: 200ms;
  text-decoration: none;
}

a:hover {
  color: var(--dark);
}

a:after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 6px;
  height: 6px;
  width: calc(100% - 6px);
  background-color: ${stylesTheme.colors.accent.main};
  opacity: 0.6;
  transition: 200ms;
  z-index: -1;
}

a:hover:after {
  height: 100%;
}

.btn {
  padding: ${stylesTheme.baseSize}px;
  border: 4px solid ${stylesTheme.colors.ui.dark};
  border-radius: 2px;
  background-color: transparent;
  color: ${stylesTheme.colors.ui.dark};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: 200ms;
}

.btn:hover {
  background-color: ${stylesTheme.colors.ui.dark};
  color: ${stylesTheme.colors.ui.light};
}

@media (max-width: 480px) {
}

@media (max-width: 720px) {
  h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 960px) {
}

@media (max-width: 1200px) {
  .container {
    padding: ${stylesTheme.baseSize}px;
  }
}

`

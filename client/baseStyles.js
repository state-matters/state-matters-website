import { injectGlobal } from "styled-components"
import theme from "./theme"

export default injectGlobal`
*,
*:before,
*:after {
  box-sizing: border-box;
}

:root {
  font-size: 75%; // 12px
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  position: relative;
  margin: 0;
  padding: 0;
  background-color: ${theme.colors.ui.light};
  color: ${theme.colors.ui.dark};
  font-family: ${theme.fontFamily};
  font-size: 1.5rem; // 18px
  line-height: 1.33333; // 24px
  overflow-x: hidden;
}

h1,
h2,
h3,
h4 {
  font-family: "Poppins", sans-serif;
}

h1,
.hero {
  font-size: 6rem;
  font-weight: 900;
}

h2,
.headline {
  font-size: 4rem;
  font-weight: 700;
}

h3,
.title {
  font-size: 3rem;
  font-weight: 700;
}

h4,
.subtitle {
  font-weight: 600;
  font-size: 1.5rem;
}

p {
  font-size: 1.5rem;
}

.small {
  font-size: 1rem;
  line-height: 2;
}

.container {
  width: 100%;
  max-width: ${theme.breakPoints.xLg}px;
  margin: 0 auto;
  padding: 0 ${theme.baseSize}px;
}

a {
  position: relative;
  font-weight: 600;
  color: ${theme.colors.accent.main};
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
  background-color: ${theme.colors.accent.main};
  opacity: 0.6;
  transition: 200ms;
  z-index: -1;
}

a:hover:after {
  height: 100%;
}

.btn {
  padding: 1rem 2rem;
  border: 4px solid ${theme.colors.ui.dark};
  border-radius: 2px;
  background-color: transparent;
  color: ${theme.colors.ui.dark};
  cursor: pointer;
  font-size: 0.75em;
  font-weight: 500;
  transition: 200ms;
  &.primary {
    border: 2px solid ${theme.colors.accent.main};
    background-color: ${theme.colors.accent.main};
    color: ${theme.colors.ui.light};
  }
}

.btn:hover {
  background-color: ${theme.colors.ui.dark};
  color: ${theme.colors.ui.light};
}

@media (min-width: ${theme.breakPoints.sm}) {
}

@media (min-width: ${theme.breakPoints.md}) {
  h1 {
    font-size: 2.5rem;
  }
}

@media (min-width: ${theme.breakPoints.lg}) {
}

@media (min-width: ${theme.breakPoints.xLg}) {
  .container {
    padding: 0;
  }
}

`

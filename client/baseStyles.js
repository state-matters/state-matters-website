import { injectGlobal } from "styled-components"
import theme from "theme"

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
  background-color: ${theme.colors.grey["100"]};
  color: ${theme.colors.grey["900"]};
  font-family: "Poppins", Arial, sans-serif;
  font-size: 1.5rem; // 18px
  line-height: 1.33333; // 24px
  overflow-x: hidden;
}

h1, h2, h3, h4 , h5, p {
  margin: 0;
}

h1,
h2,
h3 {
  font-family: "Martel", serif;
}

h1,
.hero {
  font-size: 3.5rem;
  font-weight: 200;
}

h2,
.headline {
  font-size: 3rem;
  font-weight: 300;
}

h3,
.title {
  font-size: 1.5rem;
  font-weight: 300;
}

h4,
.subtitle {
  font-size: 1.5rem;
  font-weight: 200;
}

.small {
  font-size: 1rem;
  line-height: 2;
}

.container {
  width: 100%;
  max-width: 105rem;
  margin: 0 auto;
  padding: 0 2rem;
}

.card {
  background: ${theme.colors.grey["100"]};
  padding: 1rem;
  box-shadow: 0 12px 12px -12px rgba(0,0,0,0.12);
}

.btn:hover {
  background-color: ${theme.colors.grey["900"]}};
  color: ${theme.colors.grey["100"]}};
}

@media (min-width: ${theme.breakPoints.sm}) {
  h1,
.hero {
  font-size: 5rem;
  font-weight: 200;
}

h2,
.headline {
  font-size: 3.5rem;
  font-weight: 300;
}

h3,
.title {
  font-size: 3rem;
  font-weight: 300;
}

h4,
.subtitle {
  font-size: 1.5rem;
  font-weight: 200;
}

.small {
  font-size: 1rem;
  line-height: 2;
}
}

@media (min-width: ${theme.breakPoints.lg}) {
}

@media (min-width: 105rem) {
  .container {
    padding: 0;
  }
}

`

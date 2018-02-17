export default () => {
  const baseSize = 24
  return {
    // colors generated from https://palx.jxnblk.com/f37e5a
    colors: {
      ui: {
        dark: "#342C5F",
        semiDark: "#948681",
        main: "#beb0ab",
        semiLight: "#e5dfdd",
        light: "#faf9f8"
      },
      primary: {
        dark: "#723b2a",
        semiDark: "#c06347",
        main: "#f37e5a",
        semiLight: "#faccbd",
        light: "#fdefeb"
      },
      accent: {
        dark: "#2b7461",
        semiDark: "#47c1a0",
        main: "#5af3ca",
        semiLight: "#bdfae9",
        light: "#ebfdf8"
      },
      success: {
        dark: "#2b7461",
        semiDark: "#47c1a0",
        main: "#5af3ca",
        semiLight: "#bdfae9",
        light: "#ebfdf8"
      },
      alert: {
        dark: "",
        semiDark: "",
        main: "#f35a83",
        semiLight: "",
        light: ""
      },
      warning: {
        dark: "",
        semiDark: "",
        main: "#f3ca5a",
        semiLight: "",
        light: ""
      }
    },
    baseSize: baseSize,
    fontSize: 16,
    fontFamily: `"Poppins", Helvetica, sans-serif`,
    breakPoints: {
      xSm: baseSize * 20,
      sm: baseSize * 30,
      md: baseSize * 40,
      lg: baseSize * 50,
      xLg: baseSize * 60
    }
  }
}

// --dark: #342c5f;
// --light: #eeeee1;
// --primary: #f37e5a;
// --secondary: #f2d7ca;
// --accent: #50e3c2;

// --sizing: 24px;

// --x-sm: calc(var(--sizing) * 20);
// --sm: calc(var(--sizing) * 30);
// --md: calc(var(--sizing) * 40);
// --lg: calc(var(--sizing) * 50);
// --x-lg: calc(var(--sizing) * 60);

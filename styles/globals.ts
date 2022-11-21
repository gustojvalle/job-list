import { CSSObject } from "styled-components";

export const globalStyle: string = `
html,body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

button {
  background: none; 
  border:none; 
  

}
button:hover{
  cursor:pointer
}
}`;

export const Theme: CSSObject = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    primary: "#40476D",
    primaryHover: "#2C4759",
    secondary: "#79B4A9",
    tertiary: "#D7F2BA",
    quarternary: "#9FA4C4",
    quinternary: "#cfe7bb",
    gray50: "rgba(224,224,224)",
  },
};

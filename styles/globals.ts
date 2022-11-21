import { CSSObject } from "styled-components";
import LatoBlack from "../public/fonts/Lato/Lato-Black.ttf";
import LatoBold from "../public/fonts/Lato/Lato-Bold.ttf";
import LatoLight from "../public/fonts/Lato/Lato-Light.ttf";
import LatoRegular from "../public/fonts/Lato/Lato-Regular.ttf";
import LatoThin from "../public/fonts/Lato/Lato-Thin.ttf";
import { device } from "./mediaQueries";

const fonts: string = `  
@font-face {
    font-family: 'Lato Black';
    src: url(${LatoBlack}) format('truetype');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato Bold';
    src: url(${LatoBold}) format('truetype');
    font-style: bold;
    font-weight: 900;
    font-display: swap;
  }
   @font-face {
    font-family: 'Lato Light';
    src: url(${LatoLight}') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
   @font-face {
    font-family: 'Lato Regular';
    src: url(${LatoRegular}) format('truetype');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
   @font-face {
    font-family: 'Lato Thin';
    src: url(${LatoThin}) format('truetype');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  `;

export const globalStyle: string = `
html,body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, Lato Regular, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;

}

* {
  box-sizing: border-box;
  margin-block-end:0;
  margin-block-start:0;
}

button {
  background: none; 
  border:none; 
}
button:hover{
  cursor:pointer
  }

ul{
list-style-type:none
}

h1{ 
  text-align: center;
  font-family:-apple-system, Lato Black, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  font-size: 2rem; 
     @media ${device.laptop} {  
    font-size: 3rem
  },
}
h3{
    text-align: center;
  font-family:-apple-system, Lato Bold, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  font-size: 1.4rem; 
}
h2{
    text-align: center;
  font-family:-apple-system, Lato Bold, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  font-size: 1.2rem; 
}
p{
    text-align: center;
  font-family:-apple-system, Lato Regular, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  font-size: 1rem; 
  text-align:left;
}

label{
    text-align: center;
  font-family:-apple-system, Lato Light, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  font-size: 1rem; 
  text-align:left;
}

input::placeholder {
    text-align: center;
  font-family:-apple-system, Lato Light, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  font-size: 1rem; 
  text-align:left;

}
input {
    text-align: center;
  font-family:-apple-system, Lato Regular, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  font-size: 1rem; 
  text-align:left;

}
${fonts}

`;


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

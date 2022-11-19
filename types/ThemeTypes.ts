import { DefaultTheme } from "styled-components";

interface Colors {
  [index: string]: string;
}

export interface ThemeType extends DefaultTheme {
  colors: Colors;
}

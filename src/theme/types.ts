import { TextStyle } from "react-native";
import { theme } from "./theme.ts";

export type ColorVariants = {
    black: string;
    white: string;
    pinkDark: string;
    pinkMedium: string;
    pinkLight: string;
    grayDark: string;
    grayMedium: string;
    grayLight: string;
};

export type SpacingVariants = {
    none: number;
    extraSmall: number;
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
};

type ThemeTextStyles = TextStyle & {
    color: keyof ColorVariants;
};

export type TextVariants = {
    defaults: Partial<ThemeTextStyles>;
    large: Partial<ThemeTextStyles>;
    largeBold: Partial<ThemeTextStyles>;
    largeThin: Partial<ThemeTextStyles>;
    mediumBold: Partial<ThemeTextStyles>;
    mediumThin: Partial<ThemeTextStyles>;
    small: Partial<ThemeTextStyles>;
    smallBold: Partial<ThemeTextStyles>;
    smallThin: Partial<ThemeTextStyles>;
};

export type ThemeProps = typeof theme;

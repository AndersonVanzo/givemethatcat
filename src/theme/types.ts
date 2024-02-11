import { TextStyle } from "react-native";

export type ColorVariants = {
    black: string;
    white: string;
    blueDark: string;
    blueMedium: string;
    blueLight: string;
    blueLighter: string;
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
    default: Partial<ThemeTextStyles>;
    large: Partial<ThemeTextStyles>;
    largeBold: Partial<ThemeTextStyles>;
    largeThin: Partial<ThemeTextStyles>;
    mediumBold: Partial<ThemeTextStyles>;
    mediumThin: Partial<ThemeTextStyles>;
    small: Partial<ThemeTextStyles>;
    smallBold: Partial<ThemeTextStyles>;
    smallThin: Partial<ThemeTextStyles>;
};

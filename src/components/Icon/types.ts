import { NumberProp } from "react-native-svg";
import { ColorValue } from "react-native";

export type IconType =
    | "check"
    | "chevron-left"
    | "chevron-right"
    | "download"
    | "github"
    | "house"
    | "linkedin"
    | "question"
    | "website";

export type IconProps = {
    color: ColorValue;
    size: NumberProp;
    type: IconType;
};

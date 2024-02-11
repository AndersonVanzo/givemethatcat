import { NumberProp } from "react-native-svg";
import { ColorValue } from "react-native";

export type IconType = "chevron-left" | "chevron-right" | "download" | "house" | "question";

export type IconProps = {
    color: ColorValue;
    size: NumberProp;
    type: IconType;
};

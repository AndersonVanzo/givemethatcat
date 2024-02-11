import { MainRoutesParamList } from "../../types.ts";

export type CustomTabBarButtonProps = {
    isFocused: boolean;
    onClickTabButton: () => void;
    routeName: keyof MainRoutesParamList;
};

import { TouchableBox } from "../../../../components/TouchableBox/TouchableBox.tsx";
import { Icon } from "../../../../components/Icon/Icon.tsx";
import { theme } from "../../../../theme/theme.ts";
import { LinkButtonProps } from "./types.ts";

const BUTTON_SIZE = 48;
const ICON_SIZE = 24;

export const LinkButton = ({ iconType, onClickLinkButton }: LinkButtonProps) => {
    return (
        <TouchableBox
            alignItems={"center"}
            height={BUTTON_SIZE}
            justifyContent={"center"}
            onPress={onClickLinkButton}
            width={BUTTON_SIZE}>
            <Icon color={theme.colors.pinkDark} size={ICON_SIZE} type={iconType} />
        </TouchableBox>
    );
};

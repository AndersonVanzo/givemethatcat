import { TouchableBox } from "../../../../components/TouchableBox/TouchableBox.tsx";
import { Icon } from "../../../../components/Icon/Icon.tsx";
import { theme } from "../../../../theme/theme.ts";
import { ActionButtonProps } from "./types.ts";
import { ActivityIndicator } from "react-native";

const BUTTON_SIZE = 64;

export const ActionButton = ({
    disabled,
    iconType,
    isLoading,
    onClickActionButton,
}: ActionButtonProps) => {
    return (
        <TouchableBox
            alignItems={"center"}
            backgroundColor={"pinkMedium"}
            borderRadius={BUTTON_SIZE / 2}
            disabled={disabled}
            elevation={3}
            height={BUTTON_SIZE}
            justifyContent={"center"}
            onPress={onClickActionButton}
            shadowColor={"black"}
            shadowOpacity={0.03}
            shadowOffset={{ height: 1, width: 2 }}
            shadowRadius={5}
            width={BUTTON_SIZE}>
            {isLoading ? (
                <ActivityIndicator size={"small"} color={theme.colors.white} />
            ) : (
                <Icon color={theme.colors.white} size={BUTTON_SIZE / 2} type={iconType} />
            )}
        </TouchableBox>
    );
};

import React from "react";
import { TouchableBox } from "../../../components/TouchableBox/TouchableBox.tsx";
import { CustomTabBarButtonProps } from "../CustomTabBar/types.ts";
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../../theme/types.ts";
import { theme } from "../../../theme/theme.ts";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();
const AnimatedBox = Animated.createAnimatedComponent(Box);

const BUTTON_HEIGHT = 48;
const BUTTON_WIDTH = 48;
const BUTTON_FOCUSED_WIDTH = 96;

enum VISIBILITY {
    HIDDEN = 0,
    VISIBLE = 1,
}

export const CustomTabBarButton = ({ isFocused, onClickTabButton }: CustomTabBarButtonProps) => {
    const backgroundVisibility = useSharedValue<VISIBILITY>(VISIBILITY.HIDDEN);

    const backgroundStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            backgroundVisibility.value,
            [0, 1],
            [theme.colors.grayLight, theme.colors.grayMedium],
        ),
        width: interpolate(
            backgroundVisibility.value,
            [0, 1],
            [BUTTON_WIDTH, BUTTON_FOCUSED_WIDTH],
        ),
    }));

    React.useEffect(() => {
        backgroundVisibility.value = withTiming(isFocused ? VISIBILITY.VISIBLE : VISIBILITY.HIDDEN);
    }, [isFocused]);

    return (
        <TouchableBox onPress={onClickTabButton}>
            <AnimatedBox
                alignItems={"center"}
                justifyContent={"center"}
                borderRadius={BUTTON_HEIGHT / 2}
                height={BUTTON_HEIGHT}
                style={backgroundStyle}>
                <Text>btn</Text>
            </AnimatedBox>
        </TouchableBox>
    );
};

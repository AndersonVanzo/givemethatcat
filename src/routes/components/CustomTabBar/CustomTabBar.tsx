import { createBox } from "@shopify/restyle";
import { ThemeProps } from "../../../theme/types.ts";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { CustomTabBarButton } from "../CustomTabBarButton/CustomTabBarButton.tsx";

const Box = createBox<ThemeProps>();

export const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
    return (
        <Box
            backgroundColor={"white"}
            borderTopColor={"grayLight"}
            borderTopWidth={1}
            flexDirection={"row"}
            paddingHorizontal={"medium"}
            height={66}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const onClickTabButton = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };
                return (
                    <Box key={index} alignItems={"center"} flex={1} justifyContent={"center"}>
                        <CustomTabBarButton
                            isFocused={isFocused}
                            onClickTabButton={onClickTabButton}
                        />
                    </Box>
                );
            })}
        </Box>
    );
};

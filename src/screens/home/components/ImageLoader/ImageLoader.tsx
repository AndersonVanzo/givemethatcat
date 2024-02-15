import { ActivityIndicator } from "react-native";
import { Box } from "../../../../components/Box/Box.tsx";
import { theme } from "../../../../theme/theme.ts";

export const ImageLoader = () => {
    return (
        <Box alignItems={"center"} flex={1} justifyContent={"center"}>
            <ActivityIndicator size={"large"} color={theme.colors.pinkMedium} />
        </Box>
    );
};

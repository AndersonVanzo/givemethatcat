import React from "react";
import { Box } from "../../../../components/Box/Box.tsx";
import { ImageBox } from "../../../../components/ImageBox/ImageBox.tsx";
import { ImageViewerProps } from "./types.ts";
import { ActivityIndicator } from "react-native";
import { theme } from "../../../../theme/theme.ts";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";

const AnimatedBox = Animated.createAnimatedComponent(Box);

export const ImageViewer = ({ sourceImage }: ImageViewerProps) => {
    const [isLoadingImage, setIsLoadingImage] = React.useState<boolean>(true);

    return (
        <AnimatedBox
            alignItems={"center"}
            backgroundColor={"grayMedium"}
            borderColor={"pinkMedium"}
            borderRadius={16}
            borderWidth={1}
            elevation={3}
            entering={SlideInRight}
            exiting={SlideOutLeft}
            flex={1}
            justifyContent={"center"}
            shadowColor={"black"}
            shadowOffset={{ height: 1, width: 2 }}
            shadowOpacity={0.03}
            shadowRadius={5}>
            <ImageBox
                height={"100%"}
                onLoadEnd={() => setIsLoadingImage(false)}
                onLoadStart={() => setIsLoadingImage(true)}
                resizeMode={"contain"}
                source={{ uri: sourceImage }}
                width={"100%"}
            />
            <Box
                alignItems={"center"}
                bottom={0}
                justifyContent={"center"}
                left={0}
                position={"absolute"}
                right={0}
                top={0}
                visible={isLoadingImage}>
                <ActivityIndicator size={"large"} color={theme.colors.pinkMedium} />
            </Box>
        </AnimatedBox>
    );
};

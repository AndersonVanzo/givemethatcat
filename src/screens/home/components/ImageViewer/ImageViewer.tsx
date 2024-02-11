import { Box } from "../../../../components/Box/Box.tsx";
import { ImageBox } from "../../../../components/ImageBox/ImageBox.tsx";
import { ImageViewerProps } from "./types.ts";

export const ImageViewer = ({ sourceImage }: ImageViewerProps) => {
    return (
        <Box
            backgroundColor={"grayMedium"}
            borderColor={"pinkMedium"}
            borderRadius={16}
            borderWidth={1}
            elevation={3}
            shadowColor={"black"}
            shadowOffset={{ height: 1, width: 2 }}
            shadowOpacity={0.03}
            shadowRadius={5}>
            <ImageBox
                height={"100%"}
                resizeMode={"contain"}
                source={{ uri: sourceImage }}
                width={"100%"}
            />
        </Box>
    );
};

import React from "react";
import { Box } from "../../components/Box/Box.tsx";
import { ActionButton } from "./components/ActionButton/ActionButton.tsx";
import { ImageViewer } from "./components/ImageViewer/ImageViewer.tsx";
import { HomeViewProps } from "./types.ts";
import { CatImage } from "../../api/collections/images/types.ts";
import { ImageLoader } from "./components/ImageLoader/ImageLoader.tsx";

export const HomeView = ({ loadNewImage }: HomeViewProps) => {
    const [currentImage, setCurrentImage] = React.useState<CatImage | undefined>(undefined);

    const loadNextImage = async () => {
        setCurrentImage(undefined);
        const response = await loadNewImage();
        if (response !== "error") {
            setCurrentImage(response[0]);
        }
    };

    React.useEffect(() => {
        loadNextImage();
    }, []);

    return (
        <Box backgroundColor={"white"} flex={1} gap={"medium"} paddingVertical={"medium"}>
            <Box flex={1} paddingHorizontal={"medium"}>
                {currentImage ? <ImageViewer sourceImage={currentImage?.url} /> : <ImageLoader />}
            </Box>
            <Box flexDirection={"row"} justifyContent={"space-evenly"}>
                <ActionButton iconType={"download"} onClickActionButton={() => console.log()} />
                <ActionButton iconType={"chevron-right"} onClickActionButton={loadNextImage} />
            </Box>
        </Box>
    );
};

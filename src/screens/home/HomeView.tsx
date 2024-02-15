import React from "react";
import { Box } from "../../components/Box/Box.tsx";
import { ActionButton } from "./components/ActionButton/ActionButton.tsx";
import { ImageViewer } from "./components/ImageViewer/ImageViewer.tsx";
import { HomeViewProps } from "./types.ts";
import { CatImage } from "../../api/collections/images/types.ts";
import { ImageLoader } from "./components/ImageLoader/ImageLoader.tsx";
import ReactNativeBlobUtil, { ReactNativeBlobUtilConfig } from "react-native-blob-util";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DOWNLOAD_DIR = ReactNativeBlobUtil.fs.dirs.DownloadDir;

export const HomeView = ({ loadNewImage }: HomeViewProps) => {
    const [isDownloadingImage, setIsDownloadingImage] = React.useState<boolean>(false);
    const [imageWasDownloaded, setImageWasDownloaded] = React.useState<boolean>(false);
    const [currentImage, setCurrentImage] = React.useState<CatImage | undefined>(undefined);

    const downloadImage = async () => {
        if (!currentImage) {
            return;
        }
        const date = new Date();
        const extension = currentImage.url.slice(currentImage.url.length - 4);
        const filename = "image_" + Math.floor(date.getTime() + date.getSeconds() / 2);
        const options: ReactNativeBlobUtilConfig = {
            fileCache: true,
            addAndroidDownloads: {
                description: "Image",
                notification: true,
                path: `${DOWNLOAD_DIR}/${filename}${extension}`,
                useDownloadManager: true,
            },
        };
        setIsDownloadingImage(true);
        ReactNativeBlobUtil.config(options)
            .fetch("GET", currentImage.url)
            .then(() => {
                Alert.alert("Oops!", "Ocorreu um erro ao fazer o download da imagem :(");
                setImageWasDownloaded(true);
            })
            .catch(() => {
                Alert.alert("Oops!", "Ocorreu um erro ao fazer o download da imagem :(");
            })
            .finally(() => {
                setIsDownloadingImage(false);
            });
    };

    const loadNextImage = async () => {
        setCurrentImage(undefined);
        const response = await loadNewImage();
        if (response !== "error" && response[0]) {
            setCurrentImage(response[0]);
            setImageWasDownloaded(false);
        }
    };

    React.useEffect(() => {
        loadNextImage();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box backgroundColor={"white"} flex={1} gap={"medium"} paddingVertical={"medium"}>
                <Box flex={1} paddingHorizontal={"medium"}>
                    {currentImage ? (
                        <ImageViewer sourceImage={currentImage?.url} />
                    ) : (
                        <ImageLoader />
                    )}
                </Box>
                <Box flexDirection={"row"} justifyContent={"space-evenly"}>
                    <ActionButton
                        disabled={imageWasDownloaded || isDownloadingImage}
                        iconType={imageWasDownloaded ? "check" : "download"}
                        isLoading={isDownloadingImage}
                        onClickActionButton={downloadImage}
                    />
                    <ActionButton iconType={"chevron-right"} onClickActionButton={loadNextImage} />
                </Box>
            </Box>
        </SafeAreaView>
    );
};

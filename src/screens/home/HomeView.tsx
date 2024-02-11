import React from "react";
import { Box } from "../../components/Box/Box.tsx";
import { ActionButton } from "./components/ActionButton/ActionButton.tsx";
import { ImageViewer } from "./components/ImageViewer/ImageViewer.tsx";

export const HomeView = () => {
    const [backButtonAvailable, setBackButtonAvailable] = React.useState<boolean>(false);

    return (
        <Box backgroundColor={"white"} flex={1} gap={"medium"} paddingVertical={"medium"}>
            <Box flex={1} paddingHorizontal={"medium"}>
                <ImageViewer
                    sourceImage={
                        "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D"
                    }
                />
            </Box>
            <Box flexDirection={"row"} justifyContent={"space-evenly"}>
                <ActionButton
                    disabled={!backButtonAvailable}
                    iconType={"chevron-left"}
                    onClickActionButton={() => console.log()}
                />
                <ActionButton iconType={"download"} onClickActionButton={() => console.log()} />
                <ActionButton
                    iconType={"chevron-right"}
                    onClickActionButton={() => console.log()}
                />
            </Box>
        </Box>
    );
};

import { Linking, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "../../components/Box/Box.tsx";
import { theme } from "../../theme/theme.ts";
import { LinkButton } from "./components/LinkButton/LinkButton.tsx";
import { CreditSection } from "./components/CreditSection/CreditSection.tsx";

const GITHUB_URL = "https://github.com/AndersonVanzo/";
const LINKEDIN_URL = "https://www.linkedin.com/in/anderson-vanzo/";
const THE_CAT_API_URL = "https://thecatapi.com/";

export const AboutView = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <Box
                alignItems={"center"}
                backgroundColor={"pinkLight"}
                flex={1}
                gap={"extraLarge"}
                justifyContent={"center"}>
                <CreditSection credit={"Desenvolvido por"} name={"Anderson Vanzo"}>
                    <LinkButton
                        iconType={"github"}
                        onClickLinkButton={() => Linking.openURL(GITHUB_URL)}
                    />
                    <LinkButton
                        iconType={"linkedin"}
                        onClickLinkButton={() => Linking.openURL(LINKEDIN_URL)}
                    />
                </CreditSection>
                <CreditSection credit={"Imagens por"} name={"The Cat API"}>
                    <LinkButton
                        iconType={"website"}
                        onClickLinkButton={() => Linking.openURL(THE_CAT_API_URL)}
                    />
                </CreditSection>
            </Box>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: theme.colors.pinkLight,
        flex: 1,
    },
});

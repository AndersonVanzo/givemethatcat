import { Box } from "../../../../components/Box/Box.tsx";
import { Text } from "../../../../components/Text/Text.tsx";
import { CreditSectionProps } from "./types.ts";

export const CreditSection = ({ credit, name, children }: CreditSectionProps) => {
    return (
        <Box alignItems={"center"} justifyContent={"center"}>
            <Text color={"pinkDark"} variant={"smallBold"}>
                {credit}
            </Text>
            <Text color={"pinkDark"} variant={"large"}>
                {name}
            </Text>
            <Box flexDirection={"row"}>{children}</Box>
        </Box>
    );
};

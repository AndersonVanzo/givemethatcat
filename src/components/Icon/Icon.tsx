import { IconProps } from "./types.ts";

import Check from "../../assets/icons/check.svg";
import ChevronLeft from "../../assets/icons/chevron-left.svg";
import ChevronRight from "../../assets/icons/chevron-right.svg";
import Download from "../../assets/icons/download.svg";
import Github from "../../assets/icons/github.svg";
import House from "../../assets/icons/house.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Question from "../../assets/icons/question.svg";
import Website from "../../assets/icons/website.svg";

export const Icon = ({ color, size, type }: IconProps) => {
    switch (type) {
        case "check":
            return <Check color={color} height={size} width={size} />;
        case "chevron-left":
            return <ChevronLeft color={color} height={size} width={size} />;
        case "chevron-right":
            return <ChevronRight color={color} height={size} width={size} />;
        case "download":
            return <Download color={color} height={size} width={size} />;
        case "github":
            return <Github color={color} height={size} width={size} />;
        case "house":
            return <House color={color} height={size} width={size} />;
        case "linkedin":
            return <Linkedin color={color} height={size} width={size} />;
        case "question":
            return <Question color={color} height={size} width={size} />;
        case "website":
            return <Website color={color} height={size} width={size} />;
        default:
            return null;
    }
};

import { IconType } from "../../../../components/Icon/types.ts";

export type ActionButtonProps = {
    disabled?: boolean;
    iconType: IconType;
    isLoading?: boolean;
    onClickActionButton: () => void;
};

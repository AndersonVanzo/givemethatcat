import { CatImage } from "../../api/collections/images/types.ts";

export type HomeViewProps = {
    loadNewImage: () => Promise<CatImage[] | "error">;
};

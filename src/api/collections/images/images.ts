import { CatImage } from "./types.ts";
import { handleRequestError, handleRequestSuccess } from "../../handler.ts";
import { client } from "../../client.ts";

const search = async () => {
    return await client
        .get("/images/search")
        .then(res => {
            return handleRequestSuccess<CatImage[]>(res);
        })
        .catch(err => {
            return handleRequestError(err);
        });
};

export const images = {
    search,
};

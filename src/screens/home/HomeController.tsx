import React from "react";
import { HomeView } from "./HomeView.tsx";
import { api } from "../../api/api.ts";

export const HomeController = () => {
    const loadNewImage = async () => {
        const response = await api.images.search();
        if (response.success && response.data) {
            return response.data;
        }
        return "error";
    };

    return <HomeView loadNewImage={loadNewImage} />;
};

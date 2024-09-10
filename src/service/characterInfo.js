import apiClient from "./api";

export default {
    getCharacterView() {
        return apiClient.get("/view");
    },

    getCharacterImages() {
        return apiClient.get("/ch_img")
    },

    getCharacterSortView() {
        return apiClient.get("/viewSort");
    }


}
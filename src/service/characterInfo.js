import apiClient from "./api";

const default_url = "/view"

export default {
    getCharacterImages() {
        return apiClient.get("/ch_img")
    },

    getCharacterTotalView() {
        return apiClient.get(`${default_url}/total`);
    },

    getCharacterSortTotalView() {
        return apiClient.get(`${default_url}/sort/total`);
    },

    getCharacterDailyView() {
        return apiClient.get(`${default_url}/daily`);
    },

    getCharacterSortDailyView() {
        return apiClient.get(`${default_url}/sort/daily`);
    },

    getCharacterWeeklyView() {
        return apiClient.get(`${default_url}/Weekly`);
    },

    getCharacterSortWeeklyView() {
        return apiClient.get(`${default_url}/sort/Weekly`);
    },


}
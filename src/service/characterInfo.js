import apiClient from "./api";

export default {
    getCharacterView() {
        return apiClient.get("/view");
    }
}
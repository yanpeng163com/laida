import axios from "@/utils/http.js";

const API = {
    all: '/dataserver/api/v1/statistics/all'
}

export const all = () => axios.get(API.all);
import axios from "axios";

import {baseURL} from "../constants";

const apiService = axios.create({baseURL})

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmNkMzkyZDM1Zjc2NzFjNzY4OTVkYTY2ODU2NjVhMyIsInN1YiI6IjY1ZDhmMzQxNDJmMTlmMDE2MzE5ZGE1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K1y6jiChrknn7RgMYRlEcbNbuUS8PCps6PoggS8wpP0"

apiService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer ${token}`
    return request
})

export {apiService}
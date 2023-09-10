import axios from "axios"

const axiosInstance =  axios.create({
    baseURL: "https://ergast.com/api/f1"
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (year: string, signal?: AbortSignal) => {
        const finalEndpoint = (year ? `/${year}/${this.endpoint}` : `/${this.endpoint}`)

        return axiosInstance.get<T>(finalEndpoint, {signal}).then(res => res.data);
    }
}

export default APIClient;
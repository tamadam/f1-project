import apiClient from "./api-client";

class HttpService {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll(year: string) {
        const finalEndpoint = (year ? `/${year}/${this.endpoint}` : `/${this.endpoint}`)
        const controller = new AbortController();
        const request = apiClient
        .get(finalEndpoint, {
          signal: controller.signal,
        })

        return {request, cancel: () => controller.abort()}
    }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
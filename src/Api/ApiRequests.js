import * as axios from "axios";

export const apiRequest = {

    async getClients() {
        let clients = []
        let requestIsFinished = false
        let page = 1
        while (!requestIsFinished) {
            let response = await axios.get(`https://us-central1-smooth-topic-238416.cloudfunctions.net/test-fn?page=${page}`)
            if (response.data.length) {
                clients = [...clients, ...response.data]
                page += 1
            } else {
                requestIsFinished = true
            }
        }
        return clients
    }
}
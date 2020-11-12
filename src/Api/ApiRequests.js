
import * as axios from "axios";

export const apiRequest = {
    getClients(page) {
        return axios.get(`https://us-central1-smooth-topic-238416.cloudfunctions.net/test-fn?page=${page}`)
    }



}